/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x){'use strict';function L(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.4/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function me(a){if(C(a))u(a.objectMaxDepth)&&(Ic.objectMaxDepth=Sb(a.objectMaxDepth)?
a.objectMaxDepth:NaN);else return Ic}function Sb(a){return ba(a)&&0<a}function qa(a){if(null==a||Wa(a))return!1;if(H(a)||F(a)||B&&a instanceof B)return!0;var b="length"in Object(a)&&a.length;return ba(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,e;if(a)if(D(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||qa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,
a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Jc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function Kc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Lc(a){return function(b,d){a(d,b)}}function ne(){return++qb}function Tb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];
if(C(g)||D(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&C(n)?ga(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):Ub(n)?a[m]=n.clone():(C(a[m])||(a[m]=H(n)?[]:{}),Tb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Tb(a,va.call(arguments,1),!1)}function oe(a){return Tb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Vb(a,b){return S(Object.create(a),b)}function z(){}function Ya(a){return a}
function la(a){return function(){return a}}function Wb(a){return D(a.toString)&&a.toString!==ma}function w(a){return"undefined"===typeof a}function u(a){return"undefined"!==typeof a}function C(a){return null!==a&&"object"===typeof a}function Jc(a){return null!==a&&"object"===typeof a&&!Mc(a)}function F(a){return"string"===typeof a}function ba(a){return"number"===typeof a}function ga(a){return"[object Date]"===ma.call(a)}function D(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===
ma.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ha(a){return"boolean"===typeof a}function pe(a){return a&&ba(a.length)&&qe.test(ma.call(a))}function Ub(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function re(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function ra(a,b,d){function c(a,
b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Jc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&(b[f]=e(a[f],c));else for(f in a)ua.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!C(a))return a;var d=g.indexOf(a);if(-1!==d)return h[d];if(Wa(a)||Za(a))throw Fa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Mc(a)),
d=!0);g.push(a);h.push(e);return d?c(a,e,b):e}function f(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));
return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(D(a.cloneNode))return a.cloneNode(!0)}var g=[],h=[];d=Sb(d)?d:NaN;if(b){if(pe(b)||"[object ArrayBuffer]"===ma.call(b))throw Fa("cpta");if(a===b)throw Fa("cpi");H(b)?b.length=
0:q(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);h.push(b);return c(a,b,d)}return e(a,d)}function Xb(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],b[c]))return!1;return!0}}else{if(ga(a))return ga(b)?Xb(a.getTime(),b.getTime()):!1;if(Xa(a))return Xa(b)?a.toString()===b.toString():!1;
if(Za(a)||Za(b)||Wa(a)||Wa(b)||H(b)||ga(b)||Xa(b))return!1;d=V();for(c in a)if("$"!==c.charAt(0)&&!D(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!D(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(va.call(b,d))}function bb(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!D(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?
b.apply(a,arguments):b.call(a)}}function Nc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&x.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return ba(b)||(b=b?2:null),JSON.stringify(a,Nc,b)}function Oc(a){return F(a)?JSON.parse(a):a}function Pc(a,b){a=a.replace(se,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return da(d)?b:d}function Yb(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Pc(b,c);d*=b-c;a=new Date(a.getTime());
a.setMinutes(a.getMinutes()+d);return a}function xa(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Ia?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function Qc(a){try{return decodeURIComponent(a)}catch(b){}}function Rc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Qc(e),u(e)&&(f=
u(f)?Qc(f):!0,ua.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Zb(a){var b=[];q(a,function(a,c){H(a)?q(a,function(a){b.push($(c,!0)+(!0===a?"":"="+$(a,!0)))}):b.push($(c,!0)+(!0===a?"":"="+$(a,!0)))});return b.length?b.join("&"):""}function db(a){return $(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function $(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,
b?"%20":"+")}function te(a,b){var d,c,e=Ja.length;for(c=0;c<e;++c)if(d=Ja[c]+b,F(d=a.getAttribute(d)))return d;return null}function ue(a,b){var d,c,e={};q(Ja,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ja,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(ve?(e.strictDi=null!==te(d,"strict-di"),b(d,c?[c]:[],e)):x.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}
function Sc(a,b,d){C(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===x.document?"document":xa(a);throw Fa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;x&&e.test(x.name)&&(d.debugInfoEnabled=!0,x.name=x.name.replace(e,""));if(x&&!f.test(x.name))return c();x.name=x.name.replace(f,"");ea.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};D(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function we(){x.name="NG_ENABLE_DEBUG_INFO!"+x.name;x.location.reload()}function xe(a){a=ea.element(a).injector();if(!a)throw Fa("test");return a.get("$$testability")}
function Tc(a,b){b=b||"_";return a.replace(ye,function(a,c){return(c?b:"")+a.toLowerCase()})}function ze(){var a;if(!Uc){var b=rb();(na=w(b)?x.jQuery:b?x[b]:void 0)&&na.fn.on?(B=na,S(na.fn,{scope:Na.scope,isolateScope:Na.isolateScope,controller:Na.controller,injector:Na.injector,inheritedData:Na.inheritedData}),a=na.cleanData,na.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=na._data(f,"events"))&&c.$destroy&&na(f).triggerHandler("$destroy");a(b)}):B=W;ea.element=B;Uc=!0}}function fb(a,
b,d){if(!a)throw Fa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);fb(D(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ka(a,b){if("hasOwnProperty"===a)throw Fa("badname",b);}function Vc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&D(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=B(va.call(a,0,e))),c.push(b);return c||a}function V(){return Object.create(null)}function $b(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Wb(a)||H(a)||ga(a)?cb(a):a.toString()}return a}function Ae(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=L("$injector"),c=L("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||L;return b(a,"module",function(){var a={};return function(f,g,h){var k={};if("hasOwnProperty"===f)throw c("badname","module");
g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return v}}function b(a,c,d){d||(d=e);return function(b,e){e&&D(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return v}}if(!g)throw d("nomod",f);var e=[],p=[],r=[],J=a("$injector","invoke","push",p),v={_invokeQueue:e,_configBlocks:p,_runBlocks:r,info:function(a){if(u(a)){if(!C(a))throw c("aobj","value");k=a;return this}return k},requires:g,name:f,provider:b("$provide",
"provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",p),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:J,run:function(a){r.push(a);return this}};h&&J(h);return v})}})}function pa(a,b){if(H(a)){b=
b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(C(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Be(a,b){var d=[];Sb(b)&&(a=ra(a,null,b));return JSON.stringify(a,function(a,b){b=Nc(a,b);if(C(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Ce(a){S(a,{errorHandlingConfig:me,bootstrap:Sc,copy:ra,extend:S,merge:oe,equals:sa,element:B,forEach:q,injector:eb,noop:z,bind:bb,toJson:cb,fromJson:Oc,identity:Ya,isUndefined:w,isDefined:u,isString:F,
isFunction:D,isObject:C,isNumber:ba,isElement:Ub,isArray:H,version:De,isDate:ga,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:xe,reloadWithDebugInfo:we,$$minErr:L,$$csp:Ga,$$encodeUriSegment:db,$$encodeUriQuery:$,$$stringify:$b});ac=Ae(x);ac("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ee});a.provider("$compile",Wc).directive({a:Fe,input:Xc,textarea:Xc,form:Ge,script:He,select:Ie,option:Je,ngBind:Ke,ngBindHtml:Le,ngBindTemplate:Me,ngClass:Ne,ngClassEven:Oe,
ngClassOdd:Pe,ngCloak:Qe,ngController:Re,ngForm:Se,ngHide:Te,ngIf:Ue,ngInclude:Ve,ngInit:We,ngNonBindable:Xe,ngPluralize:Ye,ngRepeat:Ze,ngShow:$e,ngStyle:af,ngSwitch:bf,ngSwitchWhen:cf,ngSwitchDefault:df,ngOptions:ef,ngTransclude:ff,ngModel:gf,ngList:hf,ngChange:jf,pattern:Yc,ngPattern:Yc,required:Zc,ngRequired:Zc,minlength:$c,ngMinlength:$c,maxlength:ad,ngMaxlength:ad,ngValue:kf,ngModelOptions:lf}).directive({ngInclude:mf}).directive(vb).directive(bd);a.provider({$anchorScroll:nf,$animate:of,$animateCss:pf,
$$animateJs:qf,$$animateQueue:rf,$$AnimateRunner:sf,$$animateAsyncRun:tf,$browser:uf,$cacheFactory:vf,$controller:wf,$document:xf,$$isDocumentHidden:yf,$exceptionHandler:zf,$filter:cd,$$forceReflow:Af,$interpolate:Bf,$interval:Cf,$http:Df,$httpParamSerializer:Ef,$httpParamSerializerJQLike:Ff,$httpBackend:Gf,$xhrFactory:Hf,$jsonpCallbacks:If,$location:Jf,$log:Kf,$parse:Lf,$rootScope:Mf,$q:Nf,$$q:Of,$sce:Pf,$sceDelegate:Qf,$sniffer:Rf,$templateCache:Sf,$templateRequest:Tf,$$testability:Uf,$timeout:Vf,
$window:Wf,$$rAF:Xf,$$jqLite:Yf,$$Map:Zf,$$cookieReader:$f})}]).info({angularVersion:"1.6.4"})}function gb(a,b){return b.toUpperCase()}function wb(a){return a.replace(ag,gb)}function bc(a){a=a.nodeType;return 1===a||!a||9===a}function dd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(cc.test(a)){d=e.appendChild(b.createElement("div"));c=(bg.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(cg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);
d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function W(a){if(a instanceof W)return a;var b;F(a)&&(a=T(a),b=!0);if(!(this instanceof W)){if(b&&"<"!==a.charAt(0))throw dc("nosel");return new W(a)}if(b){b=x.document;var d;a=(d=dg.exec(a))?[b.createElement(d[1])]:(d=dd(a,b))?d.childNodes:[];ec(this,a)}else D(a)?ed(a):ec(this,a)}function fc(a){return a.cloneNode(!0)}function xb(a,b){!b&&bc(a)&&B.cleanData([a]);
a.querySelectorAll&&B.cleanData(a.querySelectorAll("*"))}function fd(a,b,d,c){if(u(c))throw dc("offargs");var e=(c=yb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&$a(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};q(b.split(" "),function(a){g(a);zb[a]&&g(zb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b]}function gc(a,b){var d=a.ng339,c=d&&hb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),
fd(a)),delete hb[d],a.ng339=void 0))}function yb(a,b){var d=a.ng339,d=d&&hb[d];b&&!d&&(a.ng339=d=++eg,d=hb[d]={events:{},data:{},handle:void 0});return d}function hc(a,b,d){if(bc(a)){var c,e=u(d),f=!e&&b&&!C(b),g=!b;a=(a=yb(a,!f))&&a.data;if(e)a[wb(b)]=d;else{if(g)return a;if(f)return a&&a[wb(b)];for(c in b)a[wb(c)]=b[c]}}}function Ab(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Bb(a,b){b&&a.setAttribute&&q(b.split(" "),
function(b){a.setAttribute("class",T((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(b)+" "," ")))})}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=T(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",T(d))}}function ec(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=
b}}function gd(a,b){return Db(a,"$"+(b||"ngController")+"Controller")}function Db(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function hd(a){for(xb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Eb(a,b){b||xb(a);var d=a.parentNode;d&&d.removeChild(a)}function fg(a,b){b=b||x;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function ed(a){function b(){x.document.removeEventListener("DOMContentLoaded",
b);x.removeEventListener("load",b);a()}"complete"===x.document.readyState?x.setTimeout(a):(x.document.addEventListener("DOMContentLoaded",b),x.addEventListener("load",b))}function id(a,b){var d=Fb[b.toLowerCase()];return d&&jd[wa(a)]&&d}function gg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||hg;1<g&&(f=pa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function hg(a,b,d){d.call(a,b)}function ig(a,b,d){var c=b.relatedTarget;c&&(c===a||jg.call(a,c))||d.call(a,b)}function Yf(){this.$get=function(){return S(W,{hasClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Cb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||ne)():d+":"+a}function kd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function ld(a){a=Function.prototype.toString.call(a).replace(kg,"");return a.match(lg)||a.match(mg)}function ng(a){return(a=ld(a))?"function("+
(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(C(b))q(b,Lc(a));else return a(b,c)}}function c(a,b){Ka(a,"service");if(D(b)||H(b))b=p.instantiate(b);if(!b.$get)throw ya("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(w(c))throw ya("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){fb(w(a)||H(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{F(a)?(c=ac(a),v.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):D(a)?b.push(p.invoke(a)):H(a)?b.push(p.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),ya("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw ya("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var k=0,h=a.length;k<h;k++){var l=a[k];if("string"!==typeof l)throw ya("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(za||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ha(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Gb,n={$provide:{provider:d(c),factory:d(f),service:d(function(a,
b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,la(b),!1)}),constant:d(function(a,b){Ka(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw ya("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return v.invoke(c.$get,c,void 0,a)}),v=J;n.$injectorProvider=
{$get:la(J)};v.modules=p.modules=V();var t=g(a),v=J.get("$injector");v.strictDi=b;q(t,function(a){a&&v.invoke(a)});return v}function nf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;D(c)?c=c():Ub(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
ba(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:ba(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||fg(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function og(a){F(a)&&
(a=a.split(" "));var b=V();q(a,function(a){a.length&&(b[a]=!0)});return b}function ia(a){return C(a)?a:{}}function pg(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(J--,0===J)for(;v.length;)try{v.pop()()}catch(b){d.error(b)}}}function f(){Oa=null;h()}function g(){t=I();t=w(t)?null:t;sa(t,G)&&(t=G);M=G=t}function h(){var a=M;g();if(N!==k.url()||a!==t)N=k.url(),M=t,q(K,function(a){a(k.url(),t)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=
!1;var J=0,v=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():v.push(a)};var t,M,N=l.href,A=b.find("base"),Oa=null,I=c.history?function(){try{return m.state}catch(a){}}:z;g();k.url=function(b,d,e){w(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=M===e;if(N===b&&(!c.history||f))return k;var h=N&&Aa(N)===Aa(b);N=b;M=e;!c.history||h&&f?(h||(Oa=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(Oa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());Oa&&(Oa=b);return k}return Oa||l.href.replace(/%27/g,"'")};k.state=function(){return t};var K=[],E=!1,G=null;k.onUrlChange=function(b){if(!E){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",f);E=!0}K.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(z),!0):!1}}function uf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new pg(a,c,b,d)}]}function vf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(p?p===a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw L("$cacheFactory")("iid",a);var g=0,h=
S({},c,{id:a}),k=V(),l=c&&c.capacity||Number.MAX_VALUE,m=V(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=V();g=0;m=V();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Sf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Wc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=V();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");
e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&C(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=re("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=V();this.directive=function N(b,d){fb(b,"name");Ka(b,"directive");F(b)?(c(b),fb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);D(h)?h={compile:la(h)}:!h.compile&&h.link&&(h.compile=la(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!F(l)||!/[EACM]/.test(l)))throw fa("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):q(b,Lc(N));return this};this.component=function(a,b){function c(a){function e(b){return D(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:qg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,D(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return u(a)?
(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return u(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var v=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(v=a,this):v};var t=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,e,n,E,G,y,O,X){function P(){try{if(!--ya)throw ia=void 0,fa("infchng",J);G.$apply(function(){for(var a=[],b=0,c=ia.length;b<c;++b)try{ia[b]()}catch(d){a.push(d)}ia=void 0;if(a.length)throw a;})}finally{ya++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function R(a,b,c){ta.innerHTML="<span "+b+">";b=ta.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function La(a,
b){try{a.addClass(b)}catch(c){}}function ca(a,b,c,d,e){a instanceof B||(a=B(a));var f=Ma(a,b,a,c,d,e);ca.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw fa("multilink");fb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?B(ha(g,B("<div>").append(a).html())):
c?Na.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ca.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ca.$$addScopeInfo(B(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=H(a)||a instanceof B,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===za&&L(a,r,k);m=jc(a[r],[],l,0===r?d:void 0,e);(f=m.length?W(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ca.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Ma(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function L(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ia)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ia)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=V(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function jc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=wa(a);Y(b,
Ba(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var G=!1,E=!1;k=p[K];l=k.name;m=k.value;k=Ba(l);(n=Ja.test(k))&&(l=l.replace(md,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ka))&&Z(k[1])&&(G=l,E=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ba(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,id(a,k)&&(c[k]=!0);pa(a,b,m,k,n);Y(b,k,"A",d,e,G,E)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;C(f)&&(f=f.animVal);if(F(f)&&""!==f)for(;a=h.exec(f);)k=Ba(a[2]),Y(b,k,"C",d,e)&&(c[k]=T(a[3])),f=f.substr(a.index+a[0].length);break;case Ia:la(b,a.nodeValue);break;case 8:if(!Fa)break;jb(a,b,c,d,e)}b.sort(ea);return b}function jb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ba(f[1]);Y(b,h,"M",d,e)&&(c[h]=T(f[2]))}}catch(k){}}function nd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function od(a,b,c){return function(d,e,f,g,h){e=nd(e[0],b,c);return a(d,e,f,g,h)}}function kc(a,b,c,d,e,f){var g;return a?ca(b,c,d,e,f):function(){g||(g=ca(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function W(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=od(a,c,d));a.require=y.require;a.directiveName=P;if(E===y||y.$$isolateScope)a=qa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=od(b,c,d));b.require=
y.require;b.directiveName=P;if(E===y||y.$$isolateScope)b=qa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);X&&(e=O);c||(c=X?P.parent():P);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(w(f))throw fa("noslot",d,xa(P));}else return l(a,b,e,c,R)}var p,y,t,v,J,O,N,P;b===f?(g=d,P=d.$$element):(P=B(f),g=new s(P,d));J=e;E?v=e.$new(!0):K&&(J=e.$parent);l&&(N=m,N.$$boundTransclude=l,N.isSlotFilled=function(a){return!!l.$$slots[a]});G&&(O=
ba(P,g,N,G,v,e,E));E&&(ca.$$addScopeInfo(P,v,!0,!(I&&(I===E||I===E.$$originalDirective))),ca.$$addScopeClass(P,!0),v.$$isolateBindings=E.$$isolateBindings,y=na(e,g,v,v.$$isolateBindings,E),y.removeWatches&&v.$on("$destroy",y.removeWatches));for(p in O){y=G[p];t=O[p];var Hb=y.$$bindings.bindToController;if(r){t.bindingInfo=Hb?na(J,g,t.instance,Hb,y):{};var A=t();A!==t.instance&&(t.instance=A,P.data("$"+y.name+"Controller",A),t.bindingInfo.removeWatches&&t.bindingInfo.removeWatches(),t.bindingInfo=
na(J,g,t.instance,Hb,y))}else t.instance=t(),P.data("$"+y.name+"Controller",t.instance),t.bindingInfo=na(J,g,t.instance,Hb,y)}q(G,function(a,b){var c=a.require;a.bindToController&&!H(c)&&C(c)&&S(O[b].instance,U(b,c,P,O))});q(O,function(a){var b=a.instance;if(D(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(D(b.$onInit))try{b.$onInit()}catch(e){c(e)}D(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());D(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
p=0;for(y=h.length;p<y;p++)t=h[p],ra(t,t.isolateScope?v:e,P,g,t.require&&U(t.directiveName,t.require,P,O),N);var R=e;E&&(E.template||null===E.templateUrl)&&(R=v);a&&a(R,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)t=k[p],ra(t,t.isolateScope?v:e,P,g,t.require&&U(t.directiveName,t.require,P,O),N);q(O,function(a){a=a.instance;D(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,G=l.controllerDirectives,E=l.newIsolateScopeDirective,I=l.templateDirective,t=l.nonTlbTranscludeDirective,
J=!1,O=!1,X=l.hasElementTranscludeDirective,v=d.$$element=B(b),y,P,N,A=e,R,u=!1,La=!1,x,z=0,F=a.length;z<F;z++){y=a[z];var Ma=y.$$start,L=y.$$end;Ma&&(v=nd(b,Ma,L));N=void 0;if(p>y.priority)break;if(x=y.scope)y.templateUrl||(C(x)?($("new/isolated scope",E||K,y,v),E=y):$("new/isolated scope",E,y,v)),K=K||y;P=y.name;if(!u&&(y.replace&&(y.templateUrl||y.template)||y.transclude&&!y.$$tlb)){for(x=z+1;u=a[x++];)if(u.transclude&&!u.$$tlb||u.replace&&(u.templateUrl||u.template)){La=!0;break}u=!0}!y.templateUrl&&
y.controller&&(G=G||V(),$("'"+P+"' controller",G[P],y,v),G[P]=y);if(x=y.transclude)if(J=!0,y.$$tlb||($("transclusion",t,y,v),t=y),"element"===x)X=!0,p=y.priority,N=v,v=d.$$element=B(ca.$$createComment(P,d[P])),b=v[0],ka(f,va.call(N,0),b),N[0].$$parentNode=N[0].parentNode,A=kc(La,N,e,p,g&&g.name,{nonTlbTranscludeDirective:t});else{var ja=V();if(C(x)){N=[];var Q=V(),jb=V();q(x,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;ja[b]=null;jb[b]=c});q(v.contents(),function(a){var b=Q[Ba(wa(a))];
b?(jb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):N.push(a)});q(jb,function(a,b){if(!a)throw fa("reqslot",b);});for(var ic in ja)ja[ic]&&(ja[ic]=kc(La,ja[ic],e))}else N=B(fc(b)).contents();v.empty();A=kc(La,N,e,void 0,void 0,{needsNewScope:y.$$isolateScope||y.$$newScope});A.$$slots=ja}if(y.template)if(O=!0,$("template",I,y,v),I=y,x=D(y.template)?y.template(v,d):y.template,x=Ea(x),y.replace){g=y;N=cc.test(x)?pd(ha(y.templateNamespace,T(x))):[];b=N[0];if(1!==N.length||1!==b.nodeType)throw fa("tplrt",P,"");
ka(f,v,b);F={$attr:{}};x=jc(b,[],F);var Y=a.splice(z+1,a.length-(z+1));(E||K)&&aa(x,E,K);a=a.concat(x).concat(Y);da(d,F);F=a.length}else v.html(x);if(y.templateUrl)O=!0,$("template",I,y,v),I=y,y.replace&&(g=y),n=ga(a.splice(z,a.length-z),v,d,f,J&&A,h,k,{controllerDirectives:G,newScopeDirective:K!==y&&K,newIsolateScopeDirective:E,templateDirective:I,nonTlbTranscludeDirective:t}),F=a.length;else if(y.compile)try{R=y.compile(v,d,A);var Z=y.$$originalDirective||y;D(R)?m(null,bb(Z,R),Ma,L):R&&m(bb(Z,R.pre),
bb(Z,R.post),Ma,L)}catch(ea){c(ea,xa(v))}y.terminal&&(n.terminal=!0,p=Math.max(p,y.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=O;n.transclude=A;l.hasElementTranscludeDirective=X;return n}function U(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(H(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=U(a,b[g],c,d);else C(b)&&(e={},q(b,function(b,f){e[f]=U(a,b,c,d)}));return e||null}function ba(a,b,c,d,e,f,g){var h=V(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=E(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Vb(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,e,g,h,k,l){if(c===
h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(w(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=Vb(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,t={isolateScope:null,bindToController:null};C(K.scope)&&(!0===K.bindToController?(t.bindToController=d(K.scope,r,!0),t.isolateScope={}):t.isolateScope=d(K.scope,r,!1));C(K.bindToController)&&(t.bindToController=d(K.bindToController,r,!0));if(t.bindToController&&!K.controller)throw fa("noctrl",
r);m=m.$$bindings=t;C(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function da(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,f,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),t=Vb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),y=D(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,E=r.templateNamespace;b.empty();e(y).then(function(c){var e,G;c=Ea(c);if(r.replace){c=cc.test(c)?pd(ha(E,T(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw fa("tplrt",r.name,y);c={$attr:{}};ka(f,b,e);var I=jc(e,[],c);C(r.scope)&&aa(I,!0);a=I.concat(a);da(d,c)}else e=K,b.html(c);a.unshift(t);n=W(a,e,d,g,b,
r,h,k,l);q(f,function(a,c){a===e&&(f[c]=b[0])});for(p=Ma(b[0].childNodes,g);m.length;){c=m.shift();G=m.shift();var v=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(G!==K){var O=G.className;l.hasElementTranscludeDirective&&r.replace||(I=fc(e));ka(v,B(G),I);La(B(I),O)}G=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,f,G)}}m=null}).catch(function(a){a instanceof Error&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ea(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,xa(d));}function la(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ca.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ca.$$addBindingClass(e);ca.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=x.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return y.HTML;var c=wa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return y.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return y.RESOURCE_URL}function pa(a,
c,d,e,f){var g=oa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===wa(a))throw fa("selmulti",xa(a));if(m.test(e))throw fa("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=V());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ka(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=x.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function qa(a,b){return S(function(){return a.apply(null,arguments)},
a,b)}function ra(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,xa(d))}}function na(a,c,d,e,f){function g(b,c,e){D(d.$onChanges)&&!Xb(c,e)&&(ia||(a.$$postDigest(P),ia=[]),m||(m={},ia.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,t,y,G;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(F(a)||Ha(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;r=c[m];
F(r)?d[h]=b(r)(a):Ha(r)&&(d[h]=r);l[h]=new Ib(lc,d[h]);k.push(p);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;t=n(c[m]);G=t.literal?sa:Xb;y=t.assign||function(){r=d[h]=t(a);throw fa("nonassign",c[m],m,f.name);};r=d[h]=t(a);p=function(b){G(b,d[h])||(G(b,r)?y(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,t.literal);k.push(p);break;case "<":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;t=n(c[m]);
var E=t.literal,I=d[h]=t(a);l[h]=new Ib(lc,d[h]);p=a.$watch(t,function(a,b){if(b===a){if(b===I||E&&sa(b,I))return;b=I}g(h,a,b);d[h]=a},E);k.push(p);break;case "&":t=c.hasOwnProperty(m)?n(c[m]):z;if(t===z&&p)break;d[h]=function(b){return t(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ca=/^\w/,ta=x.document.createElement("div"),Fa=v,Ga=t,ya=J,ia;s.prototype={$normalize:Ba,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,
a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=qd(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=qd(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=id(this.$$element[0],a),g=rd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Tc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=
b=X(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+X(T(g[m]),!0),f=f+(" "+T(g[m+1]));g=T(g[2*l]).split(/\s/);f+=X(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):Ca.test(e)?this.$$element.attr(e,b):R(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=V()),e=d[a]||(d[a]=[]);e.push(b);G.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var Aa=b.startSymbol(),Da=b.endSymbol(),Ea="{{"===Aa&&"}}"===Da?Ya:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Da)},Ja=/^ngAttr[A-Z]/,Ka=/^(.+)Start$/;ca.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:z;ca.$$addBindingClass=
p?function(a){La(a,"ng-binding")}:z;ca.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:z;ca.$$addScopeClass=p?function(a,b){La(a,b?"ng-isolate-scope":"ng-scope")}:z;ca.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return x.document.createComment(c)};return ca}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ba(a){return a.replace(md,"").replace(rg,gb)}function qd(a,b){var d="",c=a.split(/\s+/),
e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g===e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function pd(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ia&&""===d.nodeValue.trim())&&sg.call(a,b,1)}return a}function qg(a,b){if(b&&F(b))return b;if(F(a)){var d=sd.exec(a);if(d)return d[3]}}function wf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ka(b,"controller");C(b)?
S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!C(a.$scope))throw L("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(sd);if(!k)throw td("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Vc(g.$scope,m,!0)||(b?Vc(c,m,!0):void 0);if(!f)throw td("ctrlreg",m);sb(f,m,!0)}if(h)return h=(H(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,
l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(C(a)||D(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function xf(){this.$get=["$window",function(a){return B(a.document)}]}function yf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function zf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function mc(a){return C(a)?ga(a)?a.toISOString():cb(a):a}function Ef(){this.$get=function(){return function(a){if(!a)return"";var b=[];Kc(a,function(a,c){null===a||w(a)||(H(a)?q(a,function(a){b.push($(c)+"="+$(mc(a)))}):b.push($(c)+"="+$(mc(a))))});return b.join("&")}}}function Ff(){this.$get=function(){return function(a){function b(a,e,f){null===a||w(a)||(H(a)?q(a,function(a,c){b(a,e+"["+(C(a)?c:"")+"]")}):C(a)&&!ga(a)?Kc(a,function(a,
c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push($(e)+"="+$(mc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function nc(a,b){if(F(a)){var d=a.replace(tg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ud))||(c=(c=d.match(ug))&&vg[c[0]].test(d));if(c)try{a=Oc(d)}catch(e){throw oc("baddata",a,e);}}}return a}function vd(a){var b=V(),d;F(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(T(a.substr(0,d)));a=T(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):C(a)&&q(a,function(a,
d){var f=Q(d),g=T(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function wd(a){var b;return function(d){b||(b=vd(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function xd(a,b,d,c){if(D(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function Df(){var a=this.defaults={transformResponse:[nc],transformRequest:[function(a){return C(a)&&"[object File]"!==ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:pa(pc),put:pa(pc),patch:pa(pc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,e,f,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}
function e(a,b){var c,d={};q(a,function(a,e){D(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=xd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!C(b))throw L("$http")("badreq",b);if(!F(m.valueOf(b.url)))throw L("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=
function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,pa(b))}(b);g.method=ub(g.method);g.paramSerializer=F(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(t,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=xd(b.data,wd(c),void 0,b.transformRequest);w(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(z)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}O&&
(200<=a&&300>a?O.put(R,[a,c,vd(d),e]):O.remove(R));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?G.resolve:G.reject)({data:a,status:b,headers:wd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,pa(a.headers()),a.statusText)}function t(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var G=k.defer(),y=G.promise,O,X,P=c.headers,s="jsonp"===Q(c.method),R=c.url;s?R=m.getTrustedResourceUrl(R):F(R)||(R=m.valueOf(R));R=r(R,
c.paramSerializer(c.params));s&&(R=J(R,c.jsonpCallbackParam));n.pendingRequests.push(c);y.then(t,t);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(O=C(c.cache)?c.cache:C(a.cache)?a.cache:v);O&&(X=O.get(R),u(X)?X&&D(X.then)?X.then(K,K):H(X)?p(X[1],X[0],pa(X[2]),X[3]):p(X,200,{},"OK"):O.put(R,y));w(X)&&((X=yd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(P[c.xsrfHeaderName||a.xsrfHeaderName]=X),e(c.method,R,d,l,P,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return y}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw oc("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw oc("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var v=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var t=[];q(d,function(a){t.unshift(F(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Hf(){this.$get=function(){return function(){return new x.XMLHttpRequest}}}function Gf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return wg(a,c,a.defer,b,d[0])}]}function wg(a,b,d,c,e){function f(a,
b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,r,J,v){function t(){N&&N();A&&
A.abort()}h=h||a.url();if("jsonp"===Q(e))var M=c.createCallback(h),N=f(h,M,function(a,b){var e=200===a&&c.getResponse(M);u(I)&&d.cancel(I);N=A=null;l(a,e,"",b);c.removeCallback(M)});else{var A=b(e,h);A.open(e,h,!0);q(m,function(a,b){u(a)&&A.setRequestHeader(b,a)});A.onload=function(){var a=A.statusText||"",b="response"in A?A.response:A.responseText,c=1223===A.status?204:A.status;0===c&&(c=b?200:"file"===Ca(h).protocol?404:0);var e=A.getAllResponseHeaders();u(I)&&d.cancel(I);N=A=null;l(c,b,e,a)};e=
function(){u(I)&&d.cancel(I);N=A=null;l(-1,null,null,"")};A.onerror=e;A.onabort=e;A.ontimeout=e;q(J,function(a,b){A.addEventListener(b,a)});q(v,function(a,b){A.upload.addEventListener(b,a)});p&&(A.withCredentials=!0);if(r)try{A.responseType=r}catch(s){if("json"!==r)throw s;}A.send(w(k)?null:k)}if(0<n)var I=d(t,n);else n&&D(n.then)&&n.then(t)}}function Bf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(f,k,n,p){function M(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);return p&&!u(a)?a:$b(a)}catch(d){c(Da.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var q;k||(k=g(f),q=la(k),q.exp=f,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var A,s,I=0,K=[],E=[];q=f.length;for(var G=[],y=[];I<q;)if(-1!==(A=f.indexOf(a,
I))&&-1!==(s=f.indexOf(b,A+l)))I!==A&&G.push(g(f.substring(I,A))),I=f.substring(A+l,s),K.push(I),E.push(d(I,M)),I=s+m,y.push(G.length),G.push("");else{I!==q&&G.push(g(f.substring(I)));break}n&&1<G.length&&Da.throwNoconcat(f);if(!k||K.length){var O=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&w(a[b]))return;G[y[b]]=a[b]}return G.join("")};return S(function(a){var b=0,d=K.length,e=Array(d);try{for(;b<d;b++)e[b]=E[b](a);return O(e)}catch(g){c(Da.interr(f,g))}},{exp:f,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(E,function(d,e){var f=O(d);D(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function Cf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,r):f(t)}var p=4<arguments.length,r=p?va.call(arguments,4):[],J=b.setInterval,v=b.clearInterval,
t=0,M=u(m)&&!m,q=(M?c:d).defer(),A=q.promise;l=u(l)?l:0;A.$$intervalId=J(function(){M?e.defer(n):a.$evalAsync(n);q.notify(t++);0<l&&t>=l&&(q.resolve(t),v(A.$$intervalId),delete g[A.$$intervalId]);M||a.$apply()},k);g[A.$$intervalId]=q;return A}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(z),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function qc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
db(a[b]);return a.join("/")}function zd(a,b){var d=Ca(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||xg[d.protocol]||null}function Ad(a,b){if(yg.test(a))throw kb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Ca(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Rc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function rc(a,b){return a.slice(0,b.length)===
b}function ka(a,b){if(rc(b,a))return b.substr(a.length)}function Aa(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function sc(a,b,d){this.$$html5=!0;d=d||"";zd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!F(d))throw kb("ipthprfx",a,b);Ad(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),d=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=ka(a,c))?(g=f,g=d&&u(f=ka(d,f))?b+(ka("/",f)||f):a+g):u(f=ka(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function tc(a,b,d){zd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=ka(d,e),w(f)&&(f=e));Ad(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;rc(f,
e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Zb(this.$$search),e=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return Aa(a)===Aa(b)?(this.$$parse(b),!0):!1}}function Bd(a,b,d){this.$$html5=!0;tc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;a===Aa(c)?f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Zb(this.$$search),e=this.$$hash?"#"+db(this.$$hash):"";this.$$url=qc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Jb(a){return function(){return this[a]}}function Cd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Jf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};
this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){if(Ha(a))return b.enabled=a,this;if(C(a)){Ha(a.enabled)&&(b.enabled=a.enabled);Ha(a.requireBase)&&(b.requireBase=a.requireBase);if(Ha(a.rewriteLinks)||F(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=
f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?sc:Bd}else p=Aa(n),m=tc;var r=p.substr(0,Aa(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&
2!==a.which&&2!==a.button){for(var h=B(a.target);"a"!==wa(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!F(e)||!w(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");C(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=Ca(e.animVal).href);J.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(n)&&c.url(l.absUrl(),!0);var v=!0;
c.onUrlChange(function(a,b){rc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=lb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(v=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(v||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(v||m)v=
!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))})}l.$$replace=!1});return l}]}function Kf(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||z;a=!1;try{a=!!e.apply}catch(f){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}var f=za||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function zg(a){return a+""}function Ag(a,
b){return"undefined"!==typeof a?a:b}function Dd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function U(a,b){var d,c,e;switch(a.type){case s.Program:d=!0;q(a.body,function(a){U(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:U(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;
a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:U(a.test,b);U(a.alternate,b);U(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:U(a.object,b);a.computed&&U(a.property,b);a.constant=a.object.constant&&
(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=e=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=e?c:[a];break;case s.AssignmentExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=
d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){U(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch);a.computed&&(U(a.key,b),a.key.constant||c.push.apply(c,a.key.toWatch))});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Ed(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Fd(a){return a.type===
s.Identifier||a.type===s.MemberExpression}function Gd(a){if(1===a.body.length&&Fd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Hd(a){this.$filter=a}function Id(a){this.$filter=a}function uc(a,b,d){this.ast=new s(a,d);this.astCompiler=d.csp?new Id(b):new Hd(b)}function vc(a){return D(a.valueOf)?a.valueOf():Bg.call(a)}function Lf(){var a=V(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=
function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=vc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,e){var g=d.inputs,h;if(1===g.length){var k=f,g=g[0];return a.$watch(function(a){var b=g(a);f(b,k,d.literal)||(h=d(a,void 0,void 0,[b]),k=b&&vc(b));return h},b,c,e)}for(var l=[],m=[],n=0,E=g.length;n<E;n++)l[n]=f,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=g.length;c<e;c++){var k=g[c](a);if(b||(b=!f(k,l[c],d.literal)))m[c]=k,l[c]=k&&vc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(a){return d(a)}function h(a,c,d){n=a;D(b)&&b(a,c,d);l(a)&&d.$$postDigest(function(){l(n)&&m()})}var l=d.literal?k:u,m,n;return m=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a){var b=!0;q(a,function(a){u(a)||(b=!1)});return b}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){function c(d,
e,g,h){g=f&&h?h[0]:a(d,e,g,h);return b(g,d,e)}function d(c,e,g,k){g=f&&k?k[0]:a(c,e,g,k);c=b(g,c,e);return h(g)?c:g}if(!b)return a;var e=a.$$watchDelegate,f=!1,h=a.literal?k:u,l=a.oneTime?d:c;l.literal=a.literal;l.oneTime=a.oneTime;f=!a.inputs;e&&e!==g?(l.$$watchDelegate=e,l.inputs=a.inputs):b.$stateful||(l.$$watchDelegate=g,l.inputs=a.inputs?a.inputs:[a]);return l}var n={csp:Ga().noUnsafeEval,literals:ra(b),isIdentifierStart:D(d)&&d,isIdentifierContinue:D(c)&&c};return function(b,c){var d,f,k;switch(typeof b){case "string":return k=
b=b.trim(),d=a[k],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(f=!0,b=b.substring(2)),d=new wc(n),d=(new uc(d,e,n)).parse(b),d.constant?d.$$watchDelegate=l:f?(d.oneTime=!0,d.$$watchDelegate=h):d.inputs&&(d.$$watchDelegate=g),a[k]=d),m(d,c);case "function":return m(b,c);default:return m(z,c)}}}]}function Nf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Jd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Of(){var a=
!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Jd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Jd(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){k(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!s&&A.length;){var a=A.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):w(c)?"undefined":"string"!==typeof c?Be(c,void 0):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===s&&0===A.length&&a(g),A.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=!0,++s,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{D(c)?k(e,c(b.value)):1===b.status?k(e,b.value):
m(e,b.value)}catch(n){m(e,n)}}}finally{--s,d&&0===s&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,M("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(C(b)||D(b))f=b.then;D(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=
c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,D(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new f;m(b,a);return b}function J(a,b,c){var d=null;try{D(c)&&(d=c())}catch(e){return r(e)}return d&&D(d.then)?d.then(function(){return b(a)},r):b(a)}function v(a,b,c,d){var e=new f;k(e,a);return e.then(b,c,d)}function t(a){if(!D(a))throw M("norslvr",a);var b=new f;a(function(a){k(b,a)},function(a){m(b,a)});return b}var M=
L("$q",TypeError),s=0,A=[];S(f.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,u,a)},function(b){return J(b,r,a)},b)}});var u=v;t.prototype=f.prototype;t.defer=c;t.reject=r;t.when=v;t.resolve=u;t.all=function(a){var b=new f,c=0,d=H(a)?
[]:{};q(a,function(a,e){c++;v(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};t.race=function(a){var b=c();q(a,function(a){v(a).then(b.resolve,b.reject)});return b.promise};return t}function Xf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=
b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Mf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=L("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=
!0}function l(a){9===za&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(M.$$phase)throw d("inprog",
M.$$phase);M.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function v(){for(;u.length;)try{u.shift()()}catch(a){f(a)}e=null}function t(){null===e&&(e=h.defer(function(){M.$apply(v)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;D(b)||(l.fn=z);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=$a(k,l);0<=a&&(p(h,-1),
a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(C(e))if(qa(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ua.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,t=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(C(e))if(qa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,t=b,q,u=[],w,x;n("$digest");h.$$checkUrlChange();this===M&&null!==e&&(h.defer.cancel(e),v());c=null;do{r=!1;q=this;for(p=0;p<s.length;p++){try{x=s[p],l=x.fn,l(x.scope,x.locals)}catch(z){f(z)}c=null}s.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=
p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?sa(g,k):da(g)&&da(k)))r=!0,c=a,a.last=a.eq?ra(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>t&&(w=4-t,u[w]||(u[w]=[]),u[w].push({msg:D(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(B){f(B)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||s.length)&&!t--)throw M.$$phase=
null,d("infdig",b,u);}while(r||s.length);for(M.$$phase=null;I<A.length;)try{A[I++]()}catch(F){f(F)}A.length=I=0;h.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===M&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=z;this.$on=this.$watch=this.$watchGroup=function(){return z};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){M.$$phase||s.length||h.defer(function(){s.length&&M.$digest()});s.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){A.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{M.$$phase=null}}catch(b){f(b)}finally{try{M.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);a=g(a);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var M=new m,s=M.$$asyncQueue=[],A=M.$$postDigestQueue=[],u=M.$$applyAsyncQueue=[],I=0;return M}]}function Ee(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Ca(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Cg(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ta("iwcard",a);a=Kd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ta("imatcher");}function Ld(a){var b=[];u(a)&&q(a,function(a){b.push(Cg(a))});return b}function Qf(){this.SCE_CONTEXTS=oa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Ld(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Ld(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?yd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ta("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[oa.HTML]=e(g);h[oa.CSS]=e(g);h[oa.URL]=e(g);h[oa.JS]=e(g);h[oa.RESOURCE_URL]=e(h[oa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ta("icontext",a,b);if(null===b||w(b)||
""===b)return b;if("string"!==typeof b)throw ta("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===oa.RESOURCE_URL){var g=Ca(e.toString()),n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return e;throw ta("insecurl",e.toString());}if(d===oa.HTML)return f(e);throw ta("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Pf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>za)throw ta("iequirks");var c=pa(oa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(oa,function(a,b){var d=Q(b);c[("parse_as_"+d).replace(xc,gb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(xc,gb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(xc,gb)]=function(b){return g(a,b)}});return c}]}function Rf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||
{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&za)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ga(),transitions:k,animations:l,android:e}}]}function Tf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler",
"$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(h,k){g.totalPendingRequests++;if(!F(h)||w(d.get(h)))h=f.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==nc}):l===nc&&(l=null);return c.get(h,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=Dg("tpload",h,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=
0;return g}]}function Uf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ea.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Kd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+
'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Vf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){D(f)||(l=k,k=f,f=z);var m=va.call(arguments,3),n=u(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[r.$$timeoutId]}n||
a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(z),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Ca(a){za&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,""):
"",hostname:aa.hostname,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function yd(a){a=F(a)?Ca(a):a;return a.protocol===Md.protocol&&a.host===Md.host}function Wf(){this.$get=la(x)}function Nd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&
(c[l]=b(g.substring(k+1))));return c}}function $f(){this.$get=Nd}function cd(a){function b(d,c){if(C(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Od);b("date",Pd);b("filter",Eg);b("json",Fg);b("limitTo",Gg);b("lowercase",Hg);b("number",Qd);b("orderBy",Rd);b("uppercase",Ig)}function Eg(){return function(a,b,d,c){if(!qa(a)){if(null==a)return a;throw L("filter")("notarray",
a);}c=c||"$";var e;switch(yc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Jg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Jg(a,b,d,c){var e=C(a)&&d in a;!0===b?b=sa:D(b)||(b=function(a,b){if(w(a))return!1;if(null===a||null===b)return a===b;if(C(b)||C(a)&&!Wb(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!C(f)?Ea(f,a[d],b,d,!1):Ea(f,a,b,d,c)}}function Ea(a,b,d,c,e,
f){var g=yc(a),h=yc(b);if("string"===h&&"!"===b.charAt(0))return!Ea(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Ea(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if(k.charAt&&"$"!==k.charAt(0)&&Ea(a[k],b,d,c,!0))return!0;return f?!1:Ea(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!D(f)&&!w(f)&&(g=k===c,!Ea(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function yc(a){return null===a?"null":typeof a}function Od(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Sd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Sd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Kg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Td))&&(a=a.replace(Td,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===zc;e++);
if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===zc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Ud&&(d=d.splice(0,Ud-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Lg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-
1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Sd(a,b,d,c,e){if(!F(a)&&!ba(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=Kg(h);Lg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=zc+a;d&&(a=a.substr(a.length-b));return e+a}function Y(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Kb(f,b,c,e)}}function mb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Vd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Wd(a){return function(b){var d=Vd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function Ac(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Pd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=Mg.test(c)?Z(c):b(c));ba(c)&&(c=new Date(c));if(!ga(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=Ng.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Pc(f,m),c=Yb(c,f,!0));q(h,function(b){k=Og[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Fg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function Gg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(da(b))return a;ba(a)&&(a=a.toString());if(!qa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?Bc(a,d,d+b):0===d?Bc(a,b,a.length):Bc(a,Math.max(0,d+b),d)}}function Bc(a,b,d){return F(a)?a.slice(b,d):va.call(a,b,d)}function Rd(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(D(b))d=b;else if(F(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(C(k)&&(k=a.index),C(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!qa(a))throw L("orderBy")("notarray",a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=D(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(D(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Wb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Qa(a){D(a)&&(a={link:a});a.restrict=a.restrict||"AC";return la(a)}function Lb(a,b,d,
c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Xd(this)}function Xd(a){a.$$classCache={};a.$$classCache[Yd]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function Zd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,
b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Tc(c,"-"):"";b(a,nb+c,!0===d);b(a,Yd+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){w(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&e(this.$pending,a,h),$d(this.$pending)&&(this.$pending=void 0));Ha(g)?g?(e(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),e(this.$$success,a,h)):(e(this.$error,a,h),e(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=
void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=$d(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function $d(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Cc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Ra(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",
function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=T(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",
m)}b.on("change",l);if(ae[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ga(d))return d;if(F(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Pg.test(d))return new Date(d);
a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function ob(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return u(a)&&!ga(a)?d(a)||
void 0:a}Dc(e,f,g,h);Ra(e,f,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Yb(a,r)),a});h.$formatters.push(function(a){if(a&&!ga(a))throw pb("datefmt",a);if(n(a))return(q=a)&&r&&(q=Yb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(u(g.min)||g.ngMin){var v;h.$validators.min=function(a){return!n(a)||w(v)||d(a)>=v};g.$observe("min",function(a){v=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var t;
h.$validators.max=function(a){return!n(a)||w(t)||d(a)<=t};g.$observe("max",function(a){t=p(a);h.$validate()})}}}function Dc(a,b,d,c){(c.$$hasNativeValidators=C(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function be(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Qg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!ba(b))throw pb("numfmt",b);b=b.toString()}return b})}
function Sa(a){u(a)&&!ba(a)&&(a=parseFloat(a));return da(a)?void 0:a}function Ec(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ce(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Ec(a):0,h=e?Ec(b):0,k=f?Ec(d):0,g=Math.max(g,h,k),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function de(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",
d,c);return a(b)}return e}function Fc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){var b=a;H(a)?b=a.map(c).join(" "):C(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,h,k){function l(a,b){var c=[];q(a,function(a){if(0<b||n[a])n[a]=(n[a]||
0)+b,n[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===b){var c=r,c=l(c&&c.split(" "),1);k.$addClass(c)}else c=r,c=l(c&&c.split(" "),-1),k.$removeClass(c);p=a}var n=h.data("$classCounts"),p=!0,r;n||(n=V(),h.data("$classCounts",n));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(k[a],c),function(a){F(a)||(a=c(a));if(p===b){var e=a,f=r&&r.split(" "),g=e&&e.split(" "),e=d(f,g),f=d(g,f),e=l(e,-1),f=l(f,1);k.$addClass(f);k.$removeClass(e)}r=a})}}}]}
function Ob(a,b,d,c,e,f,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;
this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=h;this.$$exceptionHandler=b;Xd(this);Rg(this)}function Rg(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=
b;a.$$parserValid=void 0;for(var d=a.$formatters,c=d.length,e=b;c--;)e=d[c](e);a.$viewValue!==e&&(a.$$updateEmptyClasses(e),a.$viewValue=a.$$lastCommittedViewValue=e,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,z))}return b})}function Gc(a){this.$$options=a}function ee(a,b){q(b,function(b,c){u(a[c])||(a[c]=b)})}function Ta(a,b){a.prop("selected",b);a.attr("selected",b)}var Sg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Ic={objectMaxDepth:5},Q=function(a){return F(a)?a.toLowerCase():
a},ub=function(a){return F(a)?a.toUpperCase():a},za,B,na,va=[].slice,sg=[].splice,Tg=[].push,ma=Object.prototype.toString,Mc=Object.getPrototypeOf,Fa=L("ng"),ea=x.angular||(x.angular={}),ac,qb=0;za=x.document.documentMode;var da=Number.isNaN||function(a){return a!==a};z.$inject=[];Ya.$inject=[];var H=Array.isArray,qe=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,T=function(a){return F(a)?a.trim():a},Kd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Ga=function(){if(!u(Ga.rules)){var a=x.document.querySelector("[ng-csp]")||x.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ga.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ga;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ga.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ja.length,
c,e;for(b=0;b<d;++b)if(c=Ja[b],a=x.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},se=/:/g,Ja=["ng-","data-ng-","ng:","x-ng-"],ve=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof x.HTMLScriptElement||b instanceof x.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=
b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(x.document),ye=/[A-Z]/g,Uc=!1,Ia=3,De={full:"1.6.4",major:1,minor:6,dot:4,codeName:"phenomenal-footnote"};W.expando="ng339";var hb=W.cache={},eg=1;W._data=function(a){return this.cache[a[this.expando]]||{}};var ag=/-([a-z])/g,Ug=/^-ms-/,zb={mouseleave:"mouseout",mouseenter:"mouseover"},dc=L("jqLite"),dg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
cc=/<|&#?\w+;/,bg=/<([\w:-]+)/,cg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var jg=x.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Na=W.prototype={ready:ed,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Tg,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Fb[Q(a)]=a});var jd={};q("input select option textarea button form details".split(" "),function(a){jd[a]=!0});var rd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",
ngPattern:"pattern",ngStep:"step"};q({data:hc,removeData:gc,hasData:function(a){for(var b in hb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)gc(a[b])}},function(a,b){W[b]=a});q({data:hc,inheritedData:Db,scope:function(a){return B.data(a,"$scope")||Db(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:gd,injector:function(a){return Db(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Ab,css:function(a,b,d){b=wb(b.replace(Ug,"ms-"));if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ia&&2!==c&&8!==c&&a.getAttribute){var c=Q(b),e=Fb[c];if(u(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Ia?
a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;xb(a,!0);a.innerHTML=b},empty:hd},function(a,b){W.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==hd&&w(2===a.length&&a!==Ab&&a!==gd?b:c)){if(C(b)){for(e=0;e<g;e++)if(a===hc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=
a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:gc,on:function(a,b,d,c){if(u(c))throw dc("onargs");if(bc(a)){c=yb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=gg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));h.push(d)};g--;)b=c[g],zb[b]?(h(zb[b],ig),h(b,void 0,!0)):h(b)}},
off:fd,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;xb(a);q(new W(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new W(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},
prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new W(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=B(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Eb,detach:function(a){Eb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new W(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Cb,removeClass:Bb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var e=d;w(e)&&(e=!Ab(a,b));
(e?Cb:Bb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:fc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=yb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===
this.immediatePropagationStopped},stopPropagation:z,type:f,target:a},b.type&&(c=S(c,b)),b=pa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){W.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),u(f)&&(f=B(f))):ec(f,a(this[g],b,c,e));return u(f)?f:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;var Vg=Object.create(null);kd.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;
this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return da(a)?Vg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};
var Gb=kd,Zf=[function(){this.$get=[function(){return Gb}]}],lg=/^([^(]+?)=>/,mg=/^[^(]*\(\s*([^)]*)\)/m,Wg=/,/,Xg=/^\s*(_?)(\S+?)\1\s*$/,kg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,ya=L("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||ng(a)),ya("strictdi",d);b=ld(a);q(b[1].split(Wg),function(a){a.replace(Xg,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",
!0);return c};var fe=L("$animate"),qf=function(){this.$get=z},rf=function(){var a=new Gb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):H(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=og(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Cb(a,e);f&&Bb(a,f)});a.delete(b)}});b.length=0}return{enabled:z,
on:z,off:z,pin:z,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.set(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},of=["$provide",function(a){var b=this,d=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw fe("notcsel",c);var f=c+"-animation";b.$$registeredAnimations[c.substr(1)]=
f;a.factory(f,d)};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,fe("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var l=d[e];if(1===l.nodeType){e=l;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&
a.end()},enter:function(d,g,h,k){g=g&&B(g);h=h&&B(h);g=g||h.parent();b(d,g,h);return a.push(d,"enter",ia(k))},move:function(d,g,h,k){g=g&&B(g);h=h&&B(h);g=g||h.parent();b(d,g,h);return a.push(d,"move",ia(k))},leave:function(b,d){return a.push(b,"leave",ia(d),function(){b.remove()})},addClass:function(b,d,e){e=ia(e);e.addClass=ib(e.addclass,d);return a.push(b,"addClass",e)},removeClass:function(b,d,e){e=ia(e);e.removeClass=ib(e.removeClass,d);return a.push(b,"removeClass",e)},setClass:function(b,d,
e,k){k=ia(k);k.addClass=ib(k.addClass,d);k.removeClass=ib(k.removeClass,e);return a.push(b,"setClass",k)},animate:function(b,d,e,k,l){l=ia(l);l.from=l.from?S(l.from,d):d;l.to=l.to?S(l.to,e):e;l.tempClasses=ib(l.tempClasses,k||"ng-inline-animate");return a.push(b,"animate",l)}}}]}],tf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},
sf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},
done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:z,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},pf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=ra(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=L("$compile"),lc=new function(){};Wc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===lc};var md=/^((?:x|data)[:\-_])/i,rg=/[:\-_]+(.)/g,td=L("$controller"),
sd=/^(\S+)(\s+as\s+([\w$]+))?$/,Af=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},ud="application/json",pc={"Content-Type":ud+";charset=utf-8"},ug=/^\[|^\{(?!\{)/,vg={"[":/]$/,"{":/}$/},tg=/^\)]\}',?\n/,oc=L("$http"),Da=ea.$interpolateMinErr=L("$interpolate");Da.throwNoconcat=function(a){throw Da("noconcat",a);};Da.interr=function(a,b){return Da("interr",a,b.toString())};var If=function(){this.$get=function(){function a(a){var b=
function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ea.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},Yg=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,xg={http:80,https:443,ftp:21},kb=L("$location"),yg=/^\s*[\\/]{2,}/,Zg={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),
url:function(a){if(w(a))return this.$$url;var b=Yg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:Cd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||ba(a))a=a.toString(),this.$$search=Rc(a);else if(C(a))a=ra(a,{}),q(a,function(b,
c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Cd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([Bd,tc,sc],function(a){a.prototype=Object.create(Zg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==sc||!this.$$html5)throw kb("nostate");this.$$state=w(b)?null:b;this.$$urlUpdatedByLocation=
!0;return this}});var Ua=L("$parse"),Bg={}.constructor.prototype.valueOf,Qb=V();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});var $g={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},wc=function(a){this.options=a};wc.prototype={constructor:wc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],e=Qb[d];Qb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=
a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?
this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ua("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=Q(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;
for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=$g[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=
a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";
s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,
expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Fd(a))throw Ua("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,
test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};
return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},
unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=ra(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:
this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");
return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},
arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?
(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ua("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ua("ueoe",
this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ua("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},
$locals:{type:s.LocalsExpression}}};Hd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(a,b.$filter);var d="",c;this.stage="assign";if(c=Gd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Ed(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var h=b.nextId();
b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,zg,Ag,Dd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||z;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,
void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,
b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),
k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.computedMember(g,h),k.assign(b,
m),d&&(d.computed=!0,d.name=h)):(e&&1!==e&&k.if_(k.isNull(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):
(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);m=k.member(g.context,
g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();
k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+
b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,
b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,
b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(ba(a))return a.toString();if(!0===a)return"true";if(!1===
a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ua("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Id.prototype={compile:function(a){var b=this;U(a,b.$filter);var d,c;if(d=Gd(a))c=this.recurse(d);d=Ed(a.body);var e;d&&(e=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;e.push(d);a.watchId=c}));var f=[];q(a.body,function(a){f.push(b.recurse(a.expression))});
a=0===a.body.length?z:1===a.body.length?f[0]:function(a,b){var c;q(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+
a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return f.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,
e,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var n=e(a,c,d,f),p;if(null!=n.value){p=[];for(var r=0;r<g.length;++r)p.push(g[r](a,c,d,f));p=n.value.apply(n.context,p)}return b?{value:p}:p};case s.AssignmentExpression:return c=
this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var n=c(a,d,f,g);a=e(a,d,f,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:
""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:
d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=Dd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);
return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?
{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:
c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]=
{});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,h){var k=a(e,f,g,h),l,m;null!=k&&(l=b(e,f,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};uc.prototype=
{constructor:uc,parse:function(a){a=this.ast.ast(a);var b=this.astCompiler.compile(a);b.literal=0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression);b.constant=a.constant;return b}};var ta=L("$sce"),oa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},xc=/_([a-z])/g,Dg=L("$compile"),aa=x.document.createElement("a"),Md=Ca(x.location.href);Nd.$inject=["$document"];
cd.$inject=["$provide"];var Ud=22,Td=".",zc="0";Od.$inject=["$locale"];Qd.$inject=["$locale"];var Og={yyyy:Y("FullYear",4,0,!1,!0),yy:Y("FullYear",2,0,!0,!0),y:Y("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),LLLL:mb("Month",!1,!0),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),
a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Wd(2),w:Wd(1),G:Ac,GG:Ac,GGG:Ac,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Ng=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Mg=/^-?\d+$/;Pd.$inject=["$locale"];var Hg=la(Q),Ig=la(ub);Rd.$inject=["$parse"];var Fe=la({restrict:"E",compile:function(a,
b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Fb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ba("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(rd,function(a,b){vb[b]=
function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Sg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ba("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),
za&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Mb={$addControl:z,$$renameControl:function(a,b){a.$name=b},$removeControl:z,$setValidity:z,$setDirty:z,$setPristine:z,$setSubmitted:z};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ka(a.$name,"input");this.$$controls.push(a);
a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);$a(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,
Va);this.$$animate.addClass(this.$$element,Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Va,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};
Zd({clazz:Lb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&($a(c,d),0===c.length&&delete a[b])}});var ge=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||z}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,f){d.addClass(Va).addClass(nb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):z;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);S(n,Mb)})}}}}}]},Ge=ge(),
Se=ge(!0),Pg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,ah=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,bh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Qg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,he=/^(\d{4,})-(\d{2})-(\d{2})$/,ie=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
Hc=/^(\d{4,})-W(\d\d)$/,je=/^(\d{4,})-(\d\d)$/,ke=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ae=V();q(["date","datetime-local","month","time","week"],function(a){ae[a]=!0});var le={text:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c)},date:ob("date",he,Nb(he,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ie,Nb(ie,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",ke,Nb(ke,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Hc,function(a,b){if(ga(a))return a;
if(F(a)){Hc.lastIndex=0;var d=Hc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Vd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:ob("month",je,Nb(je,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Dc(a,b,d,c);be(c);Ra(a,b,d,c,e,f);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g},d.$observe("min",function(a){g=Sa(a);c.$validate()});
if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h},d.$observe("max",function(a){h=Sa(a);c.$validate()});if(u(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||w(k)||ce(b,g||0,k)};d.$observe("step",function(a){k=Sa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||ah.test(d)}},email:function(a,b,d,c,e,f){Ra(a,b,d,c,e,f);Cc(c);c.$$parserName=
"email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||bh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==T(d.ngTrim);w(d.name)&&b.attr("name",++qb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=T(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=T(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Sa(a);da(c.$modelValue)||
(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=Sa(a);da(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Sa(a);da(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Dc(a,b,d,c);be(c);Ra(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=u(d.min);e=u(d.max);f=u(d.step);var s=c.$render;c.$render=m&&u(q.rangeUnderflow)&&
u(q.rangeOverflow)?function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(n)||b>=n},g("min",h));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||w(p)||b<=p},g("max",k));f&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||w(r)||ce(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,h){var k=de(h,a,"ngTrueValue",d.ngTrueValue,!0),l=de(h,a,"ngFalseValue",
d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:z,button:z,submit:z,reset:z,file:z},Xc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(le[Q(g.type)]||le.text)(e,f,g,h[0],b,a,d,c)}}}}],ch=/^(true|false|\d+)$/,
kf=function(){function a(a,d,c){var e=u(c)?c:9===za?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return ch.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Ke=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=$b(a)})}}}}],Me=["$interpolate",
"$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],Le=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,
function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],jf=la({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ne=Fc("",!0),Pe=Fc("Odd",0),Oe=Fc("Even",1),Qe=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Re=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],bd={},dh={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ba("ng-"+a);bd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};dh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ue=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",
e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Ve=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var r=0,q,s,t,w=function(){s&&(s.remove(),s=null);q&&(q.$destroy(),q=
null);t&&(d.leave(t).done(function(a){!1!==a&&(s=null)}),s=t,t=null)};c.$watch(f,function(f){var m=function(a){!1===a||!u(h)||h&&!c.$eval(h)||b()},s=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&s===r){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).done(m)});q=b;t=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||s!==r||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],mf=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(dd(e.template,x.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],We=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),hf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?T(e):e;c.$parsers.push(function(a){if(!w(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?T(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",Yd="ng-invalid",Va="ng-pristine",Rb="ng-dirty",pb=L("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+
"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);D(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){D(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,xa(this.$$element));},$render:z,$isEmpty:function(a){return w(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,
"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Va)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Va);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=
!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!da(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),
f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(q(k.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(k.$asyncValidators,function(e,g){var k=e(a,b);if(!k||!D(k.then))throw pb("nopromise",k);f(g,void 0);c.push(k.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});
c.length?k.$$q.all(c).then(function(){g(d)},z):g(!0)}function f(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(w(k.$$parserValid))f(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){f(b,null)}),q(k.$asyncValidators,function(a,b){f(b,null)})),f(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?e():g(!1):
g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=w(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),w(a)){this.$$parserValid=!1;break}da(this.$modelValue)&&
(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},
this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");ba(b[a])?b=b[a]:ba(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};Zd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var gf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){h.$setTouched()}var h=f[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,eh=/(\s+|^)default(\s+|$)/;Gc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=S({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=T(d.replace(eh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ee(a,this.$$options));ee(a,Pb.$$options);return new Gc(a)}};Pb=new Gc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var lf=function(){function a(a,d){this.$$attrs=a;this.$$scope=
d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Xe=Qa({terminal:!0,priority:1E3}),fh=L("ngOptions"),gh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
ef=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&qa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(gh);if(!n)throw fh("iexp",a,xa(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,t=s&&d(s),u=s?function(a,b){return t(c,b)}:function(a){return Pa(a)},
w=function(a,b){return u(a,G(a,b))},A=d(n[2]||n[1]),x=d(n[3]||""),I=d(n[4]||""),K=d(n[8]),E={},G=q?function(a,b){E[q]=b;E[p]=a;return E}:function(a){E[p]=a;return E};return{trackBy:s,getTrackByValue:w,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=G(l,h),l=u(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=I(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=G(d[p],p),r=v(c,q),p=u(r,q),t=A(c,q),E=x(c,q),q=I(c,q),r=new e(p,r,t,E,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return s?ra(a.viewValue):a.viewValue}}}}}var e=x.document.createElement("option"),f=x.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=z},post:function(d,h,k,l){function m(a){var b=(a=A.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=A&&r.readValue();if(A)for(var b=A.items.length-1;0<=b;b--){var c=A.items[b];u(c.group)?Eb(c.element.parentNode):Eb(c.element)}A=z.getOptions();var d={};x&&h.prepend(r.emptyOption);A.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),I.appendChild(b),b.label=null===a.group?
"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=I,c=e.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(I);s.$render();s.$isEmpty(a)||(b=r.readValue(),(z.trackBy||v?sa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],v=k.multiple;l=0;for(var t=h.children(),w=t.length;l<w;l++)if(""===t[l].value){r.hasEmptyOption=!0;r.emptyOption=t.eq(l);break}var x=!!r.emptyOption;B(e.cloneNode(!1)).val("?");var A,z=c(k.ngOptions,h,d),I=b[0].createDocumentFragment();r.generateUnknownOptionValue=
function(a){return"?"};v?(r.writeValue=function(a){var b=a&&a.map(m)||[];A.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=A.selectValueMap[a])&&!a.disabled&&b.push(A.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(H(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
function(a){var b=A.selectValueMap[h.val()],c=A.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):x?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=A.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
A.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));x&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(z.getWatchables,
p)}}}}],Ye=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),t=s+l+"-"+n+v,u=ea.noop,x;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,t))});f.$watch(l,function(b){var c=parseFloat(b),e=da(c);e||c in p||(c=a.pluralCat(c-
n));c===x||e&&da(x)||(u(),e=r[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),u=z,k()):u=f.$watch(e,k),x=c)})}}}],Ze=["$parse","$animate","$compile",function(a,b,d){var c=L("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var t,u,w,x,z={$id:Pa};r?t=a(r):(w=function(a,b){return Pa(b)},
x=function(a){return a});return function(a,d,f,g,l){t&&(u=function(b,c,d){v&&(z[v]=b);z[s]=c;z.$index=d;return t(a,z)});var m=V();a.$watchCollection(n,function(f){var g,n,r=d[0],t,z=V(),B,D,F,C,G,E,H;p&&(a[p]=f);if(qa(f))G=f,n=u||w;else for(H in n=u||x,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);B=G.length;H=Array(B);for(g=0;g<B;g++)if(D=f===G?g:G[g],F=f[D],C=n(D,F,g),m[C])E=m[C],delete m[C],z[C]=E,H[g]=E;else{if(z[C])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,F);H[g]={id:C,
scope:void 0,clone:void 0};z[C]=!0}for(t in m){E=m[t];C=tb(E.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<B;g++)if(D=f===G?g:G[g],F=f[D],E=H[g],E.scope){t=r;do t=t.nextSibling;while(t&&t.$$NG_REMOVED);E.clone[0]!==t&&b.move(tb(E.clone),null,r);r=E.clone[E.clone.length-1];e(E.scope,g,s,F,v,D,B)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;E.clone=a;z[E.id]=E;e(E.scope,g,s,F,v,D,B)});m=
z})}}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Te=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],af=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),bf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;k.length;)a.cancel(k.pop());d=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],cf=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),df=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),hh=L("ngTransclude"),ff=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw hh("orphan",xa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==
Ia||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],He=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],ih={$setViewValue:z,$render:z},jh=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){h||(h=!0,b.$$postDigest(function(){b.$$destroyed||(h=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
a&&e.ngModelCtrl.$render())}))}var e=this,f=new Gb;e.selectValueMap={};e.ngModelCtrl=ih;e.multiple=!1;e.unknownOption=B(x.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Ta(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Ta(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=
function(a){return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Ta(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=z});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];
c&&Ta(B(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),a.val(c in e.selectValueMap?c:b),Ta(B(a[0].options[a[0].selectedIndex]),!0)):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ka(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),
""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};var g=!1,h=!1;e.registerOption=function(a,b,f,g,h){if(f.$attr.ngValue){var q,s=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");u(s)&&(e.removeOption(q),delete e.selectValueMap[s],d=!0);s=Pa(a);q=a;e.selectValueMap[s]=a;e.addOption(a,b);b.attr("value",s);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(q)&&(e.removeOption(q),d=!0);q=
a;e.addOption(a,b);d&&f&&c()}):h?a.$watch(h,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ie=function(){return{restrict:"E",require:["select",
"?ngModel"],controller:jh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){q(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Ta(B(b),c)})};var g,h=NaN;a.$watch(function(){h!==f.$viewValue||sa(g,f.$viewValue)||(g=pa(f.$viewValue),f.$render());h=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=z},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Je=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;u(d.ngValue)||
(u(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],Zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Yc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw L("ngPattern")("noregexp",f,a,xa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=da(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},$c=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};x.angular.bootstrap?x.console&&console.log("WARNING: Tried to load angular more than once."):(ze(),Ce(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(function(){ue(x.document,Sc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,y){'use strict';function Ea(a,b,c){if(!a)throw Oa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Pa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function X(a,b,c){var d="";a=W(a)?a:a&&F(a)&&a.length?a.split(/\s+/):[];s(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Ga(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(ua(a))}if(1===a.nodeType)return E(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Qa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Ra(a,b,c){s(b,function(b){a.removeClass(b,c)})}function Y(a){return function(b,c){c.addClass&&(Qa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ra(a,b,c.removeClass),c.removeClass=null)}}function na(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ha(a,b){Ha(a,b);Ia(a,b)}function Ha(a,b){b.from&&(a.css(b.from),b.from=null)}function Ia(a,b){b.to&&(a.css(b.to),b.to=null)}function U(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Sa(a.attr("class"),f,e);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==P?d.domOperation:null;va(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Sa(a,b,c){function d(a){F(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);s(b,function(a,b){f[b]=1});c=d(c);s(c,function(a,b){f[b]=1===f[b]?null:-1});var e={addClass:"",removeClass:""};s(f,function(b,c){var d,f;1===b?(d="addClass",
f=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",f=a[c]||a[c+"-add"]);f&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function Q(a){return a instanceof E?a[0]:a}function Ta(a,b,c){var d="";b&&(d=X(b,"ng-",!0));c.addClass&&(d=Z(d,X(c.addClass,"-add")));c.removeClass&&(d=Z(d,X(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function oa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=$+"PlayState";ka(a,[d,c]);return[d,c]}function ka(a,
b){a.style[b[0]]=b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Ja(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};s(c,function(a,b){var c=f[a];if(c){var G=c.charAt(0);if("-"===G||"+"===G||0<=G)c=Ua(c);0===c&&(c=null);d[b]=c}});return d}function Ua(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function xa(a){return 0===a||null!=a}function Ka(a,b){var c=S,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function La(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ma(a,b,c){s(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c)})}var S,za,$,Aa;void 0===R.ontransitionend&&void 0!==R.onwebkittransitionend?(S="WebkitTransition",za="webkitTransitionEnd transitionend"):(S="transition",za=
"transitionend");void 0===R.onanimationend&&void 0!==R.onwebkitanimationend?($="WebkitAnimation",Aa="webkitAnimationEnd animationend"):($="animation",Aa="animationend");var pa=$+"Delay",Ba=$+"Duration",la=S+"Delay",Na=S+"Duration",Oa=y.$$minErr("ng"),Va={transitionDuration:Na,transitionDelay:la,transitionProperty:S+"Property",animationDuration:Ba,animationDelay:pa,animationIterationCount:$+"IterationCount"},Wa={transitionDuration:Na,transitionDelay:la,animationDuration:Ba,animationDelay:pa},Ca,va,
s,W,ya,da,Da,aa,F,N,E,P;y.module("ngAnimate",[],function(){P=y.noop;Ca=y.copy;va=y.extend;E=y.element;s=y.forEach;W=y.isArray;F=y.isString;aa=y.isObject;N=y.isUndefined;ya=y.isDefined;Da=y.isFunction;da=y.isElement}).info({angularVersion:"1.6.4"}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,f,e,p){var K,G;b.$watchCollection(f.ngAnimateSwap||f["for"],function(f){K&&a.leave(K);G&&(G.$destroy(),G=
null);if(f||0===f)G=b.$new(),p(G,function(b){K=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;F(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(f(a(e)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),p=0;p<b.length;p++)b[p]();
f||a(function(){f||c()})}}var d,f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c){return e[a].some(function(a){return a(b,c)})}function f(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||
"").length;return b?c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b){return!a.structural&&f(a)});e.skip.push(function(a,b){return!a.structural&&!f(a)});e.skip.push(function(a,b){return"leave"===b.event&&a.structural});e.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural});e.cancel.push(function(a,b){return b.structural&&a.structural});e.cancel.push(function(a,b){return 2===b.state&&a.structural});e.cancel.push(function(a,b){if(b.structural)return!1;
var d=a.addClass,f=a.removeClass,e=b.addClass,qa=b.removeClass;return N(d)&&N(f)||N(e)&&N(qa)?!1:c(d,qa)||c(f,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,e,n,z,qa,J,u,H,k,O){function L(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function A(a,b,c){var g=[],d=h[c];d&&s(d,function(d){w.call(d.node,b)?g.push(d.callback):"leave"===c&&
w.call(d.node,a)&&g.push(d.callback)});return g}function B(a,b,c){var g=ua(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}function q(a,h,v){function q(a,c,g,d){G(function(){var a=A(ta,k,c);a.length?b(function(){s(a,function(a){a(e,g,d)});"close"!==g||k.parentNode||ra.off(k)}):"close"!==g||k.parentNode||ra.off(k)});a.progress(c,g,d)}function B(a){var b=e,c=m;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),
c.activeClasses=null);D(e,m);ha(e,m);m.domOperation();t.complete(!a)}var m=Ca(v),e=Ga(a),k=Q(e),ta=k&&k.parentNode,m=na(m),t=new J,G=L();W(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!F(m.addClass)&&(m.addClass=null);W(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!F(m.removeClass)&&(m.removeClass=null);m.from&&!aa(m.from)&&(m.from=null);m.to&&!aa(m.to)&&(m.to=null);if(!k)return B(),t;v=[k.getAttribute("class"),m.addClass,m.removeClass].join(" ");if(!Xa(v))return B(),
t;var n=0<=["enter","move","leave"].indexOf(h),w=O(),u=!g||w||ga.get(k);v=!u&&x.get(k)||{};var H=!!v.state;u||H&&1===v.state||(u=!M(k,ta,h));if(u)return w&&q(t,h,"start"),B(),w&&q(t,h,"close"),t;n&&sa(k);w={structural:n,element:e,event:h,addClass:m.addClass,removeClass:m.removeClass,close:B,options:m,runner:t};if(H){if(d("skip",w,v)){if(2===v.state)return B(),t;U(e,v,w);return v.runner}if(d("cancel",w,v))if(2===v.state)v.runner.end();else if(v.structural)v.close();else return U(e,v,w),v.runner;else if(d("join",
w,v))if(2===v.state)U(e,w,{});else return Ta(e,n?h:null,m),h=w.event=v.event,m=U(e,v,w),v.runner}else U(e,w,{});(H=w.structural)||(H="animate"===w.event&&0<Object.keys(w.options.to||{}).length||f(w));if(!H)return B(),l(k),t;var z=(v.counter||0)+1;w.counter=z;I(k,1,w);c.$$postDigest(function(){e=Ga(a);var b=x.get(k),c=!b,b=b||{},g=0<(e.parent()||[]).length&&("animate"===b.event||b.structural||f(b));if(c||b.counter!==z||!g){c&&(D(e,m),ha(e,m));if(c||n&&b.event!==h)m.domOperation(),t.end();g||l(k)}else h=
!b.structural&&f(b,!0)?"setClass":b.event,I(k,2),b=qa(e,h,b.options),t.setHost(b),q(t,h,"start",{}),b.done(function(a){B(!a);(a=x.get(k))&&a.counter===z&&l(k);q(t,h,"close",{})})});return t}function sa(a){a=a.querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=x.get(a);if(c)switch(b){case 2:c.runner.end();case 1:x.delete(a)}})}function l(a){a.removeAttribute("data-ng-animate");x.delete(a)}function M(a,b,c){c=n[0].body;var g=Q(e),d=a===c||"HTML"===
a.nodeName,h=a===g,f=!1,k=ga.get(a),A;for((a=E.data(a,"$ngAnimatePin"))&&(b=Q(a));b;){h||(h=b===g);if(1!==b.nodeType)break;a=x.get(b)||{};if(!f){var q=ga.get(b);if(!0===q&&!1!==k){k=!0;break}else!1===q&&(k=!1);f=a.structural}if(N(A)||!0===A)a=E.data(b,"$$ngAnimateChildren"),ya(a)&&(A=a);if(f&&!1===A)break;d||(d=b===c);if(d&&h)break;if(!h&&(a=E.data(b,"$ngAnimatePin"))){b=Q(a);continue}b=b.parentNode}return(!f||A)&&!0!==k&&h&&d}function I(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);
c=(b=x.get(a))?va(b,c):c;x.set(a,c)}var x=new z,ga=new z,g=null,ta=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(ta(),c.$$postDigest(function(){c.$$postDigest(function(){null===g&&(g=!0)})}))}),h=Object.create(null),t=a.classNameFilter(),Xa=t?function(a){return t.test(a)}:function(){return!0},D=Y(H),w=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ra={on:function(a,b,c){var g=ua(b);h[a]=h[a]||[];h[a].push({node:g,callback:c});
E(b).on("$destroy",function(){x.get(g)||ra.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||F(arguments[0])){var g=h[a];g&&(h[a]=1===arguments.length?null:B(g,b,c))}else for(g in b=arguments[0],h)h[g]=B(h[g],b)},pin:function(a,b){Ea(da(a),"element","not an element");Ea(da(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,g){c=c||{};c.domOperation=g;return q(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!g;else if(da(a)){var d=Q(a);1===
c?b=!ga.get(d):ga.set(d,!b)}else b=g=!!a;return b}};return ra}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler",function(a,d,f,e,p,K){function G(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,e=d.parentNode;f.set(d,a);for(var q;e;){if(q=f.get(e)){q.processed||(q=b(q));break}e=e.parentNode}(q||c).children.push(a);return a}var c={children:[]},d,f=new p;for(d=
0;d<a.length;d++){var e=a[d];f.set(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var f=0,e=[];for(d=0;d<c.length;d++){var k=c[d];0>=a&&(a=f,f=0,b.push(e),e=[]);e.push(k.fn);k.children.forEach(function(a){f++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var n=[],z=Y(a);return function(p,J,u){function H(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");
var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function k(a){var b=[],c={};s(a,function(a,d){var h=Q(a.element),f=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var e=f?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][e]={animationID:d,element:E(a)}})}else b.push(a)});var d={},f={};s(c,function(c,e){var k=c.from,A=c.to;if(k&&A){var q=a[k.animationID],x=a[A.animationID],l=k.animationID.toString();
if(!f[l]){var B=f[l]={structural:!0,beforeStart:function(){q.beforeStart();x.beforeStart()},close:function(){q.close();x.close()},classes:O(q.classes,x.classes),from:q,to:x,anchors:[]};B.classes.length?b.push(B):(b.push(q),b.push(x))}f[l].anchors.push({out:k.element,"in":A.element})}else k=k?k.animationID:A.animationID,A=k.toString(),d[A]||(d[A]=!0,b.push(a[k]))});return b}function O(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var f=a[d];if("ng-"!==f.substring(0,3))for(var e=
0;e<b.length;e++)if(f===b[e]){c.push(f);break}}return c.join(" ")}function L(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function A(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function B(){var a=p.data("$$animationRunner");!a||"leave"===J&&u.$$domOperationFired||a.end()}function q(b){p.off("$destroy",B);p.removeData("$$animationRunner");z(p,u);ha(p,u);u.domOperation();I&&a.removeClass(p,I);
p.removeClass("ng-animate");l.complete(!b)}u=na(u);var sa=0<=["enter","move","leave"].indexOf(J),l=new e({end:function(){q()},cancel:function(){q(!0)}});if(!b.length)return q(),l;p.data("$$animationRunner",l);var M=Fa(p.attr("class"),Fa(u.addClass,u.removeClass)),I=u.tempClasses;I&&(M+=" "+I,u.tempClasses=null);var x;sa&&(x="ng-"+J+"-prepare",a.addClass(p,x));n.push({element:p,classes:M,event:J,structural:sa,options:u,beforeStart:function(){p.addClass("ng-animate");I&&a.addClass(p,I);x&&(a.removeClass(p,
x),x=null)},close:q});p.on("$destroy",B);if(1<n.length)return l;d.$$postDigest(function(){var a=[];s(n,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});n.length=0;var b=k(a),c=[];s(b,function(a){c.push({domNode:Q(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=L(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),A(a,b)):c()}})});K(G(c))});return l}}]}]).provider("$animateCss",
["$animateProvider",function(a){var b=La(),c=La();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,e,p,K,G,n,z){function y(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++O))+"-"+a.getAttribute("class")+"-"+b}function J(e,k,q,p){var l;0<b.count(q)&&(l=c.get(q),l||(k=X(k,"-stagger"),f.addClass(e,k),l=Ja(a,e,p),l.animationDuration=Math.max(l.animationDuration,0),l.transitionDuration=
Math.max(l.transitionDuration,0),f.removeClass(e,k),c.put(q,l)));return l||{}}function u(a){L.push(a);n.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K(),d=0;d<L.length;d++)L[d](a);L.length=0})}function H(c,f,e){f=b.get(e);f||(f=Ja(a,c,Va),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);
return c}var k=Y(f),O=0,L=[];return function(a,c){function d(){l()}function n(){l(!0)}function l(b){if(!(w||E&&O)){w=!0;O=!1;g.$$skipPreparationClasses||f.removeClass(a,fa);f.removeClass(a,da);wa(h,!1);oa(h,!1);s(t,function(a){h.style[a[0]]=""});k(a,g);ha(a,g);Object.keys(L).length&&s(L,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(g.onDone)g.onDone();ea&&ea.length&&a.off(ea.join(" "),x);var c=a.data("$$animateCss");c&&(p.cancel(c[0].timer),a.removeData("$$animateCss"));
F&&F.complete(!b)}}function M(a){r.blockTransition&&oa(h,a);r.blockKeyframeAnimation&&wa(h,!!a)}function I(){F=new e({end:d,cancel:n});u(P);l();return{$$willAnimate:!1,start:function(){return F},end:d}}function x(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-Y,0)>=R&&b>=m&&(E=!0,l())}function ga(){function b(){if(!w){M(!1);s(t,function(a){h.style[a[0]]=a[1]});k(a,g);f.addClass(a,da);if(r.recalculateTimingStyles){ma=
h.getAttribute("class")+" "+fa;ja=y(h,ma);C=H(h,ma,ja);ba=C.maxDelay;N=Math.max(ba,0);m=C.maxDuration;if(0===m){l();return}r.hasTransitions=0<C.transitionDuration;r.hasAnimations=0<C.animationDuration}r.applyAnimationDelay&&(ba="boolean"!==typeof g.delay&&xa(g.delay)?parseFloat(g.delay):ba,N=Math.max(ba,0),C.animationDelay=ba,ca=[pa,ba+"s"],t.push(ca),h.style[ca[0]]=ca[1]);R=1E3*N;U=1E3*m;if(g.easing){var d,e=g.easing;r.hasTransitions&&(d=S+"TimingFunction",t.push([d,e]),h.style[d]=e);r.hasAnimations&&
(d=$+"TimingFunction",t.push([d,e]),h.style[d]=e)}C.transitionDuration&&ea.push(za);C.animationDuration&&ea.push(Aa);Y=Date.now();var n=R+1.5*U;d=Y+n;var e=a.data("$$animateCss")||[],q=!0;if(e.length){var I=e[0];(q=d>I.expectedEndTime)?p.cancel(I.timer):e.push(l)}q&&(n=p(c,n,!1),e[0]={timer:n,expectedEndTime:d},e.push(l),a.data("$$animateCss",e));if(ea.length)a.on(ea.join(" "),x);g.to&&(g.cleanupStyles&&Ma(L,h,Object.keys(g.to)),Ia(a,g))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=
1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!w)if(h.parentNode){var d=function(a){if(E)O&&a&&(O=!1,l());else if(O=!a,C.animationDuration)if(a=wa(h,O),O)t.push(a);else{var b=t,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<aa&&(C.transitionDuration&&0===V.transitionDuration||C.animationDuration&&0===V.animationDuration)&&Math.max(V.animationDelay,V.transitionDelay);e?p(b,Math.floor(e*aa*1E3),!1):b();v.resume=function(){d(!0)};v.pause=function(){d(!1)}}else l()}var g=c||{};g.$$prepared||(g=na(Ca(g)));
var L={},h=Q(a);if(!h||!h.parentNode||!z.enabled())return I();var t=[],K=a.attr("class"),D=Pa(g),w,O,E,F,v,N,R,m,U,Y,ea=[];if(0===g.duration||!G.animations&&!G.transitions)return I();var ia=g.event&&W(g.event)?g.event.join(" "):g.event,Z="",T="";ia&&g.structural?Z=X(ia,"ng-",!0):ia&&(Z=ia);g.addClass&&(T+=X(g.addClass,"-add"));g.removeClass&&(T.length&&(T+=" "),T+=X(g.removeClass,"-remove"));g.applyClassesEarly&&T.length&&k(a,g);var fa=[Z,T].join(" ").trim(),ma=K+" "+fa,da=X(fa,"-active"),K=D.to&&
0<Object.keys(D.to).length;if(!(0<(g.keyframeStyle||"").length||K||fa))return I();var ja,V;0<g.stagger?(D=parseFloat(g.stagger),V={transitionDelay:D,animationDelay:D,transitionDuration:0,animationDuration:0}):(ja=y(h,ma),V=J(h,fa,ja,Wa));g.$$skipPreparationClasses||f.addClass(a,fa);g.transitionStyle&&(D=[S,g.transitionStyle],ka(h,D),t.push(D));0<=g.duration&&(D=0<h.style[S].length,D=Ka(g.duration,D),ka(h,D),t.push(D));g.keyframeStyle&&(D=[$,g.keyframeStyle],ka(h,D),t.push(D));var aa=V?0<=g.staggerIndex?
g.staggerIndex:b.count(ja):0;(ia=0===aa)&&!g.skipBlocking&&oa(h,9999);var C=H(h,ma,ja),ba=C.maxDelay;N=Math.max(ba,0);m=C.maxDuration;var r={};r.hasTransitions=0<C.transitionDuration;r.hasAnimations=0<C.animationDuration;r.hasTransitionAll=r.hasTransitions&&"all"===C.transitionProperty;r.applyTransitionDuration=K&&(r.hasTransitions&&!r.hasTransitionAll||r.hasAnimations&&!r.hasTransitions);r.applyAnimationDuration=g.duration&&r.hasAnimations;r.applyTransitionDelay=xa(g.delay)&&(r.applyTransitionDuration||
r.hasTransitions);r.applyAnimationDelay=xa(g.delay)&&r.hasAnimations;r.recalculateTimingStyles=0<T.length;if(r.applyTransitionDuration||r.applyAnimationDuration)m=g.duration?parseFloat(g.duration):m,r.applyTransitionDuration&&(r.hasTransitions=!0,C.transitionDuration=m,D=0<h.style[S+"Property"].length,t.push(Ka(m,D))),r.applyAnimationDuration&&(r.hasAnimations=!0,C.animationDuration=m,t.push([Ba,m+"s"]));if(0===m&&!r.recalculateTimingStyles)return I();if(null!=g.delay){var ca;"boolean"!==typeof g.delay&&
(ca=parseFloat(g.delay),N=Math.max(ca,0));r.applyTransitionDelay&&t.push([la,ca+"s"]);r.applyAnimationDelay&&t.push([pa,ca+"s"])}null==g.duration&&0<C.transitionDuration&&(r.recalculateTimingStyles=r.recalculateTimingStyles||ia);R=1E3*N;U=1E3*m;g.skipBlocking||(r.blockTransition=0<C.transitionDuration,r.blockKeyframeAnimation=0<C.animationDuration&&0<V.animationDelay&&0===V.animationDuration);g.from&&(g.cleanupStyles&&Ma(L,h,Object.keys(g.from)),Ha(a,g));r.blockTransition||r.blockKeyframeAnimation?
M(m):g.skipBlocking||oa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!w)return v={end:d,cancel:n,resume:null,pause:null},F=new e(v),u(ga),F}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,e,p,K){function G(a){return a.replace(/\bng-\S+\b/g,"")}function n(a,b){F(a)&&(a=a.split(" "));F(b)&&(b=b.split(" "));
return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function z(c,e,f){function p(a){var b={},c=Q(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function K(){var c=G(f.attr("class")||""),d=n(c,l),c=n(l,c),d=a(z,{to:p(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function q(){z.remove();e.removeClass("ng-animate-shim");
f.removeClass("ng-animate-shim")}var z=E(Q(e).cloneNode(!0)),l=G(z.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");z.addClass("ng-anchor");H.append(z);var M;c=function(){var c=a(z,{addClass:"ng-anchor-out",delay:!0,from:p(e)});return c.$$willAnimate?c:null}();if(!c&&(M=K(),!M))return q();var I=c||M;return{start:function(){function a(){c&&c.end()}var b,c=I.start();c.done(function(){c=null;if(!M&&(M=K()))return c=M.start(),c.done(function(){c=null;q();b.complete()}),c;
q();b.complete()});return b=new d({end:a,cancel:a})}}}function y(a,b,c,e){var f=J(a,P),p=J(b,P),n=[];s(e,function(a){(a=z(c,a.out,a["in"]))&&n.push(a)});if(f||p||0!==n.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];f&&b.push(f.start());p&&b.push(p.start());s(n,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function J(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=
!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return P;var u=K[0].body;c=Q(f);var H=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);return function(a){return a.from&&a.to?y(a.from,a.to,a.classes,a.anchors):J(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=
W(c)?c:c.split(" ");for(var d=[],e={},f=0;f<c.length;f++){var s=c[f],y=a.$$registeredAnimations[s];y&&!e[s]&&(d.push(b.get(y)),e[s]=!0)}return d}var e=Y(d);return function(a,b,d,n){function z(){n.domOperation();e(a,n)}function y(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,k,F,f];break;case "addClass":b=[b,k,f];break;case "removeClass":b=[b,F,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;
return P}function J(a,b,d,e,f){var k=[];s(e,function(e){var l=e[f];l&&k.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=y(l,a,b,d,function(a){h(!1===a)});return e})});return k}function u(a,b,d,e,f){var k=J(a,b,d,e,f);if(0===k.length){var h,l;"beforeSetClass"===f?(h=J(a,"removeClass",d,e,"beforeRemoveClass"),l=J(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=J(a,"removeClass",d,e,"removeClass"),l=J(a,"addClass",
d,e,"addClass"));h&&(k=k.concat(h));l&&(k=k.concat(l))}if(0!==k.length)return function(a){var b=[];k.length&&s(k,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&aa(d)&&(n=d,d=null);n=na(n);d||(d=a.attr("class")||"",n.addClass&&(d+=" "+n.addClass),n.removeClass&&(d+=" "+n.removeClass));var k=n.addClass,F=n.removeClass,L=f(d),A,B;if(L.length){var q,E;"leave"===b?(E="leave",q="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+
b.substr(1),q=b);"enter"!==b&&"move"!==b&&(A=u(a,b,n,L,E));B=u(a,b,n,L,q)}if(A||B){var l;return{$$willAnimate:!0,end:function(){l?l.end():(H=!0,z(),ha(a,n),l=new c,l.complete(!0));return l},start:function(){function b(c){H=!0;z();ha(a,n);l.complete(c)}if(l)return l;l=new c;var d,e=[];A&&e.push(function(a){d=A(a)});e.length?e.push(function(a){z();a(!0)}):z();B&&e.push(function(a){d=B(a)});l.setHost({end:function(){H||((d||P)(void 0),b(void 0))},cancel:function(){H||((d||P)(!0),b(!0))}});c.chain(e,
b);return l}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),p=d(a.to);if(b||p)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());p&&d.push(p.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.6.4
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,b){'use strict';function K(q,g){g=g||{};b.forEach(g,function(b,h){delete g[h]});for(var h in q)!q.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(g[h]=q[h]);return g}var B=b.$$minErr("$resource"),Q=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;b.module("ngResource",["ng"]).info({angularVersion:"1.6.4"}).provider("$resource",function(){var q=/^https?:\/\/\[[^\]]*][^/]*/,g=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",
isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(h,P,L,M){function C(b,e){this.template=b;this.defaults=p({},g.defaults,e);this.urlParams={}}function x(D,e,u,m){function c(a,d){var c={};d=p({},e,d);t(d,function(d,l){y(d)&&(d=d(a));var f;if(d&&d.charAt&&"@"===d.charAt(0)){f=a;var k=d.substr(1);if(null==k||""===k||"hasOwnProperty"===k||!Q.test("."+k))throw B("badmember",k);for(var k=k.split("."),e=0,g=k.length;e<g&&b.isDefined(f);e++){var h=
k[e];f=null!==f?f[h]:void 0}}else f=d;c[l]=f});return c}function R(a){return a.resource}function l(a){K(a||{},this)}var q=new C(D,m);u=p({},g.defaults.actions,u);l.prototype.toJSON=function(){var a=p({},this);delete a.$promise;delete a.$resolved;delete a.$cancelRequest;return a};t(u,function(a,d){var b=!0===a.hasBody||!1!==a.hasBody&&/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,g=N(a.cancellable)?a.cancellable:q.defaults.cancellable;e&&!S(e)&&(P.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete a.timeout,e=null);l[d]=function(f,k,m,D){function u(a){r.catch(E);z.resolve(a)}var G={},v,w,A;switch(arguments.length){case 4:A=D,w=m;case 3:case 2:if(y(k)){if(y(f)){w=f;A=k;break}w=k;A=m}else{G=f;v=k;w=m;break}case 1:y(f)?w=f:b?v=f:G=f;break;case 0:break;default:throw B("badargs",arguments.length);}var F=this instanceof l,n=F?v:a.isArray?[]:new l(v),s={},C=a.interceptor&&a.interceptor.response||R,x=a.interceptor&&a.interceptor.responseError||void 0,H=!!A,I=!!x,z,J;t(a,function(a,d){switch(d){default:s[d]=
T(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!F&&g&&(z=L.defer(),s.timeout=z.promise,e&&(J=M(z.resolve,e)));b&&(s.data=v);q.setUrlParams(s,p({},c(v,a.params||{}),G),a.url);var r=h(s).then(function(f){var c=f.data;if(c){if(O(c)!==!!a.isArray)throw B("badcfg",d,a.isArray?"array":"object",O(c)?"array":"object",s.method,s.url);if(a.isArray)n.length=0,t(c,function(a){"object"===typeof a?n.push(new l(a)):n.push(a)});else{var b=n.$promise;K(c,n);n.$promise=b}}f.resource=n;
return f}),r=r["finally"](function(){n.$resolved=!0;!F&&g&&(n.$cancelRequest=E,M.cancel(J),z=J=s.timeout=null)}),r=r.then(function(a){var d=C(a);(w||E)(d,a.headers,a.status,a.statusText);return d},H||I?function(a){H&&!I&&r.catch(E);H&&A(a);return I?x(a):L.reject(a)}:void 0);return F?r:(n.$promise=r,n.$resolved=!1,g&&(n.$cancelRequest=u),n)};l.prototype["$"+d]=function(a,c,b){y(a)&&(b=c,c=a,a={});a=l[d].call(this,a,this,c,b);return a.$promise||a}});l.bind=function(a){a=p({},e,a);return x(D,a,u,m)};
return l}var E=b.noop,t=b.forEach,p=b.extend,T=b.copy,O=b.isArray,N=b.isDefined,y=b.isFunction,S=b.isNumber,U=b.$$encodeUriQuery,V=b.$$encodeUriSegment;C.prototype={setUrlParams:function(b,e,g){var m=this,c=g||m.template,h,l,p="",a=m.urlParams=Object.create(null);t(c.split(/\W/),function(d){if("hasOwnProperty"===d)throw B("badname");!/^\d+$/.test(d)&&d&&(new RegExp("(^|[^\\\\]):"+d+"(\\W|$)")).test(c)&&(a[d]={isQueryParamValue:(new RegExp("\\?.*=:"+d+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");
c=c.replace(q,function(a){p=a;return""});e=e||{};t(m.urlParams,function(a,b){h=e.hasOwnProperty(b)?e[b]:m.defaults[b];N(h)&&null!==h?(l=a.isQueryParamValue?U(h,!0):V(h),c=c.replace(new RegExp(":"+b+"(\\W|$)","g"),function(a,b){return l+b})):c=c.replace(new RegExp("(/?):"+b+"(\\W|$)","g"),function(a,b,d){return"/"===d.charAt(0)?d:b+d})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");b.url=p+c.replace(/\/(\\|%5C)\./,"/.");t(e,function(a,c){m.urlParams[c]||
(b.params=b.params||{},b.params[c]=a)})}};return x}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.4.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return T(new(T(function(){},{prototype:a})),b)}function e(a){return S(arguments,function(b){b!==a&&S(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return S(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=d<0?Math.ceil(d):Math.floor(d),d<0&&(d+=c);d<c;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return T({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return S(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return S(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)h(c,d)==-1&&(b[d]=a[d]);return b}function n(a,b){var c=R(a),d=c?[]:{};return S(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=R(a)?[]:{};return S(a,function(a,d){c[d]=b(a,d)}),c}function p(a){return a.then(c,function(){})&&a}function q(a,b){var d=1,f=2,i={},j=[],k=i,l=T(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(t[c]!==f){if(s.push(c),t[c]===d)throw s.splice(0,h(s,c)),new Error("Cyclic dependency: "+s.join(" -> "));if(t[c]=d,P(a))r.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);S(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),r.push(c,a,e)}s.pop(),t[c]=f}}function o(a){return Q(a)&&a.then&&a.$$promises}if(!Q(i))throw new Error("'invocables' must be an object");var q=g(i||{}),r=[],s=[],t={};return S(i,n),i=s=t=null,function(d,f,g){function h(){--v||(w||e(u,f.$$values),s.$$values=u,s.$$promises=s.$$promises||!0,delete s.$$inheritedValues,n.resolve(u))}function i(a){s.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!N(s.$$failure))try{l.resolve(b.invoke(e,g,u)),l.promise.then(function(a){u[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;S(f,function(a){t.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,t[a].then(function(b){u[a]=b,--m||k()},j))}),m||k(),t[c]=p(l.promise)}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!Q(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),s=p(n.promise),t=s.$$promises={},u=T({},d),v=1+r.length/3,w=!1;if(p(s),N(f.$$failure))return i(f.$$failure),s;f.$$inheritedValues&&e(u,m(f.$$inheritedValues,q)),T(t,f.$$promises),f.$$values?(w=e(u,m(f.$$values,q)),s.$$inheritedValues=m(f.$$values,q),h()):(f.$$inheritedValues&&(s.$$inheritedValues=m(f.$$inheritedValues,q)),f.then(h,i));for(var x=0,y=r.length;x<y;x+=3)d.hasOwnProperty(r[x])?h():j(r[x],r[x+1],r[x+2]);return s}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function r(){var a=b.version.minor<3;this.shouldUnsafelyUseHttp=function(b){a=!!b},this.$get=["$http","$templateCache","$injector",function(b,c,d){return new s(b,c,d,a)}]}function s(a,b,c,d){this.fromConfig=function(a,b,c){return N(a.template)?this.fromString(a.template,b):N(a.templateUrl)?this.fromUrl(a.templateUrl,b):N(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return O(a)?a(b):a},this.fromUrl=function(e,f){return O(e)&&(e=e(f)),null==e?null:d?a.get(e,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data}):c.get("$templateRequest")(e)},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function t(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new W.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=W.type(h)||d(W.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=T({params:{}},Q(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new W.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function u(a){T(this,a)}function v(){function a(a){return null!=a?a.toString().replace(/(~|\/)/g,function(a){return{"~":"~~","/":"~2F"}[a]}):a}function e(a){return null!=a?a.toString().replace(/(~~|~2F)/g,function(a){return{"~~":"~","~2F":"/"}[a]}):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return O(a)||R(a)&&O(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name],l.invoke(a.def))}}function k(a){T(this,a||{})}W=this;var l,m=!1,p=!0,q=!1,r={},s=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!N(a)||"string"==typeof a},pattern:/[^\/]*/},int:{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return a!==c&&null!==a&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};v.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return N(a)&&(m=a),m},this.strictMode=function(a){return N(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!N(a))return q;if(a!==!0&&a!==!1&&!P(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new t(a,T(f(),b))},this.isMatcher=function(a){if(!Q(a))return!1;var b=!0;return S(t.prototype,function(c,d){O(c)&&(b=b&&N(a[d])&&O(a[d]))}),b},this.type=function(a,b,c){if(!N(b))return r[a];if(r.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return r[a]=new u(T({name:a},b)),c&&(w.push({name:a,def:c}),s||j()),this},S(x,function(a,b){r[b]=new u(T({name:b},a))}),r=d(r,{}),this.$get=["$injector",function(a){return l=a,s=!1,j(),S(x,function(a,b){r[b]||(r[b]=new u(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=Q(a)?g(a):[],c=h(b,"value")===-1&&h(b,"type")===-1&&h(b,"squash")===-1&&h(b,"array")===-1;return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?r[c.type]:c.type instanceof u?c.type:new u(c.type):"config"===e?r.any:r.string}function m(){var b={array:"search"===f&&"auto"},c=a.match(/\[\]$/)?{array:!0}:{};return T(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!N(c)||null==c)return q;if(c===!0||P(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function s(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=R(a.replace)?a.replace:[],P(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return h(g,a.from)===-1}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),N(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=s(e,y,z,A);T(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,T(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),S(b,function(b){S(g(b),function(b){h(a,b)===-1&&h(d,b)===-1&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return S(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return S(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function w(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return!N(d)||d}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return!!b&&(P(b)&&d.replace().url(b),!0)}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;e<g;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!O(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(P(a)){var b=a;a=function(){return b}}else if(!O(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=P(b);if(P(a)&&(a=d.compile(a)),!h&&!O(b)&&!R(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),T(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:P(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),T(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function x(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=P(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;i<j;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=A[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){B[a]||(B[a]=[]),B[a].push(b)}function q(a){for(var b=B[a]||[];b.length;)r(b.shift())}function r(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!P(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(A.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=c.indexOf(".")!==-1?c.substring(0,c.lastIndexOf(".")):P(b.parent)?b.parent:Q(b.parent)&&P(b.parent.name)?b.parent.name:"";if(e&&!A[e])return n(e,b.self);for(var f in D)O(D[f])&&(b[f]=D[f](b,D.$delegates[f]));return A[c]=b,!b[C]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){z.$current.navigable==b&&j(a,c)||z.transitionTo(b,a,{inherit:!0,location:!1})}]),q(c),b}function s(a){return a.indexOf("*")>-1}function t(a){for(var b=a.split("."),c=z.$current.name.split("."),d=0,e=b.length;d<e;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length==c.length&&c.join("")===b.join("")}function u(a,b){return P(a)&&!N(b)?D[a]:O(b)&&P(a)?(D[a]&&!D.$delegates[a]&&(D.$delegates[a]=D[a]),D[a]=b,this):this}function v(a,b){return Q(a)?b=a:b.name=a,r(b),this}function w(a,e,f,h,j,l,n,q,r){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return n.update(),E;if(!g.retry)return null;if(f.$retry)return n.update(),F;var h=z.transition=e.when(g.retry);return h.then(function(){return h!==z.transition?(a.$broadcast("$stateChangeCancel",b.to,b.toParams,c,d),B):(b.options.$retry=!0,z.transitionTo(b.to,b.toParams,b.options))},function(){return E}),n.update(),h}function v(a,c,d,g,i,l){function m(){var c=[];return S(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:l.notify})||""}],c.push(j.resolve(g,i.globals,i.resolve,a).then(function(c){if(O(d.controllerProvider)||R(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=j.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var w=new Error("transition superseded"),B=p(e.reject(w)),D=p(e.reject(new Error("transition prevented"))),E=p(e.reject(new Error("transition aborted"))),F=p(e.reject(new Error("transition failed")));return y.locals={resolve:null,globals:{$stateParams:{}}},z={params:{},current:y.self,$current:y,transition:null},z.reload=function(a){return z.transitionTo(z.current,l,{reload:a||!0,inherit:!1,notify:!0})},z.go=function(a,b,c){return z.transitionTo(a,b,T({inherit:!0,relative:z.$current},c))},z.transitionTo=function(b,c,f){c=c||{},f=T({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=z.$current,o=z.params,q=j.path,r=m(b,f.relative),s=c["#"];if(!N(r)){var t={to:b,toParams:c,options:f},A=u(t,j.self,o,f);if(A)return A;if(b=t.to,c=t.toParams,f=t.options,r=m(b,f.relative),!N(r)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(r[C])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(l,c||{},z.$current,r)),!r.params.$$validates(c))return F;c=r.params.$$values(c),b=r;var E=b.path,G=0,H=E[G],I=y.locals,J=[];if(f.reload){if(P(f.reload)||Q(f.reload)){if(Q(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var K=f.reload===!0?q[0]:m(f.reload);if(f.reload&&!K)throw new Error("No such reload state '"+(P(f.reload)?f.reload:f.reload.name)+"'");for(;H&&H===q[G]&&H!==K;)I=J[G]=H.locals,G++,H=E[G]}}else for(;H&&H===q[G]&&H.ownParams.$$equals(c,o);)I=J[G]=H.locals,G++,H=E[G];if(x(b,c,j,o,I,f))return s&&(c["#"]=s),z.params=c,U(z.params,l),U(k(b.params.$$keys(),l),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(n.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),n.update(!0)),z.transition=null,e.when(z.current);if(c=k(b.params.$$keys(),c||{}),s&&(c["#"]=s),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,o,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),null==z.transition&&n.update(),D;for(var L=e.when(I),M=G;M<E.length;M++,H=E[M])I=J[M]=d(I),L=v(H,c,H===b,L,I,f);var O=z.transition=L.then(function(){var d,e,g;if(z.transition!==O)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B;for(d=q.length-1;d>=G;d--)g=q[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=G;d<E.length;d++)e=E[d],e.locals=J[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return z.transition!==O?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B):(z.$current=b,z.current=b.self,z.params=c,U(z.params,l),z.transition=null,f.location&&b.navigable&&n.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,o),n.update(!0),z.current)}).then(null,function(d){return d===w?B:z.transition!==O?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B):(z.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,o,d),g.defaultPrevented||n.update(),e.reject(d))});return p(O),O},z.is=function(a,b,d){d=T({relative:z.$current},d||{});var e=m(a,d.relative);return N(e)?z.$current===e&&(!b||g(b).reduce(function(a,c){var d=e.params[c];return a&&!d||d.type.equals(l[c],b[c])},!0)):c},z.includes=function(a,b,d){if(d=T({relative:z.$current},d||{}),P(a)&&s(a)){if(!t(a))return!1;a=z.$current.name}var e=m(a,d.relative);if(!N(e))return c;if(!N(z.$current.includes[e.name]))return!1;if(!b)return!0;for(var f=g(b),h=0;h<f.length;h++){var i=f[h],j=e.params[i];if(j&&!j.type.equals(l[i],b[i]))return!1}return g(b).reduce(function(a,c){var d=e.params[c];return a&&!d||d.type.equals(l[c],b[c])},!0)},z.href=function(a,b,d){d=T({lossy:!0,inherit:!0,absolute:!1,relative:z.$current},d||{});var e=m(a,d.relative);if(!N(e))return null;d.inherit&&(b=i(l,b||{},z.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?n.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},z.get=function(a,b){if(0===arguments.length)return o(g(A),function(a){return A[a].self});var c=m(a,b||z.$current);return c&&c.self?c.self:null},z}function x(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new W.ParamSet(f);return g.$$equals(b,c)}if(!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b)))return!0}var y,z,A={},B={},C="abstract",D={parent:function(a){if(N(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):y},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(P(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||y).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new W.ParamSet;return S(a.params||{},function(a,c){b[c]||(b[c]=new W.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?T(a.parent.params.$$new(),b):new W.ParamSet},views:function(a){var b={};return S(N(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?T({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};y=r({name:"",url:"^",views:null,abstract:!0}),y.navigable=null,this.decorator=u,this.state=v,this.$get=w,w.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function y(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=T(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function z(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function A(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(a){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=C(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function B(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return f.empty?f.empty():f[0].innerHTML=null,function(f,h,i){var j=d.$current,k=C(f,i,h,e),l=j&&j.locals[k];if(!l)return h.html(g),void a(h.contents())(f);h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),O(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}function C(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function D(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function E(a){var b=a.parent().inheritedData("$uiView");if(b&&b.state&&b.state.name)return b.state}function F(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function G(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function H(a,b){return{relative:E(a)||b.$current,inherit:!0}}function I(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=D(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=F(e),l=g[1]||g[0],m=null;j.options=T(H(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=G(e,a,c,k,function(){return j}),e[e.on?"on":"bind"]("click",h),d.$on("$destroy",function(){e[e.off?"off":"unbind"]("click",h)}))}}}function J(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=F(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=G(d,a,b,i,function(){return m}),d[d.on?"on":"bind"]("click",h),c.$on("$destroy",function(){d[d.off?"off":"unbind"]("click",h)}))}}}function K(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,E(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);a!==-1&&p.splice(a,1)}}function h(a,c){if(!P(a))throw new Error("state should be a string");return Q(c)?a+V(c):(c=b.$eval(c),Q(c)?a+V(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(a){}o=o||c(e.uiSrefActive||"",!1)(b),Q(o)&&S(o,function(c,d){if(P(c)){var e=D(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(Q(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function L(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function M(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var N=b.isDefined,O=b.isFunction,P=b.isString,Q=b.isObject,R=b.isArray,S=b.forEach,T=b.extend,U=b.copy,V=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),q.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",q),b.module("ui.router.util").provider("$templateFactory",r);var W;t.prototype.concat=function(a,b){var c={caseInsensitive:W.caseInsensitive(),strict:W.strictMode(),squash:W.defaultSquashPolicy()};return new t(this.sourcePath+a+this.sourceSearch,T(c,b),this)},t.prototype.toString=function(){return this.source},t.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;e<j;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),N(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;e<i;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);N(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},t.prototype.parameters=function(a){return N(a)?this.params[a]||null:this.$$paramNames},t.prototype.validates=function(a){return this.params.$$validates(a)},t.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;f<i;f++){var k=f<h,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=!!p&&m.squash,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=R(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else P(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(R(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},u.prototype.is=function(a,b){return!0},u.prototype.encode=function(a,b){return a},u.prototype.decode=function(a,b){return a},u.prototype.equals=function(a,b){return a==b},u.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},u.prototype.pattern=/.*/,u.prototype.toString=function(){return"{Type:"+this.name+"}"},u.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},u.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return R(a)?a:N(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(R(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;
for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",v),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",w),x.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",x).run(["$injector",function(a){a.get("$state.runtime").autoinject&&a.get("$state")}]),y.$inject=[],b.module("ui.router.state").provider("$view",y),b.module("ui.router.state").provider("$uiViewScroll",z),A.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],B.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",A),b.module("ui.router.state").directive("uiView",B),I.$inject=["$state","$timeout"],J.$inject=["$state","$timeout"],K.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",I).directive("uiSrefActive",K).directive("uiSrefActiveEq",K).directive("uiState",J),L.$inject=["$state"],M.$inject=["$state"],b.module("ui.router.state").filter("isState",L).filter("includedByState",M)}(window,window.angular);
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.async=e.async||{})}(this,function(exports){"use strict";function apply(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function overRest$1(e,t,r){return t=nativeMax(void 0===t?e.length-1:t,0),function(){for(var n=arguments,o=-1,i=nativeMax(n.length-t,0),a=Array(i);++o<i;)a[o]=n[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=n[o];return s[t]=r(a),apply(e,this,s)}}function identity(e){return e}function rest(e,t){return overRest$1(e,t,identity)}function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function asyncify(e){return initialParams(function(t,r){var n;try{n=e.apply(this,t)}catch(e){return r(e)}isObject(n)&&"function"==typeof n.then?n.then(function(e){r(null,e)},function(e){r(e.message?e:new Error(e))}):r(null,n)})}function supportsAsync(){var supported;try{supported=isAsync(eval("(async function () {})"))}catch(e){supported=!1}return supported}function isAsync(e){return supportsSymbol&&"AsyncFunction"===e[Symbol.toStringTag]}function wrapAsync(e){return isAsync(e)?asyncify(e):e}function applyEach$1(e){return rest(function(t,r){var n=initialParams(function(r,n){var o=this;return e(t,function(e,t){wrapAsync$1(e).apply(o,r.concat(t))},n)});return r.length?n.apply(this,r):n})}function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag$1),r=e[symToStringTag$1];try{e[symToStringTag$1]=void 0;var n=!0}catch(e){}var o=nativeObjectToString.call(e);return n&&(t?e[symToStringTag$1]=r:delete e[symToStringTag$1]),o}function objectToString(e){return nativeObjectToString$1.call(e)}function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:(e=Object(e),symToStringTag&&symToStringTag in e?getRawTag(e):objectToString(e))}function isFunction(e){if(!isObject(e))return!1;var t=baseGetTag(e);return t==funcTag||t==genTag||t==asyncTag||t==proxyTag}function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER}function isArrayLike(e){return null!=e&&isLength(e.length)&&!isFunction(e)}function noop(){}function once(e){return function(){if(null!==e){var t=e;e=null,t.apply(this,arguments)}}}function baseTimes(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}function isObjectLike(e){return null!=e&&"object"==typeof e}function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag}function stubFalse(){return!1}function isIndex(e,t){return t=null==t?MAX_SAFE_INTEGER$1:t,!!t&&("number"==typeof e||reIsUint.test(e))&&e>-1&&e%1==0&&e<t}function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[baseGetTag(e)]}function baseUnary(e){return function(t){return e(t)}}function arrayLikeKeys(e,t){var r=isArray(e),n=!r&&isArguments(e),o=!r&&!n&&isBuffer(e),i=!r&&!n&&!o&&isTypedArray(e),a=r||n||o||i,s=a?baseTimes(e.length,String):[],c=s.length;for(var u in e)!t&&!hasOwnProperty$1.call(e,u)||a&&("length"==u||o&&("offset"==u||"parent"==u)||i&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||isIndex(u,c))||s.push(u);return s}function isPrototype(e){var t=e&&e.constructor,r="function"==typeof t&&t.prototype||objectProto$5;return e===r}function overArg(e,t){return function(r){return e(t(r))}}function baseKeys(e){if(!isPrototype(e))return nativeKeys(e);var t=[];for(var r in Object(e))hasOwnProperty$3.call(e,r)&&"constructor"!=r&&t.push(r);return t}function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}function createArrayIterator(e){var t=-1,r=e.length;return function(){return++t<r?{value:e[t],key:t}:null}}function createES2015Iterator(e){var t=-1;return function(){var r=e.next();return r.done?null:(t++,{value:r.value,key:t})}}function createObjectIterator(e){var t=keys(e),r=-1,n=t.length;return function(){var o=t[++r];return r<n?{value:e[o],key:o}:null}}function iterator(e){if(isArrayLike(e))return createArrayIterator(e);var t=getIterator(e);return t?createES2015Iterator(t):createObjectIterator(e)}function onlyOnce(e){return function(){if(null===e)throw new Error("Callback was already called.");var t=e;e=null,t.apply(this,arguments)}}function _eachOfLimit(e){return function(t,r,n){function o(e,t){if(c-=1,e)s=!0,n(e);else{if(t===breakLoop||s&&c<=0)return s=!0,n(null);i()}}function i(){for(;c<e&&!s;){var t=a();if(null===t)return s=!0,void(c<=0&&n(null));c+=1,r(t.value,t.key,onlyOnce(o))}}if(n=once(n||noop),e<=0||!t)return n(null);var a=iterator(t),s=!1,c=0;i()}}function eachOfLimit(e,t,r,n){_eachOfLimit(t)(e,wrapAsync$1(r),n)}function doLimit(e,t){return function(r,n,o){return e(r,t,n,o)}}function eachOfArrayLike(e,t,r){function n(e,t){e?r(e):++i!==a&&t!==breakLoop||r(null)}r=once(r||noop);var o=0,i=0,a=e.length;for(0===a&&r(null);o<a;o++)t(e[o],o,onlyOnce(n))}function doParallel(e){return function(t,r,n){return e(eachOf,t,wrapAsync$1(r),n)}}function _asyncMap(e,t,r,n){n=n||noop,t=t||[];var o=[],i=0,a=wrapAsync$1(r);e(t,function(e,t,r){var n=i++;a(e,function(e,t){o[n]=t,r(e)})},function(e){n(e,o)})}function doParallelLimit(e){return function(t,r,n,o){return e(_eachOfLimit(r),t,wrapAsync$1(n),o)}}function arrayEach(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}function createBaseFor(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var c=a[e?s:++o];if(r(i[c],c,i)===!1)break}return t}}function baseForOwn(e,t){return e&&baseFor(e,t,keys)}function baseFindIndex(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function baseIsNaN(e){return e!==e}function strictIndexOf(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function baseIndexOf(e,t,r){return t===t?strictIndexOf(e,t,r):baseFindIndex(e,baseIsNaN,r)}function arrayMap(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function isSymbol(e){return"symbol"==typeof e||isObjectLike(e)&&baseGetTag(e)==symbolTag}function baseToString(e){if("string"==typeof e)return e;if(isArray(e))return arrayMap(e,baseToString)+"";if(isSymbol(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}function baseSlice(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}function castSlice(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:baseSlice(e,t,r)}function charsEndIndex(e,t){for(var r=e.length;r--&&baseIndexOf(t,e[r],0)>-1;);return r}function charsStartIndex(e,t){for(var r=-1,n=e.length;++r<n&&baseIndexOf(t,e[r],0)>-1;);return r}function asciiToArray(e){return e.split("")}function hasUnicode(e){return reHasUnicode.test(e)}function unicodeToArray(e){return e.match(reUnicode)||[]}function stringToArray(e){return hasUnicode(e)?unicodeToArray(e):asciiToArray(e)}function toString(e){return null==e?"":baseToString(e)}function trim(e,t,r){if(e=toString(e),e&&(r||void 0===t))return e.replace(reTrim,"");if(!e||!(t=baseToString(t)))return e;var n=stringToArray(e),o=stringToArray(t),i=charsStartIndex(n,o),a=charsEndIndex(n,o)+1;return castSlice(n,i,a).join("")}function parseParams(e){return e=e.toString().replace(STRIP_COMMENTS,""),e=e.match(FN_ARGS)[2].replace(" ",""),e=e?e.split(FN_ARG_SPLIT):[],e=e.map(function(e){return trim(e.replace(FN_ARG,""))})}function autoInject(e,t){var r={};baseForOwn(e,function(e,t){function n(t,r){var n=arrayMap(o,function(e){return t[e]});n.push(r),wrapAsync$1(e).apply(null,n)}var o,i=isAsync(e),a=!i&&1===e.length||i&&0===e.length;if(isArray(e))o=e.slice(0,-1),e=e[e.length-1],r[t]=o.concat(o.length>0?n:e);else if(a)r[t]=e;else{if(o=parseParams(e),0===e.length&&!i&&0===o.length)throw new Error("autoInject task functions require explicit parameters.");i||o.pop(),r[t]=o.concat(n)}}),auto(r,t)}function fallback(e){setTimeout(e,0)}function wrap(e){return rest(function(t,r){e(function(){t.apply(null,r)})})}function DLL(){this.head=this.tail=null,this.length=0}function setInitial(e,t){e.length=1,e.head=e.tail=t}function queue(e,t,r){function n(e,t,r){if(null!=r&&"function"!=typeof r)throw new Error("task callback must be a function");if(u.started=!0,isArray(e)||(e=[e]),0===e.length&&u.idle())return setImmediate$1(function(){u.drain()});for(var n=0,o=e.length;n<o;n++){var i={data:e[n],callback:r||noop};t?u._tasks.unshift(i):u._tasks.push(i)}setImmediate$1(u.process)}function o(e){return rest(function(t){a-=1;for(var r=0,n=e.length;r<n;r++){var o=e[r],i=baseIndexOf(s,o,0);i>=0&&s.splice(i),o.callback.apply(o,t),null!=t[0]&&u.error(t[0],o.data)}a<=u.concurrency-u.buffer&&u.unsaturated(),u.idle()&&u.drain(),u.process()})}if(null==t)t=1;else if(0===t)throw new Error("Concurrency must not be zero");var i=wrapAsync$1(e),a=0,s=[],c=!1,u={_tasks:new DLL,concurrency:t,payload:r,saturated:noop,unsaturated:noop,buffer:t/4,empty:noop,drain:noop,error:noop,started:!1,paused:!1,push:function(e,t){n(e,!1,t)},kill:function(){u.drain=noop,u._tasks.empty()},unshift:function(e,t){n(e,!0,t)},process:function(){if(!c){for(c=!0;!u.paused&&a<u.concurrency&&u._tasks.length;){var e=[],t=[],r=u._tasks.length;u.payload&&(r=Math.min(r,u.payload));for(var n=0;n<r;n++){var l=u._tasks.shift();e.push(l),t.push(l.data)}0===u._tasks.length&&u.empty(),a+=1,s.push(e[0]),a===u.concurrency&&u.saturated();var f=onlyOnce(o(e));i(t,f)}c=!1}},length:function(){return u._tasks.length},running:function(){return a},workersList:function(){return s},idle:function(){return u._tasks.length+a===0},pause:function(){u.paused=!0},resume:function(){u.paused!==!1&&(u.paused=!1,setImmediate$1(u.process))}};return u}function cargo(e,t){return queue(e,1,t)}function reduce(e,t,r,n){n=once(n||noop);var o=wrapAsync$1(r);eachOfSeries(e,function(e,r,n){o(t,e,function(e,r){t=r,n(e)})},function(e){n(e,t)})}function concat$1(e,t,r,n){var o=[];e(t,function(e,t,n){r(e,function(e,t){o=o.concat(t||[]),n(e)})},function(e){n(e,o)})}function doSeries(e){return function(t,r,n){return e(eachOfSeries,t,wrapAsync$1(r),n)}}function _createTester(e,t){return function(r,n,o,i){i=i||noop;var a,s=!1;r(n,function(r,n,i){o(r,function(n,o){n?i(n):e(o)&&!a?(s=!0,a=t(!0,r),i(null,breakLoop)):i()})},function(e){e?i(e):i(null,s?a:t(!1))})}}function _findGetResult(e,t){return t}function consoleFunc(e){return rest(function(t,r){wrapAsync$1(t).apply(null,r.concat(rest(function(t,r){"object"==typeof console&&(t?console.error&&console.error(t):console[e]&&arrayEach(r,function(t){console[e](t)}))})))})}function doDuring(e,t,r){function n(e,t){return e?r(e):t?void o(a):r(null)}r=onlyOnce(r||noop);var o=wrapAsync$1(e),i=wrapAsync$1(t),a=rest(function(e,t){return e?r(e):(t.push(n),void i.apply(this,t))});n(null,!0)}function doWhilst(e,t,r){r=onlyOnce(r||noop);var n=wrapAsync$1(e),o=rest(function(e,i){return e?r(e):t.apply(this,i)?n(o):void r.apply(null,[null].concat(i))});n(o)}function doUntil(e,t,r){doWhilst(e,function(){return!t.apply(this,arguments)},r)}function during(e,t,r){function n(e){return e?r(e):void a(o)}function o(e,t){return e?r(e):t?void i(n):r(null)}r=onlyOnce(r||noop);var i=wrapAsync$1(t),a=wrapAsync$1(e);a(o)}function _withoutIndex(e){return function(t,r,n){return e(t,n)}}function eachLimit(e,t,r){eachOf(e,_withoutIndex(wrapAsync$1(t)),r)}function eachLimit$1(e,t,r,n){_eachOfLimit(t)(e,_withoutIndex(wrapAsync$1(r)),n)}function ensureAsync(e){return isAsync(e)?e:initialParams(function(t,r){var n=!0;t.push(function(){var e=arguments;n?setImmediate$1(function(){r.apply(null,e)}):r.apply(null,e)}),e.apply(this,t),n=!1})}function notId(e){return!e}function baseProperty(e){return function(t){return null==t?void 0:t[e]}}function filterArray(e,t,r,n){var o=new Array(t.length);e(t,function(e,t,n){r(e,function(e,r){o[t]=!!r,n(e)})},function(e){if(e)return n(e);for(var r=[],i=0;i<t.length;i++)o[i]&&r.push(t[i]);n(null,r)})}function filterGeneric(e,t,r,n){var o=[];e(t,function(e,t,n){r(e,function(r,i){r?n(r):(i&&o.push({index:t,value:e}),n())})},function(e){e?n(e):n(null,arrayMap(o.sort(function(e,t){return e.index-t.index}),baseProperty("value")))})}function _filter(e,t,r,n){var o=isArrayLike(t)?filterArray:filterGeneric;o(e,t,wrapAsync$1(r),n||noop)}function forever(e,t){function r(e){return e?n(e):void o(r)}var n=onlyOnce(t||noop),o=wrapAsync$1(ensureAsync(e));r()}function mapValuesLimit(e,t,r,n){n=once(n||noop);var o={},i=wrapAsync$1(r);eachOfLimit(e,t,function(e,t,r){i(e,t,function(e,n){return e?r(e):(o[t]=n,void r())})},function(e){n(e,o)})}function has(e,t){return t in e}function memoize(e,t){var r=Object.create(null),n=Object.create(null);t=t||identity;var o=wrapAsync$1(e),i=initialParams(function(e,i){var a=t.apply(null,e);has(r,a)?setImmediate$1(function(){i.apply(null,r[a])}):has(n,a)?n[a].push(i):(n[a]=[i],o.apply(null,e.concat(rest(function(e){r[a]=e;var t=n[a];delete n[a];for(var o=0,i=t.length;o<i;o++)t[o].apply(null,e)}))))});return i.memo=r,i.unmemoized=e,i}function _parallel(e,t,r){r=r||noop;var n=isArrayLike(t)?[]:{};e(t,function(e,t,r){wrapAsync$1(e)(rest(function(e,o){o.length<=1&&(o=o[0]),n[t]=o,r(e)}))},function(e){r(e,n)})}function parallelLimit(e,t){_parallel(eachOf,e,t)}function parallelLimit$1(e,t,r){_parallel(_eachOfLimit(t),e,r)}function race(e,t){if(t=once(t||noop),!isArray(e))return t(new TypeError("First argument to race must be an array of functions"));if(!e.length)return t();for(var r=0,n=e.length;r<n;r++)wrapAsync$1(e[r])(t)}function reduceRight(e,t,r,n){var o=slice.call(e).reverse();reduce(o,t,r,n)}function reflect(e){var t=wrapAsync$1(e);return initialParams(function(e,r){return e.push(rest(function(e,t){if(e)r(null,{error:e});else{var n=null;1===t.length?n=t[0]:t.length>1&&(n=t),r(null,{value:n})}})),t.apply(this,e)})}function reject$1(e,t,r,n){_filter(e,t,function(e,t){r(e,function(e,r){t(e,!r)})},n)}function reflectAll(e){var t;return isArray(e)?t=arrayMap(e,reflect):(t={},baseForOwn(e,function(e,r){t[r]=reflect.call(this,e)})),t}function constant$1(e){return function(){return e}}function retry(e,t,r){function n(e,t){if("object"==typeof t)e.times=+t.times||i,e.intervalFunc="function"==typeof t.interval?t.interval:constant$1(+t.interval||a),e.errorFilter=t.errorFilter;else{if("number"!=typeof t&&"string"!=typeof t)throw new Error("Invalid arguments for async.retry");e.times=+t||i}}function o(){c(function(e){e&&u++<s.times&&("function"!=typeof s.errorFilter||s.errorFilter(e))?setTimeout(o,s.intervalFunc(u)):r.apply(null,arguments)})}var i=5,a=0,s={times:i,intervalFunc:constant$1(a)};if(arguments.length<3&&"function"==typeof e?(r=t||noop,t=e):(n(s,e),r=r||noop),"function"!=typeof t)throw new Error("Invalid arguments for async.retry");var c=wrapAsync$1(t),u=1;o()}function series(e,t){_parallel(eachOfSeries,e,t)}function sortBy(e,t,r){function n(e,t){var r=e.criteria,n=t.criteria;return r<n?-1:r>n?1:0}var o=wrapAsync$1(t);map(e,function(e,t){o(e,function(r,n){return r?t(r):void t(null,{value:e,criteria:n})})},function(e,t){return e?r(e):void r(null,arrayMap(t.sort(n),baseProperty("value")))})}function timeout(e,t,r){function n(){s||(i.apply(null,arguments),clearTimeout(a))}function o(){var t=e.name||"anonymous",n=new Error('Callback function "'+t+'" timed out.');n.code="ETIMEDOUT",r&&(n.info=r),s=!0,i(n)}var i,a,s=!1,c=wrapAsync$1(e);return initialParams(function(e,r){i=r,a=setTimeout(o,t),c.apply(null,e.concat(n))})}function baseRange(e,t,r,n){for(var o=-1,i=nativeMax$1(nativeCeil((t-e)/(r||1)),0),a=Array(i);i--;)a[n?i:++o]=e,e+=r;return a}function timeLimit(e,t,r,n){var o=wrapAsync$1(r);mapLimit(baseRange(0,e,1),t,o,n)}function transform(e,t,r,n){arguments.length<=3&&(n=r,r=t,t=isArray(e)?[]:{}),n=once(n||noop);var o=wrapAsync$1(r);eachOf(e,function(e,r,n){o(t,e,r,n)},function(e){n(e,t)})}function unmemoize(e){return function(){return(e.unmemoized||e).apply(null,arguments)}}function whilst(e,t,r){r=onlyOnce(r||noop);var n=wrapAsync$1(t);if(!e())return r(null);var o=rest(function(t,i){return t?r(t):e()?n(o):void r.apply(null,[null].concat(i))});n(o)}function until(e,t,r){whilst(function(){return!e.apply(this,arguments)},t,r)}var nativeMax=Math.max,initialParams=function(e){return rest(function(t){var r=t.pop();e.call(this,t,r)})},supportsSymbol="function"==typeof Symbol,wrapAsync$1=supportsAsync()?wrapAsync:identity,freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),Symbol$1=root.Symbol,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag$1=Symbol$1?Symbol$1.toStringTag:void 0,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$1?Symbol$1.toStringTag:void 0,asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]",MAX_SAFE_INTEGER=9007199254740991,breakLoop={},iteratorSymbol="function"==typeof Symbol&&Symbol.iterator,getIterator=function(e){return iteratorSymbol&&e[iteratorSymbol]&&e[iteratorSymbol]()},argsTag="[object Arguments]",objectProto$3=Object.prototype,hasOwnProperty$2=objectProto$3.hasOwnProperty,propertyIsEnumerable=objectProto$3.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty$2.call(e,"callee")&&!propertyIsEnumerable.call(e,"callee")},isArray=Array.isArray,freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root.Buffer:void 0,nativeIsBuffer=Buffer?Buffer.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse,MAX_SAFE_INTEGER$1=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/,argsTag$1="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag$1="[object Function]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag$1]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=!1;var freeExports$1="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule$1=freeExports$1&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1,freeProcess=moduleExports$1&&freeGlobal.process,nodeUtil=function(){try{return freeProcess&&freeProcess.binding("util")}catch(e){}}(),nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray,objectProto$2=Object.prototype,hasOwnProperty$1=objectProto$2.hasOwnProperty,objectProto$5=Object.prototype,nativeKeys=overArg(Object.keys,Object),objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty,eachOfGeneric=doLimit(eachOfLimit,1/0),eachOf=function(e,t,r){var n=isArrayLike(e)?eachOfArrayLike:eachOfGeneric;n(e,wrapAsync$1(t),r)},map=doParallel(_asyncMap),applyEach=applyEach$1(map),mapLimit=doParallelLimit(_asyncMap),mapSeries=doLimit(mapLimit,1),applyEachSeries=applyEach$1(mapSeries),apply$2=rest(function(e,t){return rest(function(r){return e.apply(null,t.concat(r))})}),baseFor=createBaseFor(),auto=function(e,t,r){function n(e,t){g.push(function(){s(e,t)})}function o(){if(0===g.length&&0===y)return r(null,p);for(;g.length&&y<t;){var e=g.shift();e()}}function i(e,t){var r=d[e];r||(r=d[e]=[]),r.push(t)}function a(e){var t=d[e]||[];arrayEach(t,function(e){e()}),o()}function s(e,t){if(!m){var n=onlyOnce(rest(function(t,n){if(y--,n.length<=1&&(n=n[0]),t){var o={};baseForOwn(p,function(e,t){o[t]=e}),o[e]=n,m=!0,d=Object.create(null),r(t,o)}else p[e]=n,a(e)}));y++;var o=wrapAsync$1(t[t.length-1]);t.length>1?o(p,n):o(n)}}function c(){for(var e,t=0;h.length;)e=h.pop(),t++,arrayEach(u(e),function(e){0===--b[e]&&h.push(e)});if(t!==f)throw new Error("async.auto cannot execute tasks due to a recursive dependency")}function u(t){var r=[];return baseForOwn(e,function(e,n){isArray(e)&&baseIndexOf(e,t,0)>=0&&r.push(n)}),r}"function"==typeof t&&(r=t,t=null),r=once(r||noop);var l=keys(e),f=l.length;if(!f)return r(null);t||(t=f);var p={},y=0,m=!1,d=Object.create(null),g=[],h=[],b={};baseForOwn(e,function(t,r){if(!isArray(t))return n(r,[t]),void h.push(r);var o=t.slice(0,t.length-1),a=o.length;return 0===a?(n(r,t),void h.push(r)):(b[r]=a,void arrayEach(o,function(s){if(!e[s])throw new Error("async.auto task `"+r+"` has a non-existent dependency `"+s+"` in "+o.join(", "));i(s,function(){a--,0===a&&n(r,t)})}))}),c(),o()},symbolTag="[object Symbol]",INFINITY=1/0,symbolProto=Symbol$1?Symbol$1.prototype:void 0,symbolToString=symbolProto?symbolProto.toString:void 0,rsAstralRange="\\ud800-\\udfff",rsComboMarksRange="\\u0300-\\u036f\\ufe20-\\ufe23",rsComboSymbolsRange="\\u20d0-\\u20f0",rsVarRange="\\ufe0e\\ufe0f",rsZWJ="\\u200d",reHasUnicode=RegExp("["+rsZWJ+rsAstralRange+rsComboMarksRange+rsComboSymbolsRange+rsVarRange+"]"),rsAstralRange$1="\\ud800-\\udfff",rsComboMarksRange$1="\\u0300-\\u036f\\ufe20-\\ufe23",rsComboSymbolsRange$1="\\u20d0-\\u20f0",rsVarRange$1="\\ufe0e\\ufe0f",rsAstral="["+rsAstralRange$1+"]",rsCombo="["+rsComboMarksRange$1+rsComboSymbolsRange$1+"]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsModifier="(?:"+rsCombo+"|"+rsFitz+")",rsNonAstral="[^"+rsAstralRange$1+"]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsZWJ$1="\\u200d",reOptMod=rsModifier+"?",rsOptVar="["+rsVarRange$1+"]?",rsOptJoin="(?:"+rsZWJ$1+"(?:"+[rsNonAstral,rsRegional,rsSurrPair].join("|")+")"+rsOptVar+reOptMod+")*",rsSeq=rsOptVar+reOptMod+rsOptJoin,rsSymbol="(?:"+[rsNonAstral+rsCombo+"?",rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")+")",reUnicode=RegExp(rsFitz+"(?="+rsFitz+")|"+rsSymbol+rsSeq,"g"),reTrim=/^\s+|\s+$/g,FN_ARGS=/^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,FN_ARG_SPLIT=/,/,FN_ARG=/(=.+)?(\s*)$/,STRIP_COMMENTS=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,hasSetImmediate="function"==typeof setImmediate&&setImmediate,hasNextTick="object"==typeof process&&"function"==typeof process.nextTick,_defer;_defer=hasSetImmediate?setImmediate:hasNextTick?process.nextTick:fallback;var setImmediate$1=wrap(_defer);DLL.prototype.removeLink=function(e){return e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev,e.prev=e.next=null,this.length-=1,e},DLL.prototype.empty=DLL,DLL.prototype.insertAfter=function(e,t){t.prev=e,t.next=e.next,e.next?e.next.prev=t:this.tail=t,e.next=t,this.length+=1},DLL.prototype.insertBefore=function(e,t){t.prev=e.prev,t.next=e,e.prev?e.prev.next=t:this.head=t,e.prev=t,this.length+=1},DLL.prototype.unshift=function(e){this.head?this.insertBefore(this.head,e):setInitial(this,e)},DLL.prototype.push=function(e){this.tail?this.insertAfter(this.tail,e):setInitial(this,e)},DLL.prototype.shift=function(){return this.head&&this.removeLink(this.head)},DLL.prototype.pop=function(){return this.tail&&this.removeLink(this.tail)};var eachOfSeries=doLimit(eachOfLimit,1),seq$1=rest(function(e){var t=arrayMap(e,wrapAsync$1);return rest(function(e){var r=this,n=e[e.length-1];"function"==typeof n?e.pop():n=noop,reduce(t,e,function(e,t,n){t.apply(r,e.concat(rest(function(e,t){n(e,t)})))},function(e,t){n.apply(r,[e].concat(t))})})}),compose=rest(function(e){return seq$1.apply(null,e.reverse())}),concat=doParallel(concat$1),concatSeries=doSeries(concat$1),constant=rest(function(e){var t=[null].concat(e);return initialParams(function(e,r){return r.apply(this,t)})}),detect=doParallel(_createTester(identity,_findGetResult)),detectLimit=doParallelLimit(_createTester(identity,_findGetResult)),detectSeries=doLimit(detectLimit,1),dir=consoleFunc("dir"),eachSeries=doLimit(eachLimit$1,1),every=doParallel(_createTester(notId,notId)),everyLimit=doParallelLimit(_createTester(notId,notId)),everySeries=doLimit(everyLimit,1),filter=doParallel(_filter),filterLimit=doParallelLimit(_filter),filterSeries=doLimit(filterLimit,1),groupByLimit=function(e,t,r,n){n=n||noop;var o=wrapAsync$1(r);mapLimit(e,t,function(e,t){o(e,function(r,n){return r?t(r):t(null,{key:n,val:e})})},function(e,t){for(var r={},o=Object.prototype.hasOwnProperty,i=0;i<t.length;i++)if(t[i]){var a=t[i].key,s=t[i].val;o.call(r,a)?r[a].push(s):r[a]=[s]}return n(e,r)})},groupBy=doLimit(groupByLimit,1/0),groupBySeries=doLimit(groupByLimit,1),log=consoleFunc("log"),mapValues=doLimit(mapValuesLimit,1/0),mapValuesSeries=doLimit(mapValuesLimit,1),_defer$1;_defer$1=hasNextTick?process.nextTick:hasSetImmediate?setImmediate:fallback;var nextTick=wrap(_defer$1),queue$1=function(e,t){var r=wrapAsync$1(e);return queue(function(e,t){r(e[0],t)},t,1)},priorityQueue=function(e,t){var r=queue$1(e,t);return r.push=function(e,t,n){if(null==n&&(n=noop),"function"!=typeof n)throw new Error("task callback must be a function");if(r.started=!0,isArray(e)||(e=[e]),0===e.length)return setImmediate$1(function(){r.drain()});t=t||0;for(var o=r._tasks.head;o&&t>=o.priority;)o=o.next;for(var i=0,a=e.length;i<a;i++){var s={data:e[i],priority:t,callback:n};o?r._tasks.insertBefore(o,s):r._tasks.push(s)}setImmediate$1(r.process)},delete r.unshift,r},slice=Array.prototype.slice,reject=doParallel(reject$1),rejectLimit=doParallelLimit(reject$1),rejectSeries=doLimit(rejectLimit,1),retryable=function(e,t){t||(t=e,e=null);var r=wrapAsync$1(t);return initialParams(function(t,n){function o(e){r.apply(null,t.concat(e))}e?retry(e,o,n):retry(o,n)})},some=doParallel(_createTester(Boolean,identity)),someLimit=doParallelLimit(_createTester(Boolean,identity)),someSeries=doLimit(someLimit,1),nativeCeil=Math.ceil,nativeMax$1=Math.max,times=doLimit(timeLimit,1/0),timesSeries=doLimit(timeLimit,1),waterfall=function(e,t){function r(o){if(n===e.length)return t.apply(null,[null].concat(o));var i=onlyOnce(rest(function(e,n){return e?t.apply(null,[e].concat(n)):void r(n)}));o.push(i);var a=wrapAsync$1(e[n++]);a.apply(null,o)}if(t=once(t||noop),!isArray(e))return t(new Error("First argument to waterfall must be an array of functions"));if(!e.length)return t();var n=0;r([])},index={applyEach:applyEach,applyEachSeries:applyEachSeries,apply:apply$2,asyncify:asyncify,auto:auto,autoInject:autoInject,cargo:cargo,compose:compose,concat:concat,concatSeries:concatSeries,constant:constant,detect:detect,detectLimit:detectLimit,detectSeries:detectSeries,dir:dir,doDuring:doDuring,doUntil:doUntil,doWhilst:doWhilst,during:during,each:eachLimit,eachLimit:eachLimit$1,eachOf:eachOf,eachOfLimit:eachOfLimit,eachOfSeries:eachOfSeries,eachSeries:eachSeries,ensureAsync:ensureAsync,every:every,everyLimit:everyLimit,everySeries:everySeries,filter:filter,filterLimit:filterLimit,filterSeries:filterSeries,forever:forever,groupBy:groupBy,groupByLimit:groupByLimit,groupBySeries:groupBySeries,log:log,map:map,mapLimit:mapLimit,mapSeries:mapSeries,mapValues:mapValues,mapValuesLimit:mapValuesLimit,mapValuesSeries:mapValuesSeries,memoize:memoize,nextTick:nextTick,parallel:parallelLimit,parallelLimit:parallelLimit$1,priorityQueue:priorityQueue,queue:queue$1,race:race,reduce:reduce,reduceRight:reduceRight,reflect:reflect,reflectAll:reflectAll,reject:reject,rejectLimit:rejectLimit,rejectSeries:rejectSeries,retry:retry,retryable:retryable,seq:seq$1,series:series,setImmediate:setImmediate$1,some:some,someLimit:someLimit,someSeries:someSeries,sortBy:sortBy,timeout:timeout,times:times,timesLimit:timeLimit,timesSeries:timesSeries,transform:transform,unmemoize:unmemoize,until:until,waterfall:waterfall,whilst:whilst,all:every,any:some,forEach:eachLimit,forEachSeries:eachSeries,forEachLimit:eachLimit$1,forEachOf:eachOf,forEachOfSeries:eachOfSeries,forEachOfLimit:eachOfLimit,inject:reduce,foldl:reduce,foldr:reduceRight,select:filter,selectLimit:filterLimit,selectSeries:filterSeries,wrapSync:asyncify};exports.default=index,exports.applyEach=applyEach,exports.applyEachSeries=applyEachSeries,exports.apply=apply$2,exports.asyncify=asyncify,exports.auto=auto,exports.autoInject=autoInject,exports.cargo=cargo,exports.compose=compose,exports.concat=concat,exports.concatSeries=concatSeries,exports.constant=constant,exports.detect=detect,exports.detectLimit=detectLimit,exports.detectSeries=detectSeries,exports.dir=dir,exports.doDuring=doDuring,exports.doUntil=doUntil,exports.doWhilst=doWhilst,exports.during=during,exports.each=eachLimit,exports.eachLimit=eachLimit$1,exports.eachOf=eachOf,exports.eachOfLimit=eachOfLimit,exports.eachOfSeries=eachOfSeries,exports.eachSeries=eachSeries,exports.ensureAsync=ensureAsync,exports.every=every,exports.everyLimit=everyLimit,exports.everySeries=everySeries,exports.filter=filter,exports.filterLimit=filterLimit,exports.filterSeries=filterSeries,exports.forever=forever,exports.groupBy=groupBy,exports.groupByLimit=groupByLimit,exports.groupBySeries=groupBySeries,exports.log=log,exports.map=map,exports.mapLimit=mapLimit,exports.mapSeries=mapSeries,exports.mapValues=mapValues,exports.mapValuesLimit=mapValuesLimit,exports.mapValuesSeries=mapValuesSeries,exports.memoize=memoize,exports.nextTick=nextTick,exports.parallel=parallelLimit,exports.parallelLimit=parallelLimit$1,exports.priorityQueue=priorityQueue,exports.queue=queue$1,exports.race=race,exports.reduce=reduce,exports.reduceRight=reduceRight,exports.reflect=reflect,exports.reflectAll=reflectAll,exports.reject=reject,exports.rejectLimit=rejectLimit,exports.rejectSeries=rejectSeries,exports.retry=retry,exports.retryable=retryable,exports.seq=seq$1,exports.series=series,exports.setImmediate=setImmediate$1,exports.some=some,exports.someLimit=someLimit,exports.someSeries=someSeries,exports.sortBy=sortBy,exports.timeout=timeout,exports.times=times,exports.timesLimit=timeLimit,exports.timesSeries=timesSeries,exports.transform=transform,exports.unmemoize=unmemoize,exports.until=until,exports.waterfall=waterfall,exports.whilst=whilst,exports.all=every,exports.allLimit=everyLimit,exports.allSeries=everySeries,exports.any=some,exports.anyLimit=someLimit,exports.anySeries=someSeries,exports.find=detect,exports.findLimit=detectLimit,exports.findSeries=detectSeries,exports.forEach=eachLimit,exports.forEachSeries=eachSeries,exports.forEachLimit=eachLimit$1,exports.forEachOf=eachOf,exports.forEachOfSeries=eachOfSeries,exports.forEachOfLimit=eachOfLimit,exports.inject=reduce,exports.foldl=reduce,exports.foldr=reduceRight,exports.select=filter,exports.selectLimit=filterLimit,exports.selectSeries=filterSeries,exports.wrapSync=asyncify,Object.defineProperty(exports,"__esModule",{value:!0})});
//# sourceMappingURL=async.min.map
angular.module("ivpusic.cookie",["ipCookie"]),angular.module("ipCookie",["ng"]).factory("ipCookie",["$document",function(e){"use strict";function i(e){try{return decodeURIComponent(e)}catch(i){}}return function(){function t(t,n,r){var o,s,p,u,a,c,d,x,f;r=r||{};var g=r.decode||i,l=r.encode||encodeURIComponent;if(void 0!==n)return n="object"==typeof n?JSON.stringify(n):n+"","number"==typeof r.expires&&(f=r.expires,r.expires=new Date,-1===f?r.expires=new Date("Thu, 01 Jan 1970 00:00:00 GMT"):void 0!==r.expirationUnit?"hours"===r.expirationUnit?r.expires.setHours(r.expires.getHours()+f):"minutes"===r.expirationUnit?r.expires.setMinutes(r.expires.getMinutes()+f):"seconds"===r.expirationUnit?r.expires.setSeconds(r.expires.getSeconds()+f):"milliseconds"===r.expirationUnit?r.expires.setMilliseconds(r.expires.getMilliseconds()+f):r.expires.setDate(r.expires.getDate()+f):r.expires.setDate(r.expires.getDate()+f)),e[0].cookie=[l(t),"=",l(n),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("");for(s=[],x=e[0].cookie,x&&(s=x.split("; ")),o={},d=!1,p=0;s.length>p;++p)if(s[p]){if(u=s[p],a=u.indexOf("="),c=u.substring(0,a),n=g(u.substring(a+1)),angular.isUndefined(n))continue;if(void 0===t||t===c){try{o[c]=JSON.parse(n)}catch(m){o[c]=n}if(t===c)return o[c];d=!0}}return d&&void 0===t?o:void 0}return t.remove=function(e,i){var n=void 0!==t(e);return n&&(i||(i={}),i.expires=-1,t(e,"",i)),n},t}()}]);
/**
 * bootbox.js v4.4.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.bootbox=b(a.jQuery)}(this,function a(b,c){"use strict";function d(a){var b=q[o.locale];return b?b[a]:q.en[a]}function e(a,c,d){a.stopPropagation(),a.preventDefault();var e=b.isFunction(d)&&d.call(c,a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},o,a),a.buttons||(a.buttons={}),c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},o={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},p={};p.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback.call(this):!0},p.dialog(a)},p.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,!1)},a.buttons.confirm.callback=function(){return a.callback.call(this,!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return p.dialog(a)},p.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback.call(this,c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!b.isArray(k))throw new Error("Please pass an array of input options");if(!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var q=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(q,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),a.pattern&&h.attr("pattern",a.pattern),a.maxlength&&h.attr("maxlength",a.maxlength),f.append(h),f.on("submit",function(a){a.preventDefault(),a.stopPropagation(),e.find(".btn-primary").click()}),e=p.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},p.dialog=function(a){a=h(a);var d=b(n.dialog),f=d.find(".modal-dialog"),i=d.find(".modal-body"),j=a.buttons,k="",l={onEscape:a.onEscape};if(b.fn.modal===c)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(g(j,function(a,b){k+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",l[a]=b.callback}),i.find(".bootbox-body").html(a.message),a.animate===!0&&d.addClass("fade"),a.className&&d.addClass(a.className),"large"===a.size?f.addClass("modal-lg"):"small"===a.size&&f.addClass("modal-sm"),a.title&&i.before(n.header),a.closeButton){var m=b(n.closeButton);a.title?d.find(".modal-header").prepend(m):m.css("margin-top","-10px").prependTo(i)}return a.title&&d.find(".modal-title").html(a.title),k.length&&(i.after(n.footer),d.find(".modal-footer").html(k)),d.on("hidden.bs.modal",function(a){a.target===this&&d.remove()}),d.on("shown.bs.modal",function(){d.find(".btn-primary:first").focus()}),"static"!==a.backdrop&&d.on("click.dismiss.bs.modal",function(a){d.children(".modal-backdrop").length&&(a.currentTarget=d.children(".modal-backdrop").get(0)),a.target===a.currentTarget&&d.trigger("escape.close.bb")}),d.on("escape.close.bb",function(a){l.onEscape&&e(a,d,l.onEscape)}),d.on("click",".modal-footer button",function(a){var c=b(this).data("bb-handler");e(a,d,l[c])}),d.on("click",".bootbox-close-button",function(a){e(a,d,l.onEscape)}),d.on("keyup",function(a){27===a.which&&d.trigger("escape.close.bb")}),b(a.container).append(d),d.modal({backdrop:a.backdrop?"static":!1,keyboard:!1,show:!1}),a.show&&d.modal("show"),d},p.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(o,a)},p.hideAll=function(){return b(".bootbox").modal("hide"),p};var q={bg_BG:{OK:"Ок",CANCEL:"Отказ",CONFIRM:"Потвърждавам"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"قبول",CANCEL:"لغو",CONFIRM:"تایید"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},hu:{OK:"OK",CANCEL:"Mégsem",CONFIRM:"Megerősít"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"ตกลง",CANCEL:"ยกเลิก",CONFIRM:"ยืนยัน"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return p.addLocale=function(a,c){return b.each(["OK","CANCEL","CONFIRM"],function(a,b){if(!c[b])throw new Error("Please supply a translation for '"+b+"'")}),q[a]={OK:c.OK,CANCEL:c.CANCEL,CONFIRM:c.CONFIRM},p},p.removeLocale=function(a){return delete q[a],p},p.setLocale=function(a){return p.setDefaults("locale",a)},p.init=function(c){return a(c||b)},p});
/*
 * angular-auto-validate - v1.19.6 - 2016-06-17
 * https://github.com/jonsamwell/angular-auto-validate
 * Copyright (c) 2016 Jon Samwell (http://www.jonsamwell.com)
 */
!function(a,b){"use strict";function c(){var a={},c=!0,d=!0,e=!1,f=!0,g=!0,h=function(a){var b;return a&&0!==a.length?(b=a.toLowerCase(),a=!("f"===b||"0"===b||"false"===b)):a=!1,a},i=function(a,b){var c;return void 0!==a&&(c=a.attr(b)||a.attr("data-"+b)),c},j=function(a,b){var c;return void 0!==a&&(c=void 0!==a.attr(b)||void 0!==a.attr("data-"+b)),c},k=function(a,b){return h(i(a,b))},l=function(a){return c&&!k(a,"disable-valid-styling")},m=function(a){return!k(a,"disable-auto-validate")},n=function(a){return d&&!k(a,"disable-invalid-styling")};this.enable=function(a){f=a},this.isEnabled=function(){return f},this.setDefaultElementModifier=function(b){if(void 0===a[b])throw new Error("Element modifier not registered: "+b);this.defaultElementModifier=b},this.registerDomModifier=function(b,c){a[b]=c},this.setErrorMessageResolver=function(a){this.errorMessageResolver=a},this.getErrorMessage=function(a,c){var d;if(void 0===this.errorMessageResolver)throw new Error("Please set an error message resolver via the setErrorMessageResolver function before attempting to resolve an error message.");return j(c,"disable-validation-message")?(d=b.injector(["ng"]).get("$q").defer(),d.resolve(""),d.promise):this.errorMessageResolver(a,c)},this.setValidElementStyling=function(a){c=a},this.setInvalidElementStyling=function(a){d=a},this.setFirstInvalidElementScrollingOnSubmit=function(a){e=a},this.firstInvalidElementScrollingOnSubmitEnabled=function(){return e},this.setFocusInputError=function(a){g=a},this.enableFocusInputError=function(){return g},this.getDomModifier=function(b){var c=(void 0!==b?b.attr("element-modifier"):this.defaultElementModifier)||(void 0!==b?b.attr("data-element-modifier"):this.defaultElementModifier)||this.defaultElementModifier;if(void 0===c)throw new Error("Please set a default dom modifier via the setDefaultElementModifier method on the validator class.");return a[c]},this.makeValid=function(a){m(a)&&(l(a)?this.getDomModifier(a).makeValid(a):this.makeDefault(a))},this.makeInvalid=function(a,b){m(a)&&(n(a)?this.getDomModifier(a).makeInvalid(a,b):this.makeDefault(a))},this.makeDefault=function(a){if(m(a)){var b=this.getDomModifier(a);b.makeDefault&&b.makeDefault(a)}},this.waitForAsyncValidators=function(a){if(m(a)){var b=this.getDomModifier(a);b.waitForAsyncValidators&&b.waitForAsyncValidators(a)}},this.defaultFormValidationOptions={forceValidation:!1,disabled:!1,validateNonVisibleControls:!1,removeExternalValidationErrorsOnSubmit:!0,validateOnFormSubmit:!1,waitForAsyncValidators:!0},this.$get=[function(){return this}]}function d(a){var c=!1,d=["<style>.glyphicon-spin-jcs {-webkit-animation: spin 1000ms infinite linear;animation: spin 1000ms infinite linear;}@-webkit-keyframes spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(359deg);transform: rotate(359deg);}}@keyframes spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(359deg);transform: rotate(359deg);}}</style>"].join(""),e=function(a){c===!1&&(b.element(document.body).append(b.element(d)),c=!0),b.forEach(a.find("span"),function(a){a=b.element(a),(a.hasClass("error-msg")||a.hasClass("form-control-feedback")||a.hasClass("control-feedback"))&&a.remove()}),a.removeClass("has-success has-error has-feedback")},f=function(a,b){for(var c,d=a,e=0;10>=e;e+=1){if(void 0!==d&&d.hasClass(b)){c=d;break}void 0!==d&&(d=d.parent())}return c},g=function(a,c){for(var d,e=0;e<a.children.length&&(d=a.children[e],void 0===d||!b.element(d).hasClass(c))&&!(void 0!==d.children&&(d=g(d,c),d.length>0));e+=1);return b.element(d)},h=function(a){return f(a,"form-group")},i=function(a){return g(a,"input-group")},j=function(a,b){a[0].parentNode.insertBefore(b[0],a[0].nextSibling)},k=!1,l=function(a){k=a},m=function(c){var d,f=h(c);if(f){if(e(f),d=i(f[0]),f.addClass("has-success "+(d.length>0||k===!1?"":"has-feedback")),k){var g='<span class="glyphicon glyphicon-ok form-control-feedback"></span>';d.length>0&&(g=g.replace("form-",""),g='<span class="input-group-addon control-feedback">'+g+"</span>"),j(c,b.element(g))}}else a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")},n=function(c,d){var f,g=h(c),l=b.element('<span class="help-block has-error error-msg">'+d+"</span>");if(g){if(e(g),f=i(g[0]),g.addClass("has-error "+(f.length>0||k===!1?"":"has-feedback")),j(f.length>0?f:o(c),l),k){var m='<span class="glyphicon glyphicon-remove form-control-feedback"></span>';f.length>0&&(m=m.replace("form-",""),m='<span class="input-group-addon control-feedback">'+m+"</span>"),j(o(c),b.element(m))}}else a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")},o=function(a){var b=a,c=a[0].type?a[0].type.toLowerCase():"";return"checkbox"!==c&&"radio"!==c||"label"!==a.parent()[0].nodeName.toLowerCase()||(b=a.parent()),b},p=function(b){var c=h(b);c?e(c):a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")},q=function(c){var d,f=h(c);if(f){if(e(f),d=i(f[0]),f.addClass("has-feedback "+(d.length>0||k===!1?"":"has-feedback")),k){var g='<span class="glyphicon glyphicon-repeat glyphicon-spin-jcs form-control-feedback"></span>';d.length>0&&(g=g.replace("form-",""),g='<span class="input-group-addon control-feedback">'+g+"</span>"),j(c,b.element(g))}}else a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")};return{makeValid:m,makeInvalid:n,makeDefault:p,waitForAsyncValidators:q,enableValidationStateIcons:l,key:"bs3"}}function e(a){var b=function(b,c,d){var e;return function(){var f=this,g=arguments,h=function(){e=null,d||b.apply(f,g)},i=d&&!e;a.cancel(e),e=a(h,c,!1),i&&b.apply(f,g)}};return{debounce:b}}function f(a,b){return a.replace(/{(\d+)}/g,function(a,c){return void 0!==typeof b[c]?b[c]:a})}function g(a,c){var d,e="default",g="js/angular-auto-validate/dist/lang",h=function(a){return d=c.get(f("{0}/jcs-auto-validate_{1}.json",[g,a.toLowerCase()]))},i=function(a){g=a},j=function(c,f){var g=a.defer();return f=f||h,e=c.toLowerCase(),void 0===b.autoValidate.errorMessages[e]?(d=f(c),d.then(function(a){d=void 0,b.autoValidate.errorMessages[e]=a.data,g.resolve(b.autoValidate.errorMessages[e])},function(a){b.autoValidate.errorMessages[e]={defaultMsg:"Loading culture failed!"},d=null,g.reject(a)})):g.resolve(b.autoValidate.errorMessages[e]),g.promise},k=function(c){var f=a.defer();return c=void 0===c?e:c.toLowerCase(),void 0!==d?d.then(function(){f.resolve(b.autoValidate.errorMessages[c])},function(a){f.reject(a)}):f.resolve(b.autoValidate.errorMessages[c]),f.promise},l=function(a,b){var c;return b&&(a+="-err-type",c=b.attr("ng-"+a),void 0===c&&(c=b.attr("data-ng-"+a)||b.attr(a)),c&&(c=c.replace(/[\W]/g,""))),c},m=function(c,g){var h,i,j,k=a.defer(),n=[];if(void 0!==d)d.then(function(){m(c,g).then(function(a){k.resolve(a)})});else{if(h=b.autoValidate.errorMessages[e][c],j=l(c,g),j&&(h=b.autoValidate.errorMessages[e][j]),void 0===h&&void 0!==j?h=f(b.autoValidate.errorMessages[e].defaultMsg,[j]):void 0===h&&(h=f(b.autoValidate.errorMessages[e].defaultMsg,[c])),g&&g.attr)try{i=g.attr("ng-"+c),void 0===i&&(i=g.attr("data-ng-"+c)||g.attr(c)),n.push(i||""),h=f(h,n)}catch(o){}k.resolve(h)}return k.promise};return{setI18nFileRootPath:i,setCulture:j,getErrorMessages:k,resolve:m}}function h(){var a=function(a,c){b.forEach(a.find("small"),function(a){b.element(a).hasClass("error")&&b.element(a).remove()}),c.removeClass("error")},c=function(a){for(var b=a,c=0;3>=c&&(void 0===b||!b.hasClass("columns")&&!b.hasClass("column"));c+=1)void 0!==b&&(b=b.parent());return b},d=function(b){var d=c(b);a(d&&d.length>0?d:b,b)},e=function(d,e){var f,g=c(d);a(g||d,d),d.addClass("error"),g&&(f=b.element('<small class="error">'+e+"</small>"),g.append(f))},f=function(a){d(a)};return{makeValid:d,makeInvalid:e,makeDefault:f,key:"foundation5"}}function i(){var a=function(a,c){b.forEach(a.find("small"),function(a){b.element(a).hasClass("form-error is-visible")&&b.element(a).remove()}),c.removeClass("alert callout")},c=function(a){for(var b=a,c=0;3>=c&&(void 0===b||!b.hasClass("columns")&&!b.hasClass("column"));c+=1)void 0!==b&&(b=b.parent());return b},d=function(b){var d=c(b);a(d&&d.length>0?d:b,b)},e=function(d,e){var f,g=c(d);a(g||d,d),d.addClass("alert callout"),g&&(f=b.element('<small class="form-error is-visible">'+e+"</small>"),g.append(f))},f=function(a){d(a)};return{makeValid:d,makeInvalid:e,makeDefault:f,key:"foundation6"}}function j(){var a=function(a){return a[0].offsetWidth>0&&a[0].offsetHeight>0};return{isElementVisible:a}}function k(a,c,d){var e=["input","textarea","select","form"],f=function(a){return c.isElementVisible(a)},g=function(c){var d,e=b.element(c).controller("form");return d=void 0!==e&&null!==e?e.autoValidateFormOptions:a.defaultFormValidationOptions},h=function(a,b,c){var d,g,h,i=a&&a.length>0,j=i&&"#comment"===a[0].nodeName.toLowerCase();return i&&j===!1&&(d=f(a)||b.validateNonVisibleControls,g=e.indexOf(a[0].nodeName.toLowerCase())>-1||a[0].hasAttribute("register-custom-form-control"),h=b.validateOnFormSubmit===!1||b.validateOnFormSubmit===!0&&c===!0),i&&!j&&d&&g&&h},i=function(c,d,e){var f,i=!0,j=e||g(d),k=c.$pristine===!1||j.forceValidation,l=function(a){var c,d=!0;return b.forEach(a,function(a,b){d&&a&&(d=!1,c=b)}),c};return j.disabled===!1&&(j.forceValidation||h(d,j,j.getFormController().$submitted)&&c&&k)&&(i=!c.$invalid,j.removeExternalValidationErrorsOnSubmit&&c.removeAllExternalValidation&&c.removeAllExternalValidation(),void 0!==c.$pending&&e.waitForAsyncValidators===!0?a.waitForAsyncValidators(d):i?a.makeValid(d):(f=l(c.$errors||c.$error),void 0===f?i=!0:a.getErrorMessage(f,d).then(function(b){a.makeInvalid(d,b)}))),i},j=function(b){a.makeDefault(b)},k=function(a){b.forEach(a[0].all||a[0].elements||a[0],function(a){var c,d=b.element(a);c=d.controller("ngModel"),void 0!==c&&("form"===d[0].nodeName.toLowerCase()?k(d):c.$setPristine())})},l=function(c){var e,f=!0,j=null,k=c?b.element(c).controller("form"):void 0,m=function(c,e,m){var n,o,p,q;if(c=b.element(c),n=c.controller("ngModel"),void 0!==n&&(e||h(c,m,k.$submitted)))if("form"===c[0].nodeName.toLowerCase())l(c);else{p=g(c),q=p.forceValidation,p.forceValidation=e;try{if(o=i(n,c,p),a.enableFocusInputError()&&!o&&f&&(j||(j=c[0],j.focus())),a.firstInvalidElementScrollingOnSubmitEnabled()&&!o&&f){var r=c.attr("id");r&&d(r)}f=f&&o}finally{p.forceValidation=q}}};return void 0===c||void 0!==k&&k.autoValidateFormOptions.disabled?void 0!==c:(e=b.copy(k.autoValidateFormOptions),e.forceValidation=!0,b.forEach(c[0].elements||c[0].all||c[0],function(a){m(a,!0,e)}),c[0].customHTMLFormControlsCollection&&b.forEach(c[0].customHTMLFormControlsCollection,function(a){m(a,!0,e)}),f)},m=function(b,c,d){d?a.makeInvalid(b,d):a.getErrorMessage(c,b).then(function(c){a.makeInvalid(b,c)})};return{setElementValidationError:m,validateElement:i,validateForm:l,resetElement:j,resetForm:k}}function l(a,b){return void 0!==a&&null!==a||void 0===b?"false"!==a:b}function m(a,c,d){var e=a.autoValidateFormOptions=a.autoValidateFormOptions||b.copy(c.defaultFormValidationOptions);e.getFormController=function(){return a},e.waitForAsyncValidators=l(d.waitForAsyncValidators,e.waitForAsyncValidators),e.forceValidation=!1,e.disabled=!c.isEnabled()||l(d.disableDynamicValidation,e.disabled),e.validateNonVisibleControls=l(d.validateNonVisibleControls,e.validateNonVisibleControls),e.validateOnFormSubmit=l(d.validateOnFormSubmit,e.validateOnFormSubmit),e.removeExternalValidationErrorsOnSubmit=void 0===d.removeExternalValidationErrorsOnSubmit?e.removeExternalValidationErrorsOnSubmit:l(d.removeExternalValidationErrorsOnSubmit,e.removeExternalValidationErrorsOnSubmit),c.isEnabled()===!1&&"false"===d.disableDynamicValidation&&(e.disabled=!1)}function n(a){return{restrict:"E",link:function(b,c){function d(){a.resetForm(c),e.$setPristine&&e.$setPristine(),e.$setUntouched&&e.$setUntouched()}var e=c.controller("form");void 0!==e&&e.autoValidateFormOptions&&e.autoValidateFormOptions.disabled===!1&&(c.on("reset",d),b.$on("$destroy",function(){c.off("reset",d)}))}}}function o(){var a=function(a){for(var c=a,d=0;50>=d&&(void 0===c||"form"!==c.nodeName.toLowerCase());d+=1)void 0!==c&&(c=b.element(c).parent()[0]);return c};return{restrict:"A",link:function(b,c){var d=a(c.parent()[0]);d&&(d.customHTMLFormControlsCollection=d.customHTMLFormControlsCollection||[],d.customHTMLFormControlsCollection.push(c[0]))}}}function p(a,b,c){return a[0].compile=function(a,d){var e=b(d.ngSubmit),f="true"===d.ngSubmitForce;return function(a,b){function d(d){a.$apply(function(){void 0!==i&&null!==i&&i.autoValidateFormOptions&&i.autoValidateFormOptions.disabled===!0?e(a,{$event:d}):(void 0===i.$setSubmitted&&(i.$submitted=!0),(c.validateForm(b)||f===!0)&&e(a,{$event:d}))})}function g(){b[0].reset?b[0].reset():c.resetForm(b)}var h,i=b.controller("form");i&&i.autoValidateFormOptions&&(i.autoValidateFormOptions.resetForm=g,void 0!==i.$name&&""!==i.$name&&(h=a.$on("form:"+i.$name+":reset",g))),b.on("submit",d),a.$on("$destroy",function(){b.off("submit",d),h&&h()})}},a}function q(a){a.decorator("ngSubmitDirective",p)}function r(a,b,c,d,e){a.setErrorMessageResolver(b.resolve),a.registerDomModifier(c.key,c),a.registerDomModifier(d.key,d),a.registerDomModifier(e.key,e),a.setDefaultElementModifier(c.key)}b.module("jcs-autoValidate",[]),b.module("jcs-autoValidate").provider("validator",c),d.$inject=["$log"],b.module("jcs-autoValidate").factory("bootstrap3ElementModifier",d),e.$inject=["$timeout"],b.module("jcs-autoValidate").factory("jcs-debounce",e),b.autoValidate=b.autoValidate||{errorMessages:{}},b.autoValidate.errorMessages["default"]={defaultMsg:"Please add error message for {0}",email:"Please enter a valid email address",minlength:"Please enter at least {0} characters",maxlength:"You have entered more than the maximum {0} characters",min:"Please enter the minimum number of {0}",max:"Please enter the maximum number of {0}",required:"This field is required",date:"Please enter a valid date",pattern:"Please ensure the entered information adheres to this pattern {0}",number:"Please enter a valid number",url:"Please enter a valid URL in the format of http(s)://www.google.com"},g.$inject=["$q","$http"],b.module("jcs-autoValidate").factory("defaultErrorMessageResolver",g),b.module("jcs-autoValidate").factory("foundation5ElementModifier",h),b.module("jcs-autoValidate").factory("foundation6ElementModifier",i),k.$inject=["validator","jcs-elementUtils","$anchorScroll"],b.module("jcs-autoValidate").factory("jcs-elementUtils",j),b.module("jcs-autoValidate").factory("validationManager",k),b.module("jcs-autoValidate").directive("form",["validator",function(a){return{restrict:"E",require:"form",compile:function(){return{pre:function(b,c,d,e){m(e,a,d)}}}}}]),b.module("jcs-autoValidate").directive("ngForm",["validator",function(a){return{restrict:"EA",require:"form",priority:9999,compile:function(){return{pre:function(b,c,d,e){m(e,a,d)}}}}}]),n.$inject=["validationManager"],b.module("jcs-autoValidate").directive("form",n),b.module("jcs-autoValidate").directive("registerCustomFormControl",o),p.$inject=["$delegate","$parse","validationManager"],q.$inject=["$provide"],b.module("jcs-autoValidate").config(q),b.module("jcs-autoValidate").config(["$provide",function(a){a.decorator("ngModelDirective",["$timeout","$delegate","validationManager","jcs-debounce",function(a,c,d,e){var f=c[0],g=f.link||f.compile;return f.compile=function(a){var c=b.version.major>=1&&b.version.minor>=3,f=g;return c&&b.isFunction(g)&&(f=g(a)),{pre:function(a,g,h,i){var j=i[0],k=i[1],l=void 0===h.ngModelOptions?void 0:a.$eval(h.ngModelOptions),m=j.$setValidity,n=j.$setPristine,o=e.debounce(function(){var a=void 0!==k&&null!==k?k.autoValidateFormOptions:void 0;d.validateElement(j,g,a)},100);return void 0===h.formnovalidate&&void 0!==k&&null!==k&&k.autoValidateFormOptions&&k.autoValidateFormOptions.disabled===!1&&(c||!c||void 0===l||void 0===l.updateOn||""===l.updateOn?j.$setValidity=function(a,b){m.call(j,a,b),o()}:(g.on(l.updateOn,function(){o()}),a.$on("$destroy",function(){g.off(l.updateOn)})),j.$setPristine=function(){n.call(j),d.resetElement(g)},j.autoValidated=!0),j.setExternalValidation=function(a,b,c){c&&j.$setValidity(a,!1),j.externalErrors=j.externalErrors||{},j.externalErrors[a]=!1,d.setElementValidationError(g,a,b)},j.removeExternalValidation=function(a,b){if(b){j.$setValidity(a,!0);var c=j.$error||j.$errors;delete c[a]}j.externalErrors&&delete j.externalErrors[a],d.resetElement(g)},j.removeAllExternalValidation=function(){if(j.externalErrors){var a=j.$error||j.$errors;b.forEach(j.externalErrors,function(b,c){j.$setValidity(c,!0),delete a[c]}),j.externalErrors={},d.resetElement(g)}},k&&(k.setExternalValidation=function(a,b,c,d){var e=!1;return k[a]&&(k[a].setExternalValidation(b,c,d),e=!0),e},k.removeExternalValidation=function(a,b,c,d){var e=!1;return k[a]&&(k[a].removeExternalValidation(b,d),e=!0),e}),f.pre?f.pre.apply(this,arguments):this},post:function(a,b,c,d){return f.post?f.post.apply(this,arguments):f.apply(this,arguments)}}},c}])}]),r.$inject=["validator","defaultErrorMessageResolver","bootstrap3ElementModifier","foundation5ElementModifier","foundation6ElementModifier"],b.module("jcs-autoValidate").run(r)}(String,angular);
/*! ngprogress-lite - v1.0.8 (http://labs.voronianski.com/ngprogress-lite.js) */
!function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("angular")):"function"==typeof define&&define.amd?define(["angular"],b):b(a.angular)}(this,function(a){"use strict";return a.module("ngProgressLite",[]).provider("ngProgressLite",function(){var b=this.settings={minimum:.08,speed:300,ease:"ease",trickleRate:.02,trickleSpeed:500,template:'<div class="ngProgressLite"><div class="ngProgressLiteBar"><div class="ngProgressLiteBarShadow"></div></div></div>'};this.$get=["$document",function(c){var d,e,f,g=c.find("body"),h={render:function(){return this.isRendered()?d:(g.addClass("ngProgressLite-on"),d=a.element(b.template),g.append(d),f=!1,d)},remove:function(){g.removeClass("ngProgressLite-on"),d.remove(),f=!0},isRendered:function(){return d&&d.children().length>0&&!f},trickle:function(){return i.inc(Math.random()*b.trickleRate)},clamp:function(a,b,c){return b>a?b:a>c?c:a},toBarPercents:function(a){return 100*a},positioning:function(a,b,c){return{width:this.toBarPercents(a)+"%",transition:"all "+b+"ms "+c}}},i={set:function(a){var c=h.render();return a=h.clamp(a,b.minimum,1),e=1===a?null:a,setTimeout(function(){c.children().eq(0).css(h.positioning(a,b.speed,b.ease))},100),1===a&&setTimeout(function(){c.css({transition:"all "+b.speed+"ms linear",opacity:0}),setTimeout(function(){h.remove()},b.speed)},b.speed),i},get:function(){return e},start:function(){e||i.set(0);var a=function(){setTimeout(function(){e&&(h.trickle(),a())},b.trickleSpeed)};return a(),i},inc:function(a){var b=e;return b?("number"!=typeof a&&(a=(1-b)*h.clamp(Math.random()*b,.1,.95)),b=h.clamp(b+a,0,.994),i.set(b)):i.start()},done:function(){e&&i.inc(.3+.5*Math.random()).set(1)}};return i}]}).name});
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  // CommonJS
  if (typeof exports == 'object') {
    module.exports = factory();
  }
  // AMD module
  else if (typeof define == 'function' && define.amd) {
    define(factory);
  }
  // Browser global
  else {
    root.Spinner = factory();
  }

}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
    if(s[prop] !== undefined) return prop
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: '50%',           // center vertically
    left: '50%',          // center horizontally
    position: 'absolute'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width

      css(el, {
        left: o.left,
        top: o.top
      })
        
      if (target) {
        target.insertBefore(el, target.firstChild||null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: getColor(o.color, i), opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));

/*!
 * Ladda
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2016 Hakim El Hattab, http://hakim.se
 */
/* jshint node:true, browser:true */
(function( root, factory ) {

	// CommonJS
	if( typeof exports === 'object' )  {
		module.exports = factory(require('spin.js'));
	}
	// AMD module
	else if( typeof define === 'function' && define.amd ) {
		define( [ 'spin' ], factory );
	}
	// Browser global
	else {
		root.Ladda = factory( root.Spinner );
	}

}
(this, function( Spinner ) {
	'use strict';

	// All currently instantiated instances of Ladda
	var ALL_INSTANCES = [];

	/**
	 * Creates a new instance of Ladda which wraps the
	 * target button element.
	 *
	 * @return An API object that can be used to control
	 * the loading animation state.
	 */
	function create( button ) {

		if( typeof button === 'undefined' ) {
			console.warn( "Ladda button target must be defined." );
			return;
		}

		// The button must have the class "ladda-button"
		if( !/ladda-button/i.test( button.className ) ) {
			button.className += ' ladda-button';
		}

		// Style is required, default to "expand-right"
		if( !button.hasAttribute( 'data-style' ) ) {
			button.setAttribute( 'data-style', 'expand-right' );
		}

		// The text contents must be wrapped in a ladda-label
		// element, create one if it doesn't already exist
		if( !button.querySelector( '.ladda-label' ) ) {
			var laddaLabel = document.createElement( 'span' );
			laddaLabel.className = 'ladda-label';
			wrapContent( button, laddaLabel );
		}

		// The spinner component
		var spinner,
			spinnerWrapper = button.querySelector( '.ladda-spinner' );

		// Wrapper element for the spinner
		if( !spinnerWrapper ) {
			spinnerWrapper = document.createElement( 'span' );
			spinnerWrapper.className = 'ladda-spinner';
		}

		button.appendChild( spinnerWrapper );

		// Timer used to delay starting/stopping
		var timer;

		var instance = {

			/**
			 * Enter the loading state.
			 */
			start: function() {

				// Create the spinner if it doesn't already exist
				if( !spinner ) spinner = createSpinner( button );

				button.setAttribute( 'disabled', '' );
				button.setAttribute( 'data-loading', '' );

				clearTimeout( timer );
				spinner.spin( spinnerWrapper );

				this.setProgress( 0 );

				return this; // chain

			},

			/**
			 * Enter the loading state, after a delay.
			 */
			startAfter: function( delay ) {

				clearTimeout( timer );
				timer = setTimeout( function() { instance.start(); }, delay );

				return this; // chain

			},

			/**
			 * Exit the loading state.
			 */
			stop: function() {

				button.removeAttribute( 'disabled' );
				button.removeAttribute( 'data-loading' );

				// Kill the animation after a delay to make sure it
				// runs for the duration of the button transition
				clearTimeout( timer );

				if( spinner ) {
					timer = setTimeout( function() { spinner.stop(); }, 1000 );
				}

				return this; // chain

			},

			/**
			 * Toggle the loading state on/off.
			 */
			toggle: function() {

				if( this.isLoading() ) {
					this.stop();
				}
				else {
					this.start();
				}

				return this; // chain

			},

			/**
			 * Sets the width of the visual progress bar inside of
			 * this Ladda button
			 *
			 * @param {Number} progress in the range of 0-1
			 */
			setProgress: function( progress ) {

				// Cap it
				progress = Math.max( Math.min( progress, 1 ), 0 );

				var progressElement = button.querySelector( '.ladda-progress' );

				// Remove the progress bar if we're at 0 progress
				if( progress === 0 && progressElement && progressElement.parentNode ) {
					progressElement.parentNode.removeChild( progressElement );
				}
				else {
					if( !progressElement ) {
						progressElement = document.createElement( 'div' );
						progressElement.className = 'ladda-progress';
						button.appendChild( progressElement );
					}

					progressElement.style.width = ( ( progress || 0 ) * button.offsetWidth ) + 'px';
				}

			},

			enable: function() {

				this.stop();

				return this; // chain

			},

			disable: function () {

				this.stop();
				button.setAttribute( 'disabled', '' );

				return this; // chain

			},

			isLoading: function() {

				return button.hasAttribute( 'data-loading' );

			},

			remove: function() {

				clearTimeout( timer );

				button.removeAttribute( 'disabled', '' );
				button.removeAttribute( 'data-loading', '' );

				if( spinner ) {
					spinner.stop();
					spinner = null;
				}

				for( var i = 0, len = ALL_INSTANCES.length; i < len; i++ ) {
					if( instance === ALL_INSTANCES[i] ) {
						ALL_INSTANCES.splice( i, 1 );
						break;
					}
				}

			}

		};

		ALL_INSTANCES.push( instance );

		return instance;

	}

	/**
	* Get the first ancestor node from an element, having a
	* certain type.
	*
	* @param elem An HTML element
	* @param type an HTML tag type (uppercased)
	*
	* @return An HTML element
	*/
	function getAncestorOfTagType( elem, type ) {

		while ( elem.parentNode && elem.tagName !== type ) {
			elem = elem.parentNode;
		}

		return ( type === elem.tagName ) ? elem : undefined;

	}

	/**
	 * Returns a list of all inputs in the given form that
	 * have their `required` attribute set.
	 *
	 * @param form The from HTML element to look in
	 *
	 * @return A list of elements
	 */
	function getRequiredFields( form ) {

		var requirables = [ 'input', 'textarea', 'select' ];
		var inputs = [];

		for( var i = 0; i < requirables.length; i++ ) {
			var candidates = form.getElementsByTagName( requirables[i] );
			for( var j = 0; j < candidates.length; j++ ) {
				if ( candidates[j].hasAttribute( 'required' ) ) {
					inputs.push( candidates[j] );
				}
			}
		}

		return inputs;

	}


	/**
	 * Binds the target buttons to automatically enter the
	 * loading state when clicked.
	 *
	 * @param target Either an HTML element or a CSS selector.
	 * @param options
	 *          - timeout Number of milliseconds to wait before
	 *            automatically cancelling the animation.
	 */
	function bind( target, options ) {

		options = options || {};

		var targets = [];

		if( typeof target === 'string' ) {
			targets = toArray( document.querySelectorAll( target ) );
		}
		else if( typeof target === 'object' && typeof target.nodeName === 'string' ) {
			targets = [ target ];
		}

		for( var i = 0, len = targets.length; i < len; i++ ) {

			(function() {
				var element = targets[i];

				// Make sure we're working with a DOM element
				if( typeof element.addEventListener === 'function' ) {
					var instance = create( element );
					var timeout = -1;

					element.addEventListener( 'click', function( event ) {

						// If the button belongs to a form, make sure all the
						// fields in that form are filled out
						var valid = true;
						var form = getAncestorOfTagType( element, 'FORM' );

						if( typeof form !== 'undefined' ) {
							// Modern form validation
							if( typeof form.checkValidity === 'function' ) {
								valid = form.checkValidity();
							}
							// Fallback to manual validation for old browsers
							else {
								var requireds = getRequiredFields( form );
								for( var i = 0; i < requireds.length; i++ ) {

									if( requireds[i].value.replace( /^\s+|\s+$/g, '' ) === '' ) {
										valid = false;
									}

									// Radiobuttons and Checkboxes need to be checked for the "checked" attribute
									if( (requireds[i].type === 'checkbox' || requireds[i].type === 'radio' ) && !requireds[i].checked ) {
										valid = false;
									}

									// Email field validation
									if( requireds[i].type === 'email' ) {
										valid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test( requireds[i].value );
									}

								}
							}
						}

						if( valid ) {
							// This is asynchronous to avoid an issue where setting
							// the disabled attribute on the button prevents forms
							// from submitting
							instance.startAfter( 1 );

							// Set a loading timeout if one is specified
							if( typeof options.timeout === 'number' ) {
								clearTimeout( timeout );
								timeout = setTimeout( instance.stop, options.timeout );
							}

							// Invoke callbacks
							if( typeof options.callback === 'function' ) {
								options.callback.apply( null, [ instance ] );
							}
						}

					}, false );
				}
			})();

		}

	}

	/**
	 * Stops ALL current loading animations.
	 */
	function stopAll() {

		for( var i = 0, len = ALL_INSTANCES.length; i < len; i++ ) {
			ALL_INSTANCES[i].stop();
		}

	}

	function createSpinner( button ) {

		var height = button.offsetHeight,
			spinnerColor,
			spinnerLines;

		if( height === 0 ) {
			// We may have an element that is not visible so
			// we attempt to get the height in a different way
			height = parseFloat( window.getComputedStyle( button ).height );
		}

		// If the button is tall we can afford some padding
		if( height > 32 ) {
			height *= 0.8;
		}

		// Prefer an explicit height if one is defined
		if( button.hasAttribute( 'data-spinner-size' ) ) {
			height = parseInt( button.getAttribute( 'data-spinner-size' ), 10 );
		}

		// Allow buttons to specify the color of the spinner element
		if( button.hasAttribute( 'data-spinner-color' ) ) {
			spinnerColor = button.getAttribute( 'data-spinner-color' );
		}

		// Allow buttons to specify the number of lines of the spinner
		if( button.hasAttribute( 'data-spinner-lines' ) ) {
			spinnerLines = parseInt( button.getAttribute( 'data-spinner-lines' ), 10 );
		}

		var radius = height * 0.2,
			length = radius * 0.6,
			width = radius < 7 ? 2 : 3;

		return new Spinner( {
			color: spinnerColor || '#fff',
			lines: spinnerLines || 12,
			radius: radius,
			length: length,
			width: width,
			zIndex: 'auto',
			top: 'auto',
			left: 'auto',
			className: ''
		} );

	}

	function toArray( nodes ) {

		var a = [];

		for ( var i = 0; i < nodes.length; i++ ) {
			a.push( nodes[ i ] );
		}

		return a;

	}

	function wrapContent( node, wrapper ) {

		var r = document.createRange();
		r.selectNodeContents( node );
		r.surroundContents( wrapper );
		node.appendChild( wrapper );

	}

	// Public API
	return {

		bind: bind,
		create: create,
		stopAll: stopAll

	};

}));

/*! angular-ladda 0.4.3 */
!function(e,n){"use strict";if("function"==typeof define&&define.amd)define(["angular","ladda"],n);else{if("undefined"==typeof module||"object"!=typeof module.exports)return n(e.angular,e.Ladda);module.exports=n(window.angular||require("angular"),require("ladda"))}}(this,function(e,n){"use strict";var t="angular-ladda";return e.module(t,[]).provider("ladda",function(){var n={style:"zoom-in"};return{setOption:function(t){e.extend(n,t)},$get:function(){return n}}}).directive("ladda",["ladda","$timeout",function(t,a){return{restrict:"A",priority:-1,link:function(r,i,d){a(function(){if(i.addClass("ladda-button"),e.isUndefined(i.attr("data-style"))&&i.attr("data-style",t.style||"zoom-in"),e.isUndefined(i.attr("data-spinner-size"))&&t.spinnerSize&&i.attr("data-spinner-size",t.spinnerSize),e.isUndefined(i.attr("data-spinner-color"))&&t.spinnerColor&&i.attr("data-spinner-color",t.spinnerColor),!i[0].querySelector(".ladda-label")){var a=document.createElement("span");a.className="ladda-label",e.element(a).append(i.contents()),i.append(a)}var o=n.create(i[0]);r.$watch(d.ladda,function(n){return n||e.isNumber(n)?(o.isLoading()||o.start(),void(e.isNumber(n)&&o.setProgress(n))):(o.stop(),void(d.ngDisabled&&i.attr("disabled",r.$eval(d.ngDisabled))))}),r.$on("$destroy",function(){o&&o.remove()})})}}}]),t});
/*! 12.2.13 */
!function(){function a(a,b){window.XMLHttpRequest.prototype[a]=b(window.XMLHttpRequest.prototype[a])}function b(a,b,c){try{Object.defineProperty(a,b,{get:c})}catch(d){}}if(window.FileAPI||(window.FileAPI={}),!window.XMLHttpRequest)throw"AJAX is not supported. XMLHttpRequest is not defined.";if(FileAPI.shouldLoad=!window.FormData||FileAPI.forceLoad,FileAPI.shouldLoad){var c=function(a){if(!a.__listeners){a.upload||(a.upload={}),a.__listeners=[];var b=a.upload.addEventListener;a.upload.addEventListener=function(c,d){a.__listeners[c]=d,b&&b.apply(this,arguments)}}};a("open",function(a){return function(b,d,e){c(this),this.__url=d;try{a.apply(this,[b,d,e])}catch(f){f.message.indexOf("Access is denied")>-1&&(this.__origError=f,a.apply(this,[b,"_fix_for_ie_crossdomain__",e]))}}}),a("getResponseHeader",function(a){return function(b){return this.__fileApiXHR&&this.__fileApiXHR.getResponseHeader?this.__fileApiXHR.getResponseHeader(b):null==a?null:a.apply(this,[b])}}),a("getAllResponseHeaders",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.getAllResponseHeaders?this.__fileApiXHR.getAllResponseHeaders():null==a?null:a.apply(this)}}),a("abort",function(a){return function(){return this.__fileApiXHR&&this.__fileApiXHR.abort?this.__fileApiXHR.abort():null==a?null:a.apply(this)}}),a("setRequestHeader",function(a){return function(b,d){if("__setXHR_"===b){c(this);var e=d(this);e instanceof Function&&e(this)}else this.__requestHeaders=this.__requestHeaders||{},this.__requestHeaders[b]=d,a.apply(this,arguments)}}),a("send",function(a){return function(){var c=this;if(arguments[0]&&arguments[0].__isFileAPIShim){var d=arguments[0],e={url:c.__url,jsonp:!1,cache:!0,complete:function(a,d){a&&angular.isString(a)&&-1!==a.indexOf("#2174")&&(a=null),c.__completed=!0,!a&&c.__listeners.load&&c.__listeners.load({type:"load",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),!a&&c.__listeners.loadend&&c.__listeners.loadend({type:"loadend",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),"abort"===a&&c.__listeners.abort&&c.__listeners.abort({type:"abort",loaded:c.__loaded,total:c.__total,target:c,lengthComputable:!0}),void 0!==d.status&&b(c,"status",function(){return 0===d.status&&a&&"abort"!==a?500:d.status}),void 0!==d.statusText&&b(c,"statusText",function(){return d.statusText}),b(c,"readyState",function(){return 4}),void 0!==d.response&&b(c,"response",function(){return d.response});var e=d.responseText||(a&&0===d.status&&"abort"!==a?a:void 0);b(c,"responseText",function(){return e}),b(c,"response",function(){return e}),a&&b(c,"err",function(){return a}),c.__fileApiXHR=d,c.onreadystatechange&&c.onreadystatechange(),c.onload&&c.onload()},progress:function(a){if(a.target=c,c.__listeners.progress&&c.__listeners.progress(a),c.__total=a.total,c.__loaded=a.loaded,a.total===a.loaded){var b=this;setTimeout(function(){c.__completed||(c.getAllResponseHeaders=function(){},b.complete(null,{status:204,statusText:"No Content"}))},FileAPI.noContentTimeout||1e4)}},headers:c.__requestHeaders};e.data={},e.files={};for(var f=0;f<d.data.length;f++){var g=d.data[f];null!=g.val&&null!=g.val.name&&null!=g.val.size&&null!=g.val.type?e.files[g.key]=g.val:e.data[g.key]=g.val}setTimeout(function(){if(!FileAPI.hasFlash)throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';c.__fileApiXHR=FileAPI.upload(e)},1)}else{if(this.__origError)throw this.__origError;a.apply(c,arguments)}}}),window.XMLHttpRequest.__isFileAPIShim=!0,window.FormData=FormData=function(){return{append:function(a,b,c){b.__isFileAPIBlobShim&&(b=b.data[0]),this.data.push({key:a,val:b,name:c})},data:[],__isFileAPIShim:!0}},window.Blob=Blob=function(a){return{data:a,__isFileAPIBlobShim:!0}}}}(),function(){function a(a){return"input"===a[0].tagName.toLowerCase()&&a.attr("type")&&"file"===a.attr("type").toLowerCase()}function b(){try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(a)return!0}catch(b){if(void 0!==navigator.mimeTypes["application/x-shockwave-flash"])return!0}return!1}function c(a){var b=0,c=0;if(window.jQuery)return jQuery(a).offset();if(a.offsetParent)do b+=a.offsetLeft-a.scrollLeft,c+=a.offsetTop-a.scrollTop,a=a.offsetParent;while(a);return{left:b,top:c}}if(FileAPI.shouldLoad){if(FileAPI.hasFlash=b(),FileAPI.forceLoad&&(FileAPI.html5=!1),!FileAPI.upload){var d,e,f,g,h,i=document.createElement("script"),j=document.getElementsByTagName("script");if(window.FileAPI.jsUrl)d=window.FileAPI.jsUrl;else if(window.FileAPI.jsPath)e=window.FileAPI.jsPath;else for(f=0;f<j.length;f++)if(h=j[f].src,g=h.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/),g>-1){e=h.substring(0,g+1);break}null==FileAPI.staticPath&&(FileAPI.staticPath=e),i.setAttribute("src",d||e+"FileAPI.min.js"),document.getElementsByTagName("head")[0].appendChild(i)}FileAPI.ngfFixIE=function(d,e,f){if(!b())throw'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';var g=function(){var b=e.parent();d.attr("disabled")?b&&b.removeClass("js-fileapi-wrapper"):(e.attr("__ngf_flash_")||(e.unbind("change"),e.unbind("click"),e.bind("change",function(a){h.apply(this,[a]),f.apply(this,[a])}),e.attr("__ngf_flash_","true")),b.addClass("js-fileapi-wrapper"),a(d)||(b.css("position","absolute").css("top",c(d[0]).top+"px").css("left",c(d[0]).left+"px").css("width",d[0].offsetWidth+"px").css("height",d[0].offsetHeight+"px").css("filter","alpha(opacity=0)").css("display",d.css("display")).css("overflow","hidden").css("z-index","900000").css("visibility","visible"),e.css("width",d[0].offsetWidth+"px").css("height",d[0].offsetHeight+"px").css("position","absolute").css("top","0px").css("left","0px")))};d.bind("mouseenter",g);var h=function(a){for(var b=FileAPI.getFiles(a),c=0;c<b.length;c++)void 0===b[c].size&&(b[c].size=0),void 0===b[c].name&&(b[c].name="file"),void 0===b[c].type&&(b[c].type="undefined");a.target||(a.target={}),a.target.files=b,a.target.files!==b&&(a.__files_=b),(a.__files_||a.target.files).item=function(b){return(a.__files_||a.target.files)[b]||null}}},FileAPI.disableFileInput=function(a,b){b?a.removeClass("js-fileapi-wrapper"):a.addClass("js-fileapi-wrapper")}}}(),window.FileReader||(window.FileReader=function(){var a=this,b=!1;this.listeners={},this.addEventListener=function(b,c){a.listeners[b]=a.listeners[b]||[],a.listeners[b].push(c)},this.removeEventListener=function(b,c){a.listeners[b]&&a.listeners[b].splice(a.listeners[b].indexOf(c),1)},this.dispatchEvent=function(b){var c=a.listeners[b.type];if(c)for(var d=0;d<c.length;d++)c[d].call(a,b)},this.onabort=this.onerror=this.onload=this.onloadstart=this.onloadend=this.onprogress=null;var c=function(b,c){var d={type:b,target:a,loaded:c.loaded,total:c.total,error:c.error};return null!=c.result&&(d.target.result=c.result),d},d=function(d){b||(b=!0,a.onloadstart&&a.onloadstart(c("loadstart",d)));var e;"load"===d.type?(a.onloadend&&a.onloadend(c("loadend",d)),e=c("load",d),a.onload&&a.onload(e),a.dispatchEvent(e)):"progress"===d.type?(e=c("progress",d),a.onprogress&&a.onprogress(e),a.dispatchEvent(e)):(e=c("error",d),a.onerror&&a.onerror(e),a.dispatchEvent(e))};this.readAsDataURL=function(a){FileAPI.readAsDataURL(a,d)},this.readAsText=function(a){FileAPI.readAsText(a,d)}});
/*! 12.2.13 */
!window.XMLHttpRequest||window.FileAPI&&FileAPI.shouldLoad||(window.XMLHttpRequest.prototype.setRequestHeader=function(a){return function(b,c){if("__setXHR_"===b){var d=c(this);d instanceof Function&&d(this)}else a.apply(this,arguments)}}(window.XMLHttpRequest.prototype.setRequestHeader));var ngFileUpload=angular.module("ngFileUpload",[]);ngFileUpload.version="12.2.13",ngFileUpload.service("UploadBase",["$http","$q","$timeout",function(a,b,c){function d(d){function e(a){j.notify&&j.notify(a),k.progressFunc&&c(function(){k.progressFunc(a)})}function h(a){return null!=d._start&&g?{loaded:a.loaded+d._start,total:d._file&&d._file.size||a.total,type:a.type,config:d,lengthComputable:!0,target:a.target}:a}function i(){a(d).then(function(a){if(g&&d._chunkSize&&!d._finished&&d._file){var b=d._file&&d._file.size||0;e({loaded:Math.min(d._end,b),total:b,config:d,type:"progress"}),f.upload(d,!0)}else d._finished&&delete d._finished,j.resolve(a)},function(a){j.reject(a)},function(a){j.notify(a)})}d.method=d.method||"POST",d.headers=d.headers||{};var j=d._deferred=d._deferred||b.defer(),k=j.promise;return d.disableProgress||(d.headers.__setXHR_=function(){return function(a){a&&a.upload&&a.upload.addEventListener&&(d.__XHR=a,d.xhrFn&&d.xhrFn(a),a.upload.addEventListener("progress",function(a){a.config=d,e(h(a))},!1),a.upload.addEventListener("load",function(a){a.lengthComputable&&(a.config=d,e(h(a)))},!1))}}),g?d._chunkSize&&d._end&&!d._finished?(d._start=d._end,d._end+=d._chunkSize,i()):d.resumeSizeUrl?a.get(d.resumeSizeUrl).then(function(a){d._start=d.resumeSizeResponseReader?d.resumeSizeResponseReader(a.data):parseInt((null==a.data.size?a.data:a.data.size).toString()),d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):d.resumeSize?d.resumeSize().then(function(a){d._start=a,d._chunkSize&&(d._end=d._start+d._chunkSize),i()},function(a){throw a}):(d._chunkSize&&(d._start=0,d._end=d._start+d._chunkSize),i()):i(),k.success=function(a){return k.then(function(b){a(b.data,b.status,b.headers,d)}),k},k.error=function(a){return k.then(null,function(b){a(b.data,b.status,b.headers,d)}),k},k.progress=function(a){return k.progressFunc=a,k.then(null,null,function(b){a(b)}),k},k.abort=k.pause=function(){return d.__XHR&&c(function(){d.__XHR.abort()}),k},k.xhr=function(a){return d.xhrFn=function(b){return function(){b&&b.apply(k,arguments),a.apply(k,arguments)}}(d.xhrFn),k},f.promisesCount++,k["finally"]&&k["finally"]instanceof Function&&k["finally"](function(){f.promisesCount--}),k}function e(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var f=this;f.promisesCount=0,this.isResumeSupported=function(){return window.Blob&&window.Blob.prototype.slice};var g=this.isResumeSupported();this.isUploadInProgress=function(){return f.promisesCount>0},this.rename=function(a,b){return a.ngfName=b,a},this.jsonBlob=function(a){null==a||angular.isString(a)||(a=JSON.stringify(a));var b=new window.Blob([a],{type:"application/json"});return b._ngfBlob=!0,b},this.json=function(a){return angular.toJson(a)},this.isFile=function(a){return null!=a&&(a instanceof window.Blob||a.flashId&&a.name&&a.size)},this.upload=function(a,b){function c(b,c){if(b._ngfBlob)return b;if(a._file=a._file||b,null!=a._start&&g){a._end&&a._end>=b.size&&(a._finished=!0,a._end=b.size);var d=b.slice(a._start,a._end||b.size);return d.name=b.name,d.ngfName=b.ngfName,a._chunkSize&&(c.append("_chunkSize",a._chunkSize),c.append("_currentChunkSize",a._end-a._start),c.append("_chunkNumber",Math.floor(a._start/a._chunkSize)),c.append("_totalSize",a._file.size)),d}return b}function h(b,d,e){if(void 0!==d)if(angular.isDate(d)&&(d=d.toISOString()),angular.isString(d))b.append(e,d);else if(f.isFile(d)){var g=c(d,b),i=e.split(",");i[1]&&(g.ngfName=i[1].replace(/^\s+|\s+$/g,""),e=i[0]),a._fileKey=a._fileKey||e,b.append(e,g,g.ngfName||g.name)}else if(angular.isObject(d)){if(d.$$ngfCircularDetection)throw"ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: "+e;d.$$ngfCircularDetection=!0;try{for(var j in d)if(d.hasOwnProperty(j)&&"$$ngfCircularDetection"!==j){var k=null==a.objectKey?"[i]":a.objectKey;d.length&&parseInt(j)>-1&&(k=null==a.arrayKey?k:a.arrayKey),h(b,d[j],e+k.replace(/[ik]/g,j))}}finally{delete d.$$ngfCircularDetection}}else b.append(e,d)}function i(){a._chunkSize=f.translateScalars(a.resumeChunkSize),a._chunkSize=a._chunkSize?parseInt(a._chunkSize.toString()):null,a.headers=a.headers||{},a.headers["Content-Type"]=void 0,a.transformRequest=a.transformRequest?angular.isArray(a.transformRequest)?a.transformRequest:[a.transformRequest]:[],a.transformRequest.push(function(b){var c,d=new window.FormData;b=b||a.fields||{},a.file&&(b.file=a.file);for(c in b)if(b.hasOwnProperty(c)){var e=b[c];a.formDataAppender?a.formDataAppender(d,c,e):h(d,e,c)}return d})}return b||(a=e(a)),a._isDigested||(a._isDigested=!0,i()),d(a)},this.http=function(b){return b=e(b),b.transformRequest=b.transformRequest||function(b){return window.ArrayBuffer&&b instanceof window.ArrayBuffer||b instanceof window.Blob?b:a.defaults.transformRequest[0].apply(this,arguments)},b._chunkSize=f.translateScalars(b.resumeChunkSize),b._chunkSize=b._chunkSize?parseInt(b._chunkSize.toString()):null,d(b)},this.translateScalars=function(a){if(angular.isString(a)){if(a.search(/kb/i)===a.length-2)return parseFloat(1024*a.substring(0,a.length-2));if(a.search(/mb/i)===a.length-2)return parseFloat(1048576*a.substring(0,a.length-2));if(a.search(/gb/i)===a.length-2)return parseFloat(1073741824*a.substring(0,a.length-2));if(a.search(/b/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/s/i)===a.length-1)return parseFloat(a.substring(0,a.length-1));if(a.search(/m/i)===a.length-1)return parseFloat(60*a.substring(0,a.length-1));if(a.search(/h/i)===a.length-1)return parseFloat(3600*a.substring(0,a.length-1))}return a},this.urlToBlob=function(c){var d=b.defer();return a({url:c,method:"get",responseType:"arraybuffer"}).then(function(a){var b=new Uint8Array(a.data),e=a.headers("content-type")||"image/WebP",f=new window.Blob([b],{type:e}),g=c.match(/.*\/(.+?)(\?.*)?$/);g.length>1&&(f.name=g[1]),d.resolve(f)},function(a){d.reject(a)}),d.promise},this.setDefaults=function(a){this.defaults=a||{}},this.defaults={},this.version=ngFileUpload.version}]),ngFileUpload.service("Upload",["$parse","$timeout","$compile","$q","UploadExif",function(a,b,c,d,e){function f(a,b,c){var e=[i.emptyPromise()];return angular.forEach(a,function(d,f){0===d.type.indexOf("image/jpeg")&&i.attrGetter("ngfFixOrientation",b,c,{$file:d})&&e.push(i.happyPromise(i.applyExifRotation(d),d).then(function(b){a.splice(f,1,b)}))}),d.all(e)}function g(a,b,c,e){var f=i.attrGetter("ngfResize",b,c);if(!f||!i.isResizeSupported()||!a.length)return i.emptyPromise();if(f instanceof Function){var g=d.defer();return f(a).then(function(d){h(d,a,b,c,e).then(function(a){g.resolve(a)},function(a){g.reject(a)})},function(a){g.reject(a)})}return h(f,a,b,c,e)}function h(a,b,c,e,f){function g(d,g){if(0===d.type.indexOf("image")){if(a.pattern&&!i.validatePattern(d,a.pattern))return;a.resizeIf=function(a,b){return i.attrGetter("ngfResizeIf",c,e,{$width:a,$height:b,$file:d})};var j=i.resize(d,a);h.push(j),j.then(function(a){b.splice(g,1,a)},function(a){d.$error="resize",(d.$errorMessages=d.$errorMessages||{}).resize=!0,d.$errorParam=(a?(a.message?a.message:a)+": ":"")+(d&&d.name),f.$ngfValidations.push({name:"resize",valid:!1}),i.applyModelValidation(f,b)})}}for(var h=[i.emptyPromise()],j=0;j<b.length;j++)g(b[j],j);return d.all(h)}var i=e;return i.getAttrWithDefaults=function(a,b){if(null!=a[b])return a[b];var c=i.defaults[b];return null==c?c:angular.isString(c)?c:JSON.stringify(c)},i.attrGetter=function(b,c,d,e){var f=this.getAttrWithDefaults(c,b);if(!d)return f;try{return e?a(f)(d,e):a(f)(d)}catch(g){if(b.search(/min|max|pattern/i))return f;throw g}},i.shouldUpdateOn=function(a,b,c){var d=i.attrGetter("ngfModelOptions",b,c);return d&&d.updateOn?d.updateOn.split(" ").indexOf(a)>-1:!0},i.emptyPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.resolve.apply(a,c)}),a.promise},i.rejectPromise=function(){var a=d.defer(),c=arguments;return b(function(){a.reject.apply(a,c)}),a.promise},i.happyPromise=function(a,c){var e=d.defer();return a.then(function(a){e.resolve(a)},function(a){b(function(){throw a}),e.resolve(c)}),e.promise},i.updateModel=function(c,d,e,h,j,k,l){function m(f,g,j,l,m){d.$$ngfPrevValidFiles=f,d.$$ngfPrevInvalidFiles=g;var n=f&&f.length?f[0]:null,o=g&&g.length?g[0]:null;c&&(i.applyModelValidation(c,f),c.$setViewValue(m?n:f)),h&&a(h)(e,{$files:f,$file:n,$newFiles:j,$duplicateFiles:l,$invalidFiles:g,$invalidFile:o,$event:k});var p=i.attrGetter("ngfModelInvalid",d);p&&b(function(){a(p).assign(e,m?o:g)}),b(function(){})}function n(){function a(a,b){return a.name===b.name&&(a.$ngfOrigSize||a.size)===(b.$ngfOrigSize||b.size)&&a.type===b.type}function b(b){var c;for(c=0;c<r.length;c++)if(a(b,r[c]))return!0;for(c=0;c<s.length;c++)if(a(b,s[c]))return!0;return!1}if(j){q=[],t=[];for(var c=0;c<j.length;c++)b(j[c])?t.push(j[c]):q.push(j[c])}}function o(a){return angular.isArray(a)?a:[a]}function p(){function a(){b(function(){m(w?r.concat(v):v,w?s.concat(u):u,j,t,x)},z&&z.debounce?z.debounce.change||z.debounce:0)}var f=y?q:v;g(f,d,e,c).then(function(){y?i.validate(q,w?r.length:0,c,d,e).then(function(b){v=b.validsFiles,u=b.invalidsFiles,a()}):a()},function(){for(var b=0;b<f.length;b++){var c=f[b];if("resize"===c.$error){var d=v.indexOf(c);d>-1&&(v.splice(d,1),u.push(c)),a()}}})}var q,r,s,t=[],u=[],v=[];r=d.$$ngfPrevValidFiles||[],s=d.$$ngfPrevInvalidFiles||[],c&&c.$modelValue&&(r=o(c.$modelValue));var w=i.attrGetter("ngfKeep",d,e);q=(j||[]).slice(0),("distinct"===w||i.attrGetter("ngfKeepDistinct",d,e)===!0)&&n(d,e);var x=!w&&!i.attrGetter("ngfMultiple",d,e)&&!i.attrGetter("multiple",d);if(!w||q.length){i.attrGetter("ngfBeforeModelChange",d,e,{$files:j,$file:j&&j.length?j[0]:null,$newFiles:q,$duplicateFiles:t,$event:k});var y=i.attrGetter("ngfValidateAfterResize",d,e),z=i.attrGetter("ngfModelOptions",d,e);i.validate(q,w?r.length:0,c,d,e).then(function(a){l?m(q,[],j,t,x):(z&&z.allowInvalid||y?v=q:(v=a.validFiles,u=a.invalidFiles),i.attrGetter("ngfFixOrientation",d,e)&&i.isExifSupported()?f(v,d,e).then(function(){p()}):p())})}},i}]),ngFileUpload.directive("ngfSelect",["$parse","$timeout","$compile","Upload",function(a,b,c,d){function e(a){var b=a.match(/Android[^\d]*(\d+)\.(\d+)/);if(b&&b.length>2){var c=d.defaults.androidFixMinorVersion||4;return parseInt(b[1])<4||parseInt(b[1])===c&&parseInt(b[2])<c}return-1===a.indexOf("Chrome")&&/.*Windows.*Safari.*/.test(a)}function f(a,b,c,d,f,h,i,j){function k(){return"input"===b[0].tagName.toLowerCase()&&c.type&&"file"===c.type.toLowerCase()}function l(){return t("ngfChange")||t("ngfSelect")}function m(b){if(j.shouldUpdateOn("change",c,a)){var e=b.__files_||b.target&&b.target.files,f=[];if(!e)return;for(var g=0;g<e.length;g++)f.push(e[g]);j.updateModel(d,c,a,l(),f.length?f:null,b)}}function n(a,d){function e(b){a.attr("id","ngf-"+b),d.attr("id","ngf-label-"+b)}for(var f=0;f<b[0].attributes.length;f++){var g=b[0].attributes[f];"type"!==g.name&&"class"!==g.name&&"style"!==g.name&&("id"===g.name?(e(g.value),u.push(c.$observe("id",e))):a.attr(g.name,g.value||"required"!==g.name&&"multiple"!==g.name?g.value:g.name))}}function o(){if(k())return b;var a=angular.element('<input type="file">'),c=angular.element("<label>upload</label>");return c.css("visibility","hidden").css("position","absolute").css("overflow","hidden").css("width","0px").css("height","0px").css("border","none").css("margin","0px").css("padding","0px").attr("tabindex","-1"),n(a,c),g.push({el:b,ref:c}),document.body.appendChild(c.append(a)[0]),a}function p(c){if(b.attr("disabled"))return!1;if(!t("ngfSelectDisabled",a)){var d=q(c);if(null!=d)return d;r(c);try{k()||document.body.contains(x[0])||(g.push({el:b,ref:x.parent()}),document.body.appendChild(x.parent()[0]),x.bind("change",m))}catch(f){}return e(navigator.userAgent)?setTimeout(function(){x[0].click()},0):x[0].click(),!1}}function q(a){var b=a.changedTouches||a.originalEvent&&a.originalEvent.changedTouches;if(b){if("touchstart"===a.type)return w=b[0].clientX,v=b[0].clientY,!0;if("touchend"===a.type){var c=b[0].clientX,d=b[0].clientY;if(Math.abs(c-w)>20||Math.abs(d-v)>20)return a.stopPropagation(),a.preventDefault(),!1}return!0}}function r(b){j.shouldUpdateOn("click",c,a)&&x.val()&&(x.val(null),j.updateModel(d,c,a,l(),null,b,!0))}function s(a){if(x&&!x.attr("__ngf_ie10_Fix_")){if(!x[0].parentNode)return void(x=null);a.preventDefault(),a.stopPropagation(),x.unbind("click");var b=x.clone();return x.replaceWith(b),x=b,x.attr("__ngf_ie10_Fix_","true"),x.bind("change",m),x.bind("click",s),x[0].click(),!1}x.removeAttr("__ngf_ie10_Fix_")}var t=function(a,b){return j.attrGetter(a,c,b)};j.registerModelChangeValidator(d,c,a);var u=[];t("ngfMultiple")&&u.push(a.$watch(t("ngfMultiple"),function(){x.attr("multiple",t("ngfMultiple",a))})),t("ngfCapture")&&u.push(a.$watch(t("ngfCapture"),function(){x.attr("capture",t("ngfCapture",a))})),t("ngfAccept")&&u.push(a.$watch(t("ngfAccept"),function(){x.attr("accept",t("ngfAccept",a))})),u.push(c.$observe("accept",function(){x.attr("accept",t("accept"))}));var v=0,w=0,x=b;k()||(x=o()),x.bind("change",m),k()?b.bind("click",r):b.bind("click touchstart touchend",p),-1!==navigator.appVersion.indexOf("MSIE 10")&&x.bind("click",s),d&&d.$formatters.push(function(a){return(null==a||0===a.length)&&x.val()&&x.val(null),a}),a.$on("$destroy",function(){k()||x.parent().remove(),angular.forEach(u,function(a){a()})}),h(function(){for(var a=0;a<g.length;a++){var b=g[a];document.body.contains(b.el[0])||(g.splice(a,1),b.ref.remove())}}),window.FileAPI&&window.FileAPI.ngfFixIE&&window.FileAPI.ngfFixIE(b,x,m)}var g=[];return{restrict:"AEC",require:"?ngModel",link:function(e,g,h,i){f(e,g,h,i,a,b,c,d)}}}]),function(){function a(a){return"img"===a.tagName.toLowerCase()?"image":"audio"===a.tagName.toLowerCase()?"audio":"video"===a.tagName.toLowerCase()?"video":/./}function b(b,c,d,e,f,g,h,i){function j(a){var g=b.attrGetter("ngfNoObjectUrl",f,d);b.dataUrl(a,g)["finally"](function(){c(function(){var b=(g?a.$ngfDataUrl:a.$ngfBlobUrl)||a.$ngfDataUrl;i?e.css("background-image","url('"+(b||"")+"')"):e.attr("src",b),b?e.removeClass("ng-hide"):e.addClass("ng-hide")})})}c(function(){var c=d.$watch(f[g],function(c){var k=h;if("ngfThumbnail"===g&&(k||(k={width:e[0].naturalWidth||e[0].clientWidth,height:e[0].naturalHeight||e[0].clientHeight}),0===k.width&&window.getComputedStyle)){var l=getComputedStyle(e[0]);l.width&&l.width.indexOf("px")>-1&&l.height&&l.height.indexOf("px")>-1&&(k={width:parseInt(l.width.slice(0,-2)),height:parseInt(l.height.slice(0,-2))})}return angular.isString(c)?(e.removeClass("ng-hide"),i?e.css("background-image","url('"+c+"')"):e.attr("src",c)):void(!c||!c.type||0!==c.type.search(a(e[0]))||i&&0!==c.type.indexOf("image")?e.addClass("ng-hide"):k&&b.isResizeSupported()?(k.resizeIf=function(a,e){return b.attrGetter("ngfResizeIf",f,d,{$width:a,$height:e,$file:c})},b.resize(c,k).then(function(a){j(a)},function(a){throw a})):j(c))});d.$on("$destroy",function(){c()})})}ngFileUpload.service("UploadDataUrl",["UploadBase","$timeout","$q",function(a,b,c){var d=a;return d.base64DataUrl=function(a){if(angular.isArray(a)){var b=c.defer(),e=0;return angular.forEach(a,function(c){d.dataUrl(c,!0)["finally"](function(){if(e++,e===a.length){var c=[];angular.forEach(a,function(a){c.push(a.$ngfDataUrl)}),b.resolve(c,a)}})}),b.promise}return d.dataUrl(a,!0)},d.dataUrl=function(a,e){if(!a)return d.emptyPromise(a,a);if(e&&null!=a.$ngfDataUrl||!e&&null!=a.$ngfBlobUrl)return d.emptyPromise(e?a.$ngfDataUrl:a.$ngfBlobUrl,a);var f=e?a.$$ngfDataUrlPromise:a.$$ngfBlobUrlPromise;if(f)return f;var g=c.defer();return b(function(){if(window.FileReader&&a&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 8")||a.size<2e4)&&(!window.FileAPI||-1===navigator.userAgent.indexOf("MSIE 9")||a.size<4e6)){var c=window.URL||window.webkitURL;if(c&&c.createObjectURL&&!e){var f;try{f=c.createObjectURL(a)}catch(h){return void b(function(){a.$ngfBlobUrl="",g.reject()})}b(function(){if(a.$ngfBlobUrl=f,f){g.resolve(f,a),d.blobUrls=d.blobUrls||[],d.blobUrlsTotalSize=d.blobUrlsTotalSize||0,d.blobUrls.push({url:f,size:a.size}),d.blobUrlsTotalSize+=a.size||0;for(var b=d.defaults.blobUrlsMaxMemory||268435456,e=d.defaults.blobUrlsMaxQueueSize||200;(d.blobUrlsTotalSize>b||d.blobUrls.length>e)&&d.blobUrls.length>1;){var h=d.blobUrls.splice(0,1)[0];c.revokeObjectURL(h.url),d.blobUrlsTotalSize-=h.size}}})}else{var i=new FileReader;i.onload=function(c){b(function(){a.$ngfDataUrl=c.target.result,g.resolve(c.target.result,a),b(function(){delete a.$ngfDataUrl},1e3)})},i.onerror=function(){b(function(){a.$ngfDataUrl="",g.reject()})},i.readAsDataURL(a)}}else b(function(){a[e?"$ngfDataUrl":"$ngfBlobUrl"]="",g.reject()})}),f=e?a.$$ngfDataUrlPromise=g.promise:a.$$ngfBlobUrlPromise=g.promise,f["finally"](function(){delete a[e?"$$ngfDataUrlPromise":"$$ngfBlobUrlPromise"]}),f},d}]),ngFileUpload.directive("ngfSrc",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfSrc",a.attrGetter("ngfResize",f,d),!1)}}}]),ngFileUpload.directive("ngfBackground",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){b(a,c,d,e,f,"ngfBackground",a.attrGetter("ngfResize",f,d),!0)}}}]),ngFileUpload.directive("ngfThumbnail",["Upload","$timeout",function(a,c){return{restrict:"AE",link:function(d,e,f){var g=a.attrGetter("ngfSize",f,d);b(a,c,d,e,f,"ngfThumbnail",g,a.attrGetter("ngfAsBackground",f,d))}}}]),ngFileUpload.config(["$compileProvider",function(a){a.imgSrcSanitizationWhitelist&&a.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/),a.aHrefSanitizationWhitelist&&a.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/)}]),ngFileUpload.filter("ngfDataUrl",["UploadDataUrl","$sce",function(a,b){return function(c,d,e){if(angular.isString(c))return b.trustAsResourceUrl(c);var f=c&&((d?c.$ngfDataUrl:c.$ngfBlobUrl)||c.$ngfDataUrl);return c&&!f?(!c.$ngfDataUrlFilterInProgress&&angular.isObject(c)&&(c.$ngfDataUrlFilterInProgress=!0,a.dataUrl(c,d)),""):(c&&delete c.$ngfDataUrlFilterInProgress,(c&&f?e?b.trustAsResourceUrl(f):f:c)||"")}}])}(),ngFileUpload.service("UploadValidate",["UploadDataUrl","$q","$timeout",function(a,b,c){function d(a){var b="",c=[];if(a.length>2&&"/"===a[0]&&"/"===a[a.length-1])b=a.substring(1,a.length-1);else{var e=a.split(",");if(e.length>1)for(var f=0;f<e.length;f++){var g=d(e[f]);g.regexp?(b+="("+g.regexp+")",f<e.length-1&&(b+="|")):c=c.concat(g.excludes)}else 0===a.indexOf("!")?c.push("^((?!"+d(a.substring(1)).regexp+").)*$"):(0===a.indexOf(".")&&(a="*"+a),b="^"+a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]","g"),"\\$&")+"$",b=b.replace(/\\\*/g,".*").replace(/\\\?/g,"."))}return{regexp:b,excludes:c}}function e(a,b){null==b||a.$dirty||(a.$setDirty?a.$setDirty():a.$dirty=!0)}var f=a;return f.validatePattern=function(a,b){if(!b)return!0;var c=d(b),e=!0;if(c.regexp&&c.regexp.length){var f=new RegExp(c.regexp,"i");e=null!=a.type&&f.test(a.type)||null!=a.name&&f.test(a.name)}for(var g=c.excludes.length;g--;){var h=new RegExp(c.excludes[g],"i");e=e&&(null==a.type||h.test(a.type))&&(null==a.name||h.test(a.name))}return e},f.ratioToFloat=function(a){var b=a.toString(),c=b.search(/[x:]/i);return b=c>-1?parseFloat(b.substring(0,c))/parseFloat(b.substring(c+1)):parseFloat(b)},f.registerModelChangeValidator=function(a,b,c){a&&a.$formatters.push(function(d){if(a.$dirty){var e=d;d&&!angular.isArray(d)&&(e=[d]),f.validate(e,0,a,b,c).then(function(){f.applyModelValidation(a,e)})}return d})},f.applyModelValidation=function(a,b){e(a,b),angular.forEach(a.$ngfValidations,function(b){a.$setValidity(b.name,b.valid)})},f.getValidationAttr=function(a,b,c,d,e){var g="ngf"+c[0].toUpperCase()+c.substr(1),h=f.attrGetter(g,a,b,{$file:e});if(null==h&&(h=f.attrGetter("ngfValidate",a,b,{$file:e}))){var i=(d||c).split(".");h=h[i[0]],i.length>1&&(h=h&&h[i[1]])}return h},f.validate=function(a,c,d,e,g){function h(b,c,h){if(a){for(var i=a.length,j=null;i--;){var n=a[i];if(n){var o=f.getValidationAttr(e,g,b,c,n);null!=o&&(h(n,o,i)||(-1===k.indexOf(b)?(n.$error=b,(n.$errorMessages=n.$errorMessages||{})[b]=!0,n.$errorParam=o,-1===m.indexOf(n)&&m.push(n),l||a.splice(i,1),j=!1):a.splice(i,1)))}}null!==j&&d.$ngfValidations.push({name:b,valid:j})}}function i(c,h,i,n,o){function p(b,d,e){function f(f){if(f())if(-1===k.indexOf(c)){if(d.$error=c,(d.$errorMessages=d.$errorMessages||{})[c]=!0,d.$errorParam=e,-1===m.indexOf(d)&&m.push(d),!l){var g=a.indexOf(d);g>-1&&a.splice(g,1)}b.resolve(!1)}else{var h=a.indexOf(d);h>-1&&a.splice(h,1),b.resolve(!0)}else b.resolve(!0)}null!=e?n(d,e).then(function(a){f(function(){return!o(a,e)})},function(){f(function(){return j("ngfValidateForce",{$file:d})})}):b.resolve(!0)}var q=[f.emptyPromise(!0)];a&&(a=void 0===a.length?[a]:a,angular.forEach(a,function(a){var d=b.defer();return q.push(d.promise),!i||null!=a.type&&0===a.type.search(i)?void("dimensions"===c&&null!=f.attrGetter("ngfDimensions",e)?f.imageDimensions(a).then(function(b){p(d,a,j("ngfDimensions",{$file:a,$width:b.width,$height:b.height}))},function(){d.resolve(!1)}):"duration"===c&&null!=f.attrGetter("ngfDuration",e)?f.mediaDuration(a).then(function(b){p(d,a,j("ngfDuration",{$file:a,$duration:b}))},function(){d.resolve(!1)}):p(d,a,f.getValidationAttr(e,g,c,h,a))):void d.resolve(!0)}));var r=b.defer();return b.all(q).then(function(a){for(var b=!0,e=0;e<a.length;e++)if(!a[e]){b=!1;break}d.$ngfValidations.push({name:c,valid:b}),r.resolve(b)}),r.promise}d=d||{},d.$ngfValidations=d.$ngfValidations||[],angular.forEach(d.$ngfValidations,function(a){a.valid=!0});var j=function(a,b){return f.attrGetter(a,e,g,b)},k=(f.attrGetter("ngfIgnoreInvalid",e,g)||"").split(" "),l=f.attrGetter("ngfRunAllValidations",e,g);if(null==a||0===a.length)return f.emptyPromise({validFiles:a,invalidFiles:[]});a=void 0===a.length?[a]:a.slice(0);var m=[];h("pattern",null,f.validatePattern),h("minSize","size.min",function(a,b){return a.size+.1>=f.translateScalars(b)}),h("maxSize","size.max",function(a,b){return a.size-.1<=f.translateScalars(b)});var n=0;if(h("maxTotalSize",null,function(b,c){return n+=b.size,n>f.translateScalars(c)?(a.splice(0,a.length),!1):!0}),h("validateFn",null,function(a,b){return b===!0||null===b||""===b}),!a.length)return f.emptyPromise({validFiles:[],invalidFiles:m});var o=b.defer(),p=[];return p.push(i("maxHeight","height.max",/image/,this.imageDimensions,function(a,b){return a.height<=b})),p.push(i("minHeight","height.min",/image/,this.imageDimensions,function(a,b){return a.height>=b})),p.push(i("maxWidth","width.max",/image/,this.imageDimensions,function(a,b){return a.width<=b})),p.push(i("minWidth","width.min",/image/,this.imageDimensions,function(a,b){return a.width>=b})),p.push(i("dimensions",null,/image/,function(a,b){return f.emptyPromise(b)},function(a){return a})),p.push(i("ratio",null,/image/,this.imageDimensions,function(a,b){for(var c=b.toString().split(","),d=!1,e=0;e<c.length;e++)Math.abs(a.width/a.height-f.ratioToFloat(c[e]))<.01&&(d=!0);return d})),p.push(i("maxRatio","ratio.max",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)<1e-4})),p.push(i("minRatio","ratio.min",/image/,this.imageDimensions,function(a,b){return a.width/a.height-f.ratioToFloat(b)>-1e-4})),p.push(i("maxDuration","duration.max",/audio|video/,this.mediaDuration,function(a,b){return a<=f.translateScalars(b)})),p.push(i("minDuration","duration.min",/audio|video/,this.mediaDuration,function(a,b){return a>=f.translateScalars(b)})),p.push(i("duration",null,/audio|video/,function(a,b){return f.emptyPromise(b)},function(a){return a})),p.push(i("validateAsyncFn",null,null,function(a,b){return b},function(a){return a===!0||null===a||""===a})),b.all(p).then(function(){if(l)for(var b=0;b<a.length;b++){var d=a[b];d.$error&&a.splice(b--,1)}l=!1,h("maxFiles",null,function(a,b,d){return b>c+d}),o.resolve({validFiles:a,invalidFiles:m})}),o.promise},f.imageDimensions=function(a){if(a.$ngfWidth&&a.$ngfHeight){var d=b.defer();return c(function(){d.resolve({width:a.$ngfWidth,height:a.$ngfHeight})}),d.promise}if(a.$ngfDimensionPromise)return a.$ngfDimensionPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("image")?void e.reject("not image"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].naturalWidth||h[0].clientWidth,c=h[0].naturalHeight||h[0].clientHeight;h.remove(),a.$ngfWidth=b,a.$ngfHeight=c,e.resolve({width:b,height:c})}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].clientWidth?d():i++>10?f():g())},1e3)}var h=angular.element("<img>").attr("src",b).css("visibility","hidden").css("position","fixed").css("max-width","none !important").css("max-height","none !important");h.on("load",d),h.on("error",f);var i=0;g(),angular.element(document.getElementsByTagName("body")[0]).append(h)},function(){e.reject("load error")})}),a.$ngfDimensionPromise=e.promise,a.$ngfDimensionPromise["finally"](function(){delete a.$ngfDimensionPromise}),a.$ngfDimensionPromise},f.mediaDuration=function(a){if(a.$ngfDuration){var d=b.defer();return c(function(){d.resolve(a.$ngfDuration)}),d.promise}if(a.$ngfDurationPromise)return a.$ngfDurationPromise;var e=b.defer();return c(function(){return 0!==a.type.indexOf("audio")&&0!==a.type.indexOf("video")?void e.reject("not media"):void f.dataUrl(a).then(function(b){function d(){var b=h[0].duration;a.$ngfDuration=b,h.remove(),e.resolve(b)}function f(){h.remove(),e.reject("load error")}function g(){c(function(){h[0].parentNode&&(h[0].duration?d():i>10?f():g())},1e3)}var h=angular.element(0===a.type.indexOf("audio")?"<audio>":"<video>").attr("src",b).css("visibility","none").css("position","fixed");h.on("loadedmetadata",d),h.on("error",f);var i=0;g(),angular.element(document.body).append(h)},function(){e.reject("load error")})}),a.$ngfDurationPromise=e.promise,a.$ngfDurationPromise["finally"](function(){delete a.$ngfDurationPromise}),a.$ngfDurationPromise},f}]),ngFileUpload.service("UploadResize",["UploadValidate","$q",function(a,b){var c=a,d=function(a,b,c,d,e){var f=e?Math.max(c/a,d/b):Math.min(c/a,d/b);return{width:a*f,height:b*f,marginX:a*f-c,marginY:b*f-d}},e=function(a,e,f,g,h,i,j,k){var l=b.defer(),m=document.createElement("canvas"),n=document.createElement("img");return n.setAttribute("style","visibility:hidden;position:fixed;z-index:-100000"),document.body.appendChild(n),n.onload=function(){var a=n.width,b=n.height;if(n.parentNode.removeChild(n),null!=k&&k(a,b)===!1)return void l.reject("resizeIf");try{if(i){var o=c.ratioToFloat(i),p=a/b;o>p?(e=a,f=e/o):(f=b,e=f*o)}e||(e=a),f||(f=b);var q=d(a,b,e,f,j);m.width=Math.min(q.width,e),m.height=Math.min(q.height,f);var r=m.getContext("2d");r.drawImage(n,Math.min(0,-q.marginX/2),Math.min(0,-q.marginY/2),q.width,q.height),l.resolve(m.toDataURL(h||"image/WebP",g||.934))}catch(s){l.reject(s)}},n.onerror=function(){n.parentNode.removeChild(n),l.reject()},n.src=a,l.promise};return c.dataUrltoBlob=function(a,b,c){for(var d=a.split(","),e=d[0].match(/:(.*?);/)[1],f=atob(d[1]),g=f.length,h=new Uint8Array(g);g--;)h[g]=f.charCodeAt(g);var i=new window.Blob([h],{type:e});return i.name=b,i.$ngfOrigSize=c,i},c.isResizeSupported=function(){var a=document.createElement("canvas");return window.atob&&a.getContext&&a.getContext("2d")&&window.Blob},c.isResizeSupported()&&Object.defineProperty(window.Blob.prototype,"name",{get:function(){return this.$ngfName},set:function(a){this.$ngfName=a},configurable:!0}),c.resize=function(a,d){if(0!==a.type.indexOf("image"))return c.emptyPromise(a);var f=b.defer();return c.dataUrl(a,!0).then(function(b){e(b,d.width,d.height,d.quality,d.type||a.type,d.ratio,d.centerCrop,d.resizeIf).then(function(e){if("image/jpeg"===a.type&&d.restoreExif!==!1)try{e=c.restoreExif(b,e)}catch(g){setTimeout(function(){throw g},1)}try{var h=c.dataUrltoBlob(e,a.name,a.size);f.resolve(h)}catch(g){f.reject(g)}},function(b){"resizeIf"===b&&f.resolve(a),f.reject(b)})},function(a){f.reject(a)}),f.promise},c}]),function(){function a(a,c,d,e,f,g,h,i,j,k){function l(){return c.attr("disabled")||s("ngfDropDisabled",a)}function m(b,c,d){if(b){var e;try{e=b&&b.getData&&b.getData("text/html")}catch(f){}q(b.items,b.files,s("ngfAllowDir",a)!==!1,s("multiple")||s("ngfMultiple",a)).then(function(a){a.length?n(a,c):o(d,e).then(function(a){n(a,c)})})}}function n(b,c){i.updateModel(e,d,a,s("ngfChange")||s("ngfDrop"),b,c)}function o(b,c){if(!i.shouldUpdateOn(b,d,a)||"string"!=typeof c)return i.rejectPromise([]);var e=[];c.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi,function(a,b,c){e.push(c)});var f=[],g=[];if(e.length){angular.forEach(e,function(a){f.push(i.urlToBlob(a).then(function(a){g.push(a)}))});var h=k.defer();return k.all(f).then(function(){h.resolve(g)},function(a){h.reject(a)}),h.promise}return i.emptyPromise()}function p(a,b,c,d){var e=s("ngfDragOverClass",a,{$event:c}),f="dragover";if(angular.isString(e))f=e;else if(e&&(e.delay&&(w=e.delay),e.accept||e.reject)){var g=c.dataTransfer.items;if(null!=g&&g.length)for(var h=e.pattern||s("ngfPattern",a,{$event:c}),j=g.length;j--;){if(!i.validatePattern(g[j],h)){f=e.reject;break}f=e.accept}else f=e.accept}d(f)}function q(b,c,e,f){function g(a,b){var c=k.defer();if(null!=a)if(a.isDirectory){var d=[i.emptyPromise()];if(m){var e={type:"directory"};e.name=e.path=(b||"")+a.name,n.push(e)}var f=a.createReader(),h=[],p=function(){f.readEntries(function(e){try{e.length?(h=h.concat(Array.prototype.slice.call(e||[],0)),p()):(angular.forEach(h.slice(0),function(c){n.length<=j&&l>=o&&d.push(g(c,(b?b:"")+a.name+"/"))}),k.all(d).then(function(){c.resolve()},function(a){c.reject(a)}))}catch(f){c.reject(f)}},function(a){c.reject(a)})};p()}else a.file(function(a){try{a.path=(b?b:"")+a.name,m&&(a=i.rename(a,a.path)),n.push(a),o+=a.size,c.resolve()}catch(d){c.reject(d)}},function(a){c.reject(a)});return c.promise}var j=i.getValidationAttr(d,a,"maxFiles");null==j&&(j=Number.MAX_VALUE);var l=i.getValidationAttr(d,a,"maxTotalSize");null==l&&(l=Number.MAX_VALUE);var m=s("ngfIncludeDir",a),n=[],o=0,p=[i.emptyPromise()];if(b&&b.length>0&&"file:"!==h.location.protocol)for(var q=0;q<b.length;q++){if(b[q].webkitGetAsEntry&&b[q].webkitGetAsEntry()&&b[q].webkitGetAsEntry().isDirectory){var r=b[q].webkitGetAsEntry();if(r.isDirectory&&!e)continue;null!=r&&p.push(g(r))}else{var t=b[q].getAsFile();null!=t&&(n.push(t),o+=t.size)}if(n.length>j||o>l||!f&&n.length>0)break}else if(null!=c)for(var u=0;u<c.length;u++){var v=c.item(u);if((v.type||v.size>0)&&(n.push(v),o+=v.size),n.length>j||o>l||!f&&n.length>0)break}var w=k.defer();return k.all(p).then(function(){if(f||m||!n.length)w.resolve(n);else{for(var a=0;n[a]&&"directory"===n[a].type;)a++;w.resolve([n[a]])}},function(a){w.reject(a)}),w.promise}var r=b(),s=function(a,b,c){return i.attrGetter(a,d,b,c)};if(s("dropAvailable")&&g(function(){a[s("dropAvailable")]?a[s("dropAvailable")].value=r:a[s("dropAvailable")]=r}),!r)return void(s("ngfHideOnDropNotAvailable",a)===!0&&c.css("display","none"));null==s("ngfSelect")&&i.registerModelChangeValidator(e,d,a);var t,u=null,v=f(s("ngfStopPropagation")),w=1;c[0].addEventListener("dragover",function(b){if(!l()&&i.shouldUpdateOn("drop",d,a)){if(b.preventDefault(),v(a)&&b.stopPropagation(),navigator.userAgent.indexOf("Chrome")>-1){var e=b.dataTransfer.effectAllowed;b.dataTransfer.dropEffect="move"===e||"linkMove"===e?"move":"copy"}g.cancel(u),t||(t="C",p(a,d,b,function(d){t=d,c.addClass(t),s("ngfDrag",a,{$isDragging:!0,$class:t,$event:b})}))}},!1),c[0].addEventListener("dragenter",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),v(a)&&b.stopPropagation())},!1),c[0].addEventListener("dragleave",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),
v(a)&&b.stopPropagation(),u=g(function(){t&&c.removeClass(t),t=null,s("ngfDrag",a,{$isDragging:!1,$event:b})},w||100))},!1),c[0].addEventListener("drop",function(b){!l()&&i.shouldUpdateOn("drop",d,a)&&(b.preventDefault(),v(a)&&b.stopPropagation(),t&&c.removeClass(t),t=null,m(b.dataTransfer,b,"dropUrl"))},!1),c[0].addEventListener("paste",function(b){navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&s("ngfEnableFirefoxPaste",a)&&b.preventDefault(),!l()&&i.shouldUpdateOn("paste",d,a)&&m(b.clipboardData||b.originalEvent.clipboardData,b,"pasteUrl")},!1),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&s("ngfEnableFirefoxPaste",a)&&(c.attr("contenteditable",!0),c.on("keypress",function(a){a.metaKey||a.ctrlKey||a.preventDefault()}))}function b(){var a=document.createElement("div");return"draggable"in a&&"ondrop"in a&&!/Edge\/12./i.test(navigator.userAgent)}ngFileUpload.directive("ngfDrop",["$parse","$timeout","$window","Upload","$http","$q",function(b,c,d,e,f,g){return{restrict:"AEC",require:"?ngModel",link:function(h,i,j,k){a(h,i,j,k,b,c,d,e,f,g)}}}]),ngFileUpload.directive("ngfNoFileDrop",function(){return function(a,c){b()&&c.css("display","none")}}),ngFileUpload.directive("ngfDropAvailable",["$parse","$timeout","Upload",function(a,c,d){return function(e,f,g){if(b()){var h=a(d.attrGetter("ngfDropAvailable",g));c(function(){h(e),h.assign&&h.assign(e,!0)})}}}])}(),ngFileUpload.service("UploadExif",["UploadResize","$q",function(a,b){function c(a,b,c,d){switch(b){case 2:return a.transform(-1,0,0,1,c,0);case 3:return a.transform(-1,0,0,-1,c,d);case 4:return a.transform(1,0,0,-1,0,d);case 5:return a.transform(0,1,1,0,0,0);case 6:return a.transform(0,1,-1,0,d,0);case 7:return a.transform(0,-1,-1,0,d,c);case 8:return a.transform(0,-1,1,0,0,c)}}function d(a){for(var b="",c=new Uint8Array(a),d=c.byteLength,e=0;d>e;e++)b+=String.fromCharCode(c[e]);return window.btoa(b)}var e=a;return e.isExifSupported=function(){return window.FileReader&&(new FileReader).readAsArrayBuffer&&e.isResizeSupported()},e.readOrientation=function(a){var c=b.defer(),d=new FileReader,e=a.slice?a.slice(0,65536):a;return d.readAsArrayBuffer(e),d.onerror=function(a){return c.reject(a)},d.onload=function(a){var b={orientation:1},d=new DataView(this.result);if(65496!==d.getUint16(0,!1))return c.resolve(b);for(var e=d.byteLength,f=2;e>f;){var g=d.getUint16(f,!1);if(f+=2,65505===g){if(1165519206!==d.getUint32(f+=2,!1))return c.resolve(b);var h=18761===d.getUint16(f+=6,!1);f+=d.getUint32(f+4,h);var i=d.getUint16(f,h);f+=2;for(var j=0;i>j;j++)if(274===d.getUint16(f+12*j,h)){var k=d.getUint16(f+12*j+8,h);return k>=2&&8>=k&&(d.setUint16(f+12*j+8,1,h),b.fixedArrayBuffer=a.target.result),b.orientation=k,c.resolve(b)}}else{if(65280!==(65280&g))break;f+=d.getUint16(f,!1)}}return c.resolve(b)},c.promise},e.applyExifRotation=function(a){if(0!==a.type.indexOf("image/jpeg"))return e.emptyPromise(a);var f=b.defer();return e.readOrientation(a).then(function(b){return b.orientation<2||b.orientation>8?f.resolve(a):void e.dataUrl(a,!0).then(function(g){var h=document.createElement("canvas"),i=document.createElement("img");i.onload=function(){try{h.width=b.orientation>4?i.height:i.width,h.height=b.orientation>4?i.width:i.height;var g=h.getContext("2d");c(g,b.orientation,i.width,i.height),g.drawImage(i,0,0);var j=h.toDataURL(a.type||"image/WebP",.934);j=e.restoreExif(d(b.fixedArrayBuffer),j);var k=e.dataUrltoBlob(j,a.name);f.resolve(k)}catch(l){return f.reject(l)}},i.onerror=function(){f.reject()},i.src=g},function(a){f.reject(a)})},function(a){f.reject(a)}),f.promise},e.restoreExif=function(a,b){var c={};return c.KEY_STR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c.encode64=function(a){var b,c,d,e,f,g="",h="",i="",j=0;do b=a[j++],c=a[j++],h=a[j++],d=b>>2,e=(3&b)<<4|c>>4,f=(15&c)<<2|h>>6,i=63&h,isNaN(c)?f=i=64:isNaN(h)&&(i=64),g=g+this.KEY_STR.charAt(d)+this.KEY_STR.charAt(e)+this.KEY_STR.charAt(f)+this.KEY_STR.charAt(i),b=c=h="",d=e=f=i="";while(j<a.length);return g},c.restore=function(a,b){a.match("data:image/jpeg;base64,")&&(a=a.replace("data:image/jpeg;base64,",""));var c=this.decode64(a),d=this.slice2Segments(c),e=this.exifManipulation(b,d);return"data:image/jpeg;base64,"+this.encode64(e)},c.exifManipulation=function(a,b){var c=this.getExifArray(b),d=this.insertExif(a,c);return new Uint8Array(d)},c.getExifArray=function(a){for(var b,c=0;c<a.length;c++)if(b=a[c],255===b[0]&225===b[1])return b;return[]},c.insertExif=function(a,b){var c=a.replace("data:image/jpeg;base64,",""),d=this.decode64(c),e=d.indexOf(255,3),f=d.slice(0,e),g=d.slice(e),h=f;return h=h.concat(b),h=h.concat(g)},c.slice2Segments=function(a){for(var b=0,c=[];;){if(255===a[b]&218===a[b+1])break;if(255===a[b]&216===a[b+1])b+=2;else{var d=256*a[b+2]+a[b+3],e=b+d+2,f=a.slice(b,e);c.push(f),b=e}if(b>a.length)break}return c},c.decode64=function(a){var b,c,d,e,f,g="",h="",i=0,j=[],k=/[^A-Za-z0-9\+\/\=]/g;k.exec(a)&&console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."),a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");do d=this.KEY_STR.indexOf(a.charAt(i++)),e=this.KEY_STR.indexOf(a.charAt(i++)),f=this.KEY_STR.indexOf(a.charAt(i++)),h=this.KEY_STR.indexOf(a.charAt(i++)),b=d<<2|e>>4,c=(15&e)<<4|f>>2,g=(3&f)<<6|h,j.push(b),64!==f&&j.push(c),64!==h&&j.push(g),b=c=g="",d=e=f=h="";while(i<a.length);return j},c.restore(a,b)},e}]);
var duScrollDefaultEasing=function(e){"use strict";return.5>e?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},duScroll=angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing).value("duScrollCancelOnEvents","scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy",!1).value("duScrollActiveClass","active");"undefined"!=typeof module&&module&&module.exports&&(module.exports=duScroll),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset","duScrollCancelOnEvents",function(e,t,n,r,o,l,u,c){"use strict";var i={},a=function(e){return"undefined"!=typeof HTMLDocument&&e instanceof HTMLDocument||e.nodeType&&e.nodeType===e.DOCUMENT_NODE},s=function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement||e.nodeType&&e.nodeType===e.ELEMENT_NODE},d=function(e){return s(e)||a(e)?e:e[0]};i.duScrollTo=function(t,n,r,o){var l;if(angular.isElement(t)?l=this.duScrollToElement:angular.isDefined(r)&&(l=this.duScrollToAnimated),l)return l.apply(this,arguments);var u=d(this);return a(u)?e.scrollTo(t,n):(u.scrollLeft=t,void(u.scrollTop=n))};var f,m;i.duScrollToAnimated=function(e,l,u,i){u&&!i&&(i=o);var a=this.duScrollLeft(),s=this.duScrollTop(),d=Math.round(e-a),p=Math.round(l-s),S=null,g=0,v=this,h=function(e){(!e||g&&e.which>0)&&(c&&v.unbind(c,h),n(f),m.reject(),f=null)};if(f&&h(),m=t.defer(),0===u||!d&&!p)return 0===u&&v.duScrollTo(e,l),m.resolve(),m.promise;var y=function(e){null===S&&(S=e),g=e-S;var t=g>=u?1:i(g/u);v.scrollTo(a+Math.ceil(d*t),s+Math.ceil(p*t)),1>t?f=r(y):(c&&v.unbind(c,h),f=null,m.resolve())};return v.duScrollTo(a,s),c&&v.bind(c,h),f=r(y),m.promise},i.duScrollToElement=function(e,t,n,r){var o=d(this);(!angular.isNumber(t)||isNaN(t))&&(t=u);var l=this.duScrollTop()+d(e).getBoundingClientRect().top-t;return s(o)&&(l-=o.getBoundingClientRect().top),this.duScrollTo(0,l,n,r)},i.duScrollLeft=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(t,this.duScrollTop(),n,r);var o=d(this);return a(o)?e.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:o.scrollLeft},i.duScrollTop=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(this.duScrollLeft(),t,n,r);var o=d(this);return a(o)?e.scrollY||document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop},i.duScrollToElementAnimated=function(e,t,n,r){return this.duScrollToElement(e,t,n||l,r)},i.duScrollTopAnimated=function(e,t,n){return this.duScrollTop(e,t||l,n)},i.duScrollLeftAnimated=function(e,t,n){return this.duScrollLeft(e,t||l,n)},angular.forEach(i,function(e,t){angular.element.prototype[t]=e;var n=t.replace(/^duScroll/,"scroll");angular.isUndefined(angular.element.prototype[n])&&(angular.element.prototype[n]=e)})}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(e){"use strict";var t=["webkit","moz","o","ms"];return function(n,r){if(e[n])return e[n];for(var o,l=n.substr(0,1).toUpperCase()+n.substr(1),u=0;u<t.length;u++)if(o=t[u]+l,e[o])return e[o];return r}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=0,r=function(e,r){var o=(new Date).getTime(),l=Math.max(0,16-(o-n)),u=t(function(){e(o+l)},l);return n=o+l,u};return e("requestAnimationFrame",r)}]).factory("cancelAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=function(e){t.cancel(e)};return e("cancelAnimationFrame",n)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","$window","$document","scrollContainerAPI","duScrollGreedy","duScrollSpyWait","duScrollBottomSpy","duScrollActiveClass",function(e,t,n,r,o,l,u,c,i){"use strict";var a=function(o){var a=!1,s=!1,d=function(){s=!1;var t,u=o.container,a=u[0],d=0;if("undefined"!=typeof HTMLElement&&a instanceof HTMLElement||a.nodeType&&a.nodeType===a.ELEMENT_NODE)d=a.getBoundingClientRect().top,t=Math.round(a.scrollTop+a.clientHeight)>=a.scrollHeight;else{var f=r[0].body.scrollHeight||r[0].documentElement.scrollHeight;t=Math.round(n.pageYOffset+n.innerHeight)>=f}var m,p,S,g,v,h,y=c&&t?"bottom":"top";for(g=o.spies,p=o.currentlyActive,S=void 0,m=0;m<g.length;m++)v=g[m],h=v.getTargetPosition(),h&&(c&&t||h.top+v.offset-d<20&&(l||-1*h.top+d)<h.height)&&(!S||S[y]<h[y])&&(S={spy:v},S[y]=h[y]);S&&(S=S.spy),p===S||l&&!S||(p&&(p.$element.removeClass(i),e.$broadcast("duScrollspy:becameInactive",p.$element,angular.element(p.getTargetElement()))),S&&(S.$element.addClass(i),e.$broadcast("duScrollspy:becameActive",S.$element,angular.element(S.getTargetElement()))),o.currentlyActive=S)};return u?function(){a?s=!0:(d(),a=t(function(){a=!1,s&&d()},u,!1))}:d},s={},d=function(e){var t=e.$id,n={spies:[]};return n.handler=a(n),s[t]=n,e.$on("$destroy",function(){f(e)}),t},f=function(e){var t=e.$id,n=s[t],r=n.container;r&&r.off("scroll",n.handler),delete s[t]},m=d(e),p=function(e){return s[e.$id]?s[e.$id]:e.$parent?p(e.$parent):s[m]},S=function(e){var t,n,r=e.$scope;if(r)return p(r);for(n in s)if(t=s[n],-1!==t.spies.indexOf(e))return t},g=function(e){for(;e.parentNode;)if(e=e.parentNode,e===document)return!0;return!1},v=function(e){var t=S(e);t&&(t.spies.push(e),t.container&&g(t.container)||(t.container&&t.container.off("scroll",t.handler),t.container=o.getContainer(e.$scope),t.container.on("scroll",t.handler).triggerHandler("scroll")))},h=function(t){var n=S(t);t===n.currentlyActive&&(e.$broadcast("duScrollspy:becameInactive",n.currentlyActive.$element),n.currentlyActive=null);var r=n.spies.indexOf(t);-1!==r&&n.spies.splice(r,1),t.$element=null};return{addSpy:v,removeSpy:h,createContext:d,destroyContext:f,getContextForScope:p}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(e){"use strict";var t={},n=function(e,n){var r=e.$id;return t[r]=n,r},r=function(e){return t[e.$id]?e.$id:e.$parent?r(e.$parent):void 0},o=function(n){var o=r(n);return o?t[o]:e},l=function(e){var n=r(e);n&&delete t[n]};return{getContainerId:r,getContainer:o,setContainer:n,removeContainer:l}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(e,t,n){"use strict";return{link:function(r,o,l){o.on("click",function(o){if(l.href&&-1!==l.href.indexOf("#")||""!==l.duSmoothScroll){var u=l.href?l.href.replace(/.*(?=#[^\s]+$)/,"").substring(1):l.duSmoothScroll,c=document.getElementById(u)||document.getElementsByName(u)[0];if(c&&c.getBoundingClientRect){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault();var i=l.offset?parseInt(l.offset,10):t,a=l.duration?parseInt(l.duration,10):e,s=n.getContainer(r);s.duScrollToElement(angular.element(c),isNaN(i)?0:i,isNaN(a)?0:a)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){e.createContext(t)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){r.$observe("duScrollContainer",function(r){angular.isString(r)&&(r=document.getElementById(r)),r=angular.isElement(r)?angular.element(r):n,e.setContainer(t,r),t.$on("$destroy",function(){e.removeContainer(t)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(e,t,n,r){"use strict";var o=function(e,t,n,r){angular.isElement(e)?this.target=e:angular.isString(e)&&(this.targetId=e),this.$scope=t,this.$element=n,this.offset=r};return o.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)||document.getElementsByName(this.targetId)[0]),this.target},o.prototype.getTargetPosition=function(){var e=this.getTargetElement();return e?e.getBoundingClientRect():void 0},o.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(l,u,c){var i,a=c.ngHref||c.href;if(a&&-1!==a.indexOf("#")?i=a.replace(/.*(?=#[^\s]+$)/,"").substring(1):c.duScrollspy?i=c.duScrollspy:c.duSmoothScroll&&(i=c.duSmoothScroll),i){var s=n(function(){var n=new o(i,l,u,-(c.offset?parseInt(c.offset,10):t));e.addSpy(n),l.$on("$locationChangeSuccess",n.flushTargetCache.bind(n));var a=r.$on("$stateChangeSuccess",n.flushTargetCache.bind(n));l.$on("$destroy",function(){e.removeSpy(n),a()})},0,!1);l.$on("$destroy",function(){n.cancel(s)})}}}}]);
//# sourceMappingURL=angular-scroll.min.js.map

//
// angular-file-model
// ==================
//
// Directive that makes the inputs with type `file` to be
// available in the `$scope` and be assigned to a model.
//
(function () {
  'use strict';

  angular.module('file-model', [])

  .directive('fileModel', [
    '$parse',
    function ($parse) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;

          element.bind('change', function(){
            scope.$apply(function(){
              if (attrs.multiple) {
                modelSetter(scope, element[0].files);
              }
              else {
                modelSetter(scope, element[0].files[0]);
              }
            });
          });
        }
      };
    }
  ]);

})();

/*! angular-base64-upload - v0.1.19
* https://github.com/adonespitogo/angular-base64-upload
* Copyright (c) Adones Pitogo <pitogo.adones@gmail.com> [March 13, 2016]
* Licensed MIT */

!function(a,b){"use strict";a._arrayBufferToBase64=function(b){for(var c="",d=new Uint8Array(b),e=d.byteLength,f=0;e>f;f++)c+=String.fromCharCode(d[f]);return a.btoa(c)};var c=a.angular.module("naif.base64",[]);c.directive("baseSixtyFourInput",["$window","$q",function(a,b){for(var c={onChange:"&",onAfterValidate:"&",parser:"&"},d=["onabort","onerror","onloadstart","onloadend","onprogress","onload"],e=d.length-1;e>=0;e--){var f=d[e];c[f]="&"}return{restrict:"A",require:"ngModel",scope:c,link:function(c,e,f,g){function h(){for(var c=t.length-1;c>=0;c--){var d=new a.FileReader,e=t[c],f={},g=[];f.filetype=e.type,f.filename=e.name,f.filesize=e.size,t[c].deferredObj=b.defer(),g.push(t[c].deferredObj.promise),b.all(g).then(n),k(d,e,f),d.readAsArrayBuffer(e)}}function i(a){f.onChange&&c.onChange()(a,t)}function j(a){if(f.onAfterValidate){for(var d=[],e=t.length-1;e>=0;e--)d.push(t[e].deferredObj.promise);b.all(d).then(function(){c.onAfterValidate()(a,u,t)})}}function k(a,b,e){for(var g=d.length-1;g>=0;g--){var h=d[g];f[h]&&"onload"!==h&&l(h,c[h],a,b,e)}a.onload=m(a,b,e)}function l(a,b,c,d,e){c[a]=function(a){b()(a,c,d,t,u,e)}}function m(d,e,g){return function(h){var i,j=h.target.result;g.base64=a._arrayBufferToBase64(j),i=f.parser?b.when(c.parser()(e,g)):b.when(g),i.then(function(a){u.push(a),e.deferredObj.resolve()}),f.onload&&c.onload()(h,d,e,t,u,g)}}function n(){var a=f.multiple?u:u[0];g.$setViewValue(a),q(a),r(a),o(a),p(a),s(a)}function o(a){if(f.maxnum&&f.multiple&&a){var b=a.length<=parseInt(f.maxnum);g.$setValidity("maxnum",b)}return a}function p(a){if(f.minnum&&f.multiple&&a){var b=a.length>=parseInt(f.minnum);g.$setValidity("minnum",b)}return a}function q(a){var b=!0;if(f.maxsize&&a){var c=1e3*parseFloat(f.maxsize);if(f.multiple)for(var d=0;d<a.length;d++){var e=a[d];if(e.filesize>c){b=!1;break}}else b=a.filesize<=c;g.$setValidity("maxsize",b)}return a}function r(a){var b=!0,c=1e3*parseFloat(f.minsize);if(f.minsize&&a){if(f.multiple)for(var d=0;d<a.length;d++){var e=a[d];if(e.filesize<c){b=!1;break}}else b=a.filesize>=c;g.$setValidity("minsize",b)}return a}function s(a){var b,c,d,e=!0;if(f.accept&&(c=f.accept.trim().replace(/[,\s]+/gi,"|").replace(/\./g,"\\.").replace(/\/\*/g,"/.*"),b=new RegExp(c)),f.accept&&a){if(f.multiple)for(var h=0;h<a.length;h++){var i=a[h];if(d="."+i.filename.split(".").pop(),e=b.test(i.filetype)||b.test(d),!e)break}else d="."+a.filename.split(".").pop(),e=b.test(a.filetype)||b.test(d);g.$setValidity("accept",e)}return a}if(g){var t=[],u=[];e.on("change",function(a){a.target.files.length&&(u=[],u=angular.copy(u),t=a.target.files,h(),i(a),j(a))}),g.$isEmpty=function(a){return!a||(angular.isArray(a)?0===a.length:!a.base64)},c._clearInput=function(){e[0].value=""},c.$watch(function(){return g.$viewValue},function(a,b){g.$isEmpty(b)||g.$isEmpty(a)&&c._clearInput()})}}}}])}(window);
//# sourceMappingURL=angular-base64-upload.min.js.map
(function() {
    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',

        /* Features */
        'app.auth',
        'app.helpers',
        'app.brands',
        'app.deals',
        'app.users'
    ]);
})();
(function() {
    'use strict';

    angular.module('app')
        .constant('CONST', {
            api_domain: angular.injector(['ng']).get('$window').__env.apiUrl,
            env: angular.injector(['ng']).get('$window').__env
        });

})();
(function() {
    'use strict';
    var env = {};

    // Import variables if present (from env.js)
    if (window) {
        Object.assign(env, window.__env);
    }
})();

(function() {
    'use strict';

    angular.module('app.core', [
        'ngResource',
        'ui.router',
        'ng-token-auth',
        'jcs-autoValidate',
        'ngProgressLite',
        'angular-ladda',
        'ngFileUpload',
        'file-model',
        'naif.base64'
    ]);

})();

(function() {
    'use strict';

    angular.module('app')
        .config(config)
        .run(run);

    config.$inject = ['$authProvider', '$resourceProvider', '$httpProvider', 'CONST', 'laddaProvider', '$logProvider'];

    /* @ngInject */
    function config($authProvider, $resourceProvider, $httpProvider, CONST, laddaProvider, $logProvider) {
        //Layout.init();
        $logProvider.debugEnabled(CONST.env.enableDebug);
        console.log("Run from ", CONST.api_domain);
        $authProvider.configure({
            apiUrl:                  CONST.api_domain,
            handleLoginResponse: function(response) {
                return response.user;
            },
            handleTokenValidationResponse: function(response) {
                return response.user;
            }
        });

        $resourceProvider.defaults.stripTrailingSlashes = false;
        laddaProvider.setOption({
            style: 'expand-right'
        });

    }

    run.$inject = ['$rootScope', '$state', 'AuthService', 'ngProgressLite', 'BreadCrumbService', '$location', '$window'];
    /* @ngInject */
    function run($rootScope, $state, AuthService, ngProgressLite, BreadCrumbService, $location, $window) {

        $rootScope.notLoggedInOnStart = !AuthService.tokenExists();

        var forceSSL = forceSSL;

        $rootScope.$on('$stateChangeStart', function(event, toState) {

            var __page_url = $location.absUrl();
            var __is_local = ((__page_url.indexOf('localhost') > -1) ||
                (__page_url.indexOf('127.0.0.1') > -1));
            if (!__is_local)
                forceSSL(event);

            var stateName = toState.name;

            ngProgressLite.start();

            if (toState.name === 'logout') {
                if (!$rootScope.currentUser) {
                    event.preventDefault();
                    $state.go('auth');
                    stateName = 'auth';
                    ngProgressLite.done();
                }
            } else if (toState.name === 'forgot') {
                if ($rootScope.currentUser) {
                    event.preventDefault();
                    $state.go('dashboard');
                    stateName = 'dashboard';
                    ngProgressLite.done();
                }
            } else if (toState.name === 'account-confirmation') {
                if ($rootScope.currentUser) {
                    event.preventDefault();
                    $state.go('dashboard');
                    stateName = 'dashboard';
                    ngProgressLite.done();   
                }
            } else {
                if ($rootScope.currentUser) {
                    if (toState.name === 'auth') {
                        event.preventDefault();
                        $state.go('dashboard');
                        stateName = 'dashboard';
                        ngProgressLite.done();
                    }
                } else {
                    if (toState.name !== 'auth') {
                        event.preventDefault();
                        $state.go('auth');
                        stateName = 'auth';
                        ngProgressLite.done();
                    }
                }
            }

            BreadCrumbService.set(stateName);
            $rootScope.crumbs = BreadCrumbService.getCrumbs();
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            ngProgressLite.done();
        });

        $rootScope.$on('$stateChangeError', function(event, toState) {
            ngProgressLite.done();
        });

        $rootScope.$on('auth:login-success', function(event, user) {
            // if not vendor, logout
            if (!user.is_vendor) {
                AuthService.logout().then(function(resp) {
                }).catch(function(error) {
                });
                $rootScope.currentUser = null;
                $rootScope.loginError = 'You are not authorized to access vendor pages.';
                return;
            }

            $rootScope.currentUser = user;
            $rootScope.notLoggedInOnStart = true;
            $state.go('dashboard');
        });

        $rootScope.$on('auth:login-error', function(event, error) {
            $rootScope.loginError = error.errors[0];
            $rootScope.currentUser = null;
        });

        $rootScope.$on('auth:validation-success', function(event, user) {
            $rootScope.currentUser = user;
            $rootScope.notLoggedInOnStart = true;
            $state.go('dashboard');
        });

        $rootScope.$on('auth:validation-error', function(event, error) {
            $rootScope.currentUser = null;
            // validation error, go to login page
            $rootScope.notLoggedInOnStart = true;
            $state.go('auth');
        });

        $rootScope.$on('auth:logout-success', function(event) {
            $rootScope.currentUser = null;
            $state.go('auth');
        });

        $rootScope.$on('auth:logout-error', function(event, error) {
            // force logout anyways
            $rootScope.currentUser = null;
            AuthService.invalidateTokens();
            $state.go('auth');
        });

        $rootScope.$on('auth:session-expired', function(event) {
            $rootScope.currentUser = null;
            // invalidate token
            AuthService.invalidateTokens();
            $rootScope.loginError = 'Session expired!';
            $rootScope.notLoggedInOnStart = true;
            $state.go('auth');
        });


        /////////Methods Definitions///////////

        //Force redirect to https protocol
        function forceSSL(event) {
            if ($location.protocol() !== 'https') {
                event.preventDefault();
                $window.location.href = $location.absUrl().replace('http', 'https');
                return false;
            }
        };
    }
})();

(function() {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /login
        $urlRouterProvider.otherwise("/");

        //////STATES//////

        var auth = {
            name: "auth",
            url: "/",
            views: {
                "login": {
                    templateUrl: "./app/login/login.html",
                    controller: "LoginController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets
                    }
                }
            }
        };

        var forgot = {
            name: "forgot",
            url: "/forgot",
            views: {
                "login": {
                    templateUrl: "./app/login/forget.html",
                    controller: "ForgotController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets
                    }
                }
            }
        };

        var logout = {
            name: "logout",
            url: "/logout",
            views: {
                "login": {
                    templateUrl: "app/login/login.html",
                    controller: "LoginController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets,
                        doLogout: doLogout
                    }
                }
            }
        };


        var account_confirmation = {
            name: "account-confirmation",
            url: "/account-confirmation",
            views: {
                "login": {
                    templateUrl: "app/login/confirmation.html",
                    controller: "ConfirmationController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets,
                    }
                }
            }
        };

        //Dashboard routes
        var dashboard = {
            name: "dashboard",
            url: "/dashboard",
            views: {
                "main": {
                    templateUrl: "app/dashboard/dashboard.html",
                    controller: "DashboardController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dashboardStyleSheets
                    }
                },
                //"nav": nav
            }
        };
        //END Dashboard Route

        //Brand routes
        var brand = {
            name: "dashboard.brand",
            url: "/brand",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/brand/brand.html",
                    controller: "BrandController",
                    controllerAs: "vm",
                    resolve: {
                        brandPrepService: brandPrepService
                    }
                },
                //"nav": nav
            }
        };

        var brandAdd = {
            name: "dashboard.brand.add",
            url: "/add",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "app/brand/brand.add.html",
                    controller: "BrandAddController",
                    controllerAs: "vm",
                    resolve: {
                        prepCurUser: prepCurUser
                    }                    
                }
            }
        };

        var brandEdit = {
            name: "dashboard.brand.edit",
            url: "/edit/:id",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "app/brand/brand.add.html",
                    controller: "BrandEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelBrand: prepSelBrand
                    }
                }
            }
        };

        var brandView = {
            name: "dashboard.brand.view",
            url: "/:id",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "app/brand/brand.view.html",
                    controller: "BrandViewController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelBrand: prepSelBrand
                    }
                }
            }
        };
        //END Brand routes

        //Deal routes
        var deal = {
            name: "dashboard.deal",
            url: "/deal",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/deals/deal.html",
                    controller: "DealController",
                    controllerAs: "vm",
                    resolve: {
                        dealPrepService: dealPrepService
                    }
                },
                //"nav": nav
            }
        };

        var dealAdd = {
            name: "dashboard.deal.add",
            url: "/add",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.add.html",
                    controller: "DealAddController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dateTimeStyleSheets,
                        brandPrepService: brandPrepService,
                        prepTemplateNames: prepTemplateNames,
                        prepTemplateTypes: prepTemplateTypes
                    }
                }
            }
        };

        var dealEdit = {
            name: "dashboard.deal.edit",
            url: "/edit/:id",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.add.html",
                    controller: "DealEditController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dateTimeStyleSheets,
                        prepSelDeal: prepSelDeal,
                        brandPrepService: brandPrepService,
                        prepSelHighlights: prepSelHighlights,
                        prepSelTemplates: prepSelTemplates,
                        prepTemplateNames: prepTemplateNames,
                        prepTemplateTypes: prepTemplateTypes,
                        prepStandardD: prepStandardD,
                        prepEarlyBirdD: prepEarlyBirdD,
                        prepDealImages: prepDealImages
                    }
                }
            }
        };

        var dealView = {
            name: "dashboard.deal.view",
            url: "/:id",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "app/deals/deal.view.html",
                    controller: "DealViewController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelDeal: prepSelDeal,
                        prepSelHighlights: prepSelHighlights,
                        prepSelTemplates: prepSelTemplates,
                        prepStandardD: prepStandardD,
                        prepEarlyBirdD: prepEarlyBirdD,
                        prepDealImages: prepDealImages
                    }
                }
            }
        };
        //END Deal routes

        //User routes
        var user = {
            name: "dashboard.user",
            url: "/user",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/user/user.html",
                    controller: "UserController",
                    controllerAs: "vm",
                    resolve: {
                        userPrepService: userPrepService
                    }
                },
                //"nav": nav
            }
        };

        var userAdd = {
            name: "dashboard.user.add",
            url: "/add",
            parent: user,
            views: {
                "page_body": {
                    templateUrl: "app/user/user.add.html",
                    controller: "UserAddController",
                    controllerAs: "vm",
                    resolve: {
                        //prepSelUser: prepSelUser
                    }
                }
            }
        };

        var userEdit = {
            name: "dashboard.user.edit",
            url: "/edit/:id",
            parent: user,
            views: {
                "page_body": {
                    templateUrl: "app/user/user.add.html",
                    controller: "UserEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelUser: prepSelUser
                    }
                }
            }
        };

        var userView = {
            name: "dashboard.user.view",
            url: "/view/:id",
            parent: user,
            views: {
                "page_body": {
                    templateUrl: "app/user/user.view.html",
                    controller: "UserViewController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelUser: prepSelUser
                    }
                }
            }
        };

        var userInfo = {
            name: "dashboard.account",
            url: "/account",
            parent: dashboard,
            views: {
                "main_body": {
                    templateUrl: "app/user/user.info.html",
                    controller: "UserInfoController",
                    controllerAs: "vm",
                    resolve: {
                        prepCurUser: prepCurUser
                    }
                },
                //"nav": nav
            }
        };
        
        ////////////

        $stateProvider
            .state(auth)
            .state(forgot)
            .state(logout)
            .state(dashboard)
            .state(account_confirmation)
            .state(userInfo)
            .state(brand)
            .state(brandAdd)
            .state(brandEdit)
            .state(brandView);
        // .state(deal)
        // .state(dealAdd)
        // .state(dealEdit)
        // .state(dealView)
        // .state(brand)
        // .state(brandAdd)
        // .state(brandEdit)
        // .state(brandView)
        // .state(user)
        // .state(userAdd)
        // .state(userEdit)
        // .state(userView);

        ////////////

        prepDealImages.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepDealImages(DealService, $stateParams) {
            return DealService.getDealImages($stateParams.id);
        }

        prepStandardD.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepStandardD(DealService, $stateParams) {
            return DealService.getStandardDiscounts($stateParams.id);
        }

        prepEarlyBirdD.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepEarlyBirdD(DealService, $stateParams) {
            return DealService.getEarlyBirdDiscounts($stateParams.id);
        }

        prepSelTemplates.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepSelTemplates(DealService, $stateParams) {
            return DealService.getTemplates($stateParams.id);
        }

        prepTemplateTypes.$inject = ['DealService'];
        /* @ngInject */
        function prepTemplateTypes(DealService) {
            return DealService.getTemplateTypes();
        }

        prepTemplateNames.$inject = ['DealService'];
        /* @ngInject */
        function prepTemplateNames(DealService) {
            return DealService.getTemplateNames();
        }

        prepSelHighlights.$inject = ['DealService', '$stateParams'];
        /* @ngInject */
        function prepSelHighlights(DealService, $stateParams) {
            return DealService.getHighlights($stateParams.id)
        }

        prepSelUser.$inject = ['$stateParams', 'UserService'];
        /* @ngInject */
        function prepSelUser($stateParams, UserService) {
            return UserService.findInList($stateParams.id);
        }

        userPrepService.$inject = ['UserService'];
        /* @ngInject */
        function userPrepService(UserService) {
            return UserService.getAll();
        }

        dateTimeStyleSheets.$inject = ['HelperService'];
        /* @ngInject */
        function dateTimeStyleSheets(HelperService) {
            var css = ['/templates/assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                '/templates/assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                '/templates/assets/layouts/layout/css/layout.min.css',
                '/templates/assets/layouts/layout/css/themes/darkblue.min.css',
                '/templates/assets/layouts/layout/css/custom.min.css'
            ];
            HelperService.setCss(css);
        }

        loginStyleSheets.$inject = ['HelperService'];
        /* @ngInject */
        function loginStyleSheets(HelperService) {
            var css = ['/templates/assets/pages/css/login.min.css'];
            HelperService.setCss(css);
        }

        dashboardStyleSheets.$inject = ['HelperService'];
        /* @ngInject */
        function dashboardStyleSheets(HelperService) {
            var css = ['/templates/assets/layouts/layout/css/layout.min.css',
                '/templates/assets/layouts/layout/css/themes/darkblue.min.css',
                '/templates/assets/layouts/layout/css/custom.min.css'
            ];
            HelperService.setCss(css);
        }

        doLogout.$inject = ['AuthService'];
        /* @ngInject */
        function doLogout(AuthService) {
            AuthService.logout();
        }

        dealPrepService.$inject = ['DealService'];
        /* @ngInject */
        function dealPrepService(DealService) {
            return DealService.getAll();
        }

        brandPrepService.$inject = ['BrandService'];
        /* @ngInject */
        function brandPrepService(BrandService) {
            return BrandService.getAll();
        }

        prepSelBrand.$inject = ['$stateParams', 'BrandService'];
        /* @ngInject */
        function prepSelBrand($stateParams, BrandService) {
            return BrandService.find($stateParams.id);
        }

        prepCurUser.$inject = ['AuthService'];
        /* @ngInject */
        function prepCurUser(AuthService) {
            return AuthService.currentUser();
        }

        prepSelDeal.$inject = ['$stateParams', 'DealService'];
        /* @ngInject */
        function prepSelDeal($stateParams, DealService) {
            return DealService.find($stateParams.id);
        }
    }

})();

(function() {
    'use strict';

    angular.module('app.helpers', [])
        .factory('HelperService', HelperService);

    HelperService.$inject = ['$state', '$rootScope', '$document', 'SmoothScroll'];

    /* @ngInject */
    function HelperService($state, $rootScope, $document, SmoothScroll) {
        var service = {
            getCurrentState: getCurrentState,
            getPrevState: getPrevState,
            removeFromList: removeFromList,
            addToList: addToList,
            refreshList: refreshList,
            emptyList: emptyList,
            setCss: setCss,
            setPageTitle: setPageTitle,
            goToAnchor: goToAnchor,
            getDateNow: getDateNow,
            combineDateTime: combineDateTime,
            convertToDateTime: convertToDateTime,
            setErrorStr: setErrorStr,
            countModelLength: countModelLength
        }

        return service;

        ////////////////   

        function countModelLength(model) {
            var count = 0;

            for (var attr in model) {
                if (model[attr] != null)
                    count++;
            }

            return count;
        }

        function setErrorStr(err) {
            var errorStr = '';
            angular.forEach(err.data.errors, function(error, index, arr) {
                if (index === arr.length - 1) { //last iteration
                    errorStr += error;
                } else {
                    errorStr += error + ', ';
                }
            });

            return errorStr;
        }

        function convertToDateTime(datetime) {
            var toDate = new Date(datetime);
            var dd = toDate.getDate();
            var mm = toDate.getMonth() + 1; //January is 0!
            var yyyy = toDate.getFullYear();

            var hh = toDate.getHours();
            var m = toDate.getMinutes();
            var s = toDate.getSeconds();
            var d = "AM";
            var h = hh;

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            if (h >= 12) {
                h = hh - 12;
                d = "PM";
            }
            if (h == 0) {
                h = 12;
            }
            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;

            var date = yyyy + '-' + mm + '-' + dd;
            var time = h + ':' + m + ':' + s + ' ' + d;

            var cDateTime = { date: date, time: time };

            return cDateTime;
        }

        function combineDateTime(date, time) {
            return new Date(date + ' ' + time).toJSON().toString();
        }

        function getDateNow() {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            return yyyy + '-' + mm + '-' + dd;
        }

        function goToAnchor(anchor) {
            // var newHash = anchor;
            // if ($location.hash() !== newHash) {
            //     // set the $location.hash to `newHash` and
            //     // $anchorScroll will automatically scroll to it
            //     $location.hash(anchor);
            // } else {
            //     // call $anchorScroll() explicitly,
            //     // since $location.hash hasn't changed
            //     $anchorScroll();
            // }
            // var top = 400;
            // var duration = 2000; //milliseconds

            // //Scroll to the exact position
            // $document.scrollTop(top, duration).then(function() {
            //     console && console.log('You just scrolled to the top!');
            // });

            // var elem = angular.element(document.getElementById(anchor));
            // console.log(elem);
            // $document.scrollToElement(elem);
            SmoothScroll.scrollTo('msg-info');
        }

        function setPageTitle(title) {
            $rootScope.page_title = title;
        }

        //css is an array e.g. ['/templates/assets/layouts/layout/css/layout.min.css']
        function setCss(css) {
            $rootScope.stylesheets = [];
            $rootScope.stylesheets = css;
        }

        function getCurrentState() {
            return $state;
        }

        function getPrevState() {
            var prevState = $state.current.parent;

            if (typeof prevState != 'undefined') {
                return prevState;
            }

            return false;
        }

        function removeFromList(list, id) {
            for (var x = 0; x < list.length; x++) {
                if (list[x].id == id) {
                    list.splice(x, 1);
                }
            }

            return list;
        }

        function addToList(list, newData) {
            list.push(newData);

            return list;
        }

        function refreshList(list, data) {
            list.splice(0, list.length);

            for (var x = 0; x < data.length; x++) {
                list.push(data[x]);
            }

            return list;
        }

        function emptyList(list) {
            list.splice(0, list.length);

            return list;
        }
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .controller('NavController', NavController);

    NavController.$inject = ['$auth', '$rootScope', '$state', 'NavService']

    /* @ngInject */
    function NavController($auth, $rootScope, $state, NavService) {
        var vm = this;

        vm.navs = [];
        //vm.isState = isState;

        /////////////

        // function isState(stateName) {
        //     $state.includes(stateName);
        // }
    }
})();
(function() {
    'use strict';

    angular.module('app')
        .factory('NavService', NavService);

    NavService.$inject = ['$http', 'CONST', '$q'];

    /* @ngInject */
    function NavService($http, CONST, $q) {
        var api = CONST.api_domain + 'nav/';
        var d = $q.defer();

        var service = {
            navs: [],
            errors: [],
            //getNavs: getNavs
        }

        return service;

        ////////////////

        function getNavs() {
            /*
            var d = $q.defer();

            $http.get(api)
                .then(function(data) {
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    service.errors = error;
                    d.reject();
                });

            return d.promise;
            */
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('sidebarSection', sidebarSection);

    function sidebarSection() {
        var directive = {
            restrict: 'E',
            link: function(scope) {
                Layout.init();
            },
            replace: true,
            templateUrl: "/app/nav/sidebar.html",
        };

        return directive;
    }

})();
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  module.exports = 'ng-token-auth';
}

angular.module('ng-token-auth', ['ipCookie']).provider('$auth', function() {
  var configs, defaultConfigName;
  configs = {
    "default": {
      apiUrl: '/api',
      signOutUrl: '/auth/sign_out',
      emailSignInPath: '/auth/sign_in',
      emailRegistrationPath: '/auth',
      accountUpdatePath: '/auth',
      accountDeletePath: '/auth',
      confirmationSuccessUrl: function() {
        return window.location.href;
      },
      passwordResetPath: '/auth/password',
      passwordUpdatePath: '/auth/password',
      passwordResetSuccessUrl: function() {
        return window.location.href;
      },
      tokenValidationPath: '/auth/validate_token',
      proxyIf: function() {
        return false;
      },
      proxyUrl: '/proxy',
      validateOnPageLoad: true,
      omniauthWindowType: 'sameWindow',
      storage: 'cookies',
      forceValidateToken: false,
      tokenFormat: {
        "access-token": "{{ token }}",
        "token-type": "Bearer",
        client: "{{ clientId }}",
        expiry: "{{ expiry }}",
        uid: "{{ uid }}"
      },
      cookieOps: {
        path: "/",
        expires: 9999,
        expirationUnit: 'days',
        secure: false
      },
      createPopup: function(url) {
        return window.open(url, '_blank', 'closebuttoncaption=Cancel');
      },
      parseExpiry: function(headers) {
        return (parseInt(headers['expiry'], 10) * 1000) || null;
      },
      handleLoginResponse: function(resp) {
        return resp.data;
      },
      handleAccountUpdateResponse: function(resp) {
        return resp.data;
      },
      handleTokenValidationResponse: function(resp) {
        return resp.data;
      },
      authProviderPaths: {
        github: '/auth/github',
        facebook: '/auth/facebook',
        google: '/auth/google_oauth2'
      }
    }
  };
  defaultConfigName = "default";
  return {
    configure: function(params) {
      var conf, defaults, fullConfig, i, k, label, v, _i, _len;
      if (params instanceof Array && params.length) {
        for (i = _i = 0, _len = params.length; _i < _len; i = ++_i) {
          conf = params[i];
          label = null;
          for (k in conf) {
            v = conf[k];
            label = k;
            if (i === 0) {
              defaultConfigName = label;
            }
          }
          defaults = angular.copy(configs["default"]);
          fullConfig = {};
          fullConfig[label] = angular.extend(defaults, conf[label]);
          angular.extend(configs, fullConfig);
        }
        if (defaultConfigName !== "default") {
          delete configs["default"];
        }
      } else if (params instanceof Object) {
        angular.extend(configs["default"], params);
      } else {
        throw "Invalid argument: ng-token-auth config should be an Array or Object.";
      }
      return configs;
    },
    $get: [
      '$http', '$q', '$location', 'ipCookie', '$window', '$timeout', '$rootScope', '$interpolate', '$interval', (function(_this) {
        return function($http, $q, $location, ipCookie, $window, $timeout, $rootScope, $interpolate, $interval) {
          return {
            header: null,
            dfd: null,
            user: {},
            mustResetPassword: false,
            listener: null,
            initialize: function() {
              this.initializeListeners();
              this.cancelOmniauthInAppBrowserListeners = (function() {});
              return this.addScopeMethods();
            },
            initializeListeners: function() {
              this.listener = angular.bind(this, this.handlePostMessage);
              if ($window.addEventListener) {
                return $window.addEventListener("message", this.listener, false);
              }
            },
            cancel: function(reason) {
              if (this.requestCredentialsPollingTimer != null) {
                $timeout.cancel(this.requestCredentialsPollingTimer);
              }
              this.cancelOmniauthInAppBrowserListeners();
              if (this.dfd != null) {
                this.rejectDfd(reason);
              }
              return $timeout(((function(_this) {
                return function() {
                  return _this.requestCredentialsPollingTimer = null;
                };
              })(this)), 0);
            },
            destroy: function() {
              this.cancel();
              if ($window.removeEventListener) {
                return $window.removeEventListener("message", this.listener, false);
              }
            },
            handlePostMessage: function(ev) {
              var error, oauthRegistration;
              if (ev.data.message === 'deliverCredentials') {
                delete ev.data.message;
                oauthRegistration = ev.data.oauth_registration;
                delete ev.data.oauth_registration;
                this.handleValidAuth(ev.data, true);
                $rootScope.$broadcast('auth:login-success', ev.data);
                if (oauthRegistration) {
                  $rootScope.$broadcast('auth:oauth-registration', ev.data);
                }
              }
              if (ev.data.message === 'authFailure') {
                error = {
                  reason: 'unauthorized',
                  errors: [ev.data.error]
                };
                this.cancel(error);
                return $rootScope.$broadcast('auth:login-error', error);
              }
            },
            addScopeMethods: function() {
              $rootScope.user = this.user;
              $rootScope.authenticate = angular.bind(this, this.authenticate);
              $rootScope.signOut = angular.bind(this, this.signOut);
              $rootScope.destroyAccount = angular.bind(this, this.destroyAccount);
              $rootScope.submitRegistration = angular.bind(this, this.submitRegistration);
              $rootScope.submitLogin = angular.bind(this, this.submitLogin);
              $rootScope.requestPasswordReset = angular.bind(this, this.requestPasswordReset);
              $rootScope.updatePassword = angular.bind(this, this.updatePassword);
              $rootScope.updateAccount = angular.bind(this, this.updateAccount);
              if (this.getConfig().validateOnPageLoad) {
                return this.validateUser({
                  config: this.getSavedConfig()
                });
              }
            },
            submitRegistration: function(params, opts) {
              var successUrl;
              if (opts == null) {
                opts = {};
              }
              successUrl = this.getResultOrValue(this.getConfig(opts.config).confirmationSuccessUrl);
              angular.extend(params, {
                confirm_success_url: successUrl,
                config_name: this.getCurrentConfigName(opts.config)
              });
              return $http.post(this.apiUrl(opts.config) + this.getConfig(opts.config).emailRegistrationPath, params).then(function(resp) {
                $rootScope.$broadcast('auth:registration-email-success', params);
                return resp;
              }, function(resp) {
                $rootScope.$broadcast('auth:registration-email-error', resp.data);
                return $q.reject(resp);
              });
            },
            submitLogin: function(params, opts, httpopts) {
              if (opts == null) {
                opts = {};
              }
              if (httpopts == null) {
                httpopts = {};
              }
              this.initDfd();
              $http.post(this.apiUrl(opts.config) + this.getConfig(opts.config).emailSignInPath, params, httpopts).then((function(_this) {
                return function(resp) {
                  var authData;
                  _this.setConfigName(opts.config);
                  authData = _this.getConfig(opts.config).handleLoginResponse(resp.data, _this);
                  _this.handleValidAuth(authData);
                  $rootScope.$broadcast('auth:login-success', _this.user);
                  return resp;
                };
              })(this), (function(_this) {
                return function(resp) {
                  _this.rejectDfd({
                    reason: 'unauthorized',
                    errors: ['Invalid credentials']
                  });
                  $rootScope.$broadcast('auth:login-error', resp.data);
                  return $q.reject(resp);
                };
              })(this));
              return this.dfd.promise;
            },
            logUser: function(resp) {
              var authData;
              this.setConfigName();
              authData = this.getConfig().handleLoginResponse({user: resp.data}, this);
              this.handleValidAuth(authData);
              $rootScope.$broadcast('auth:login-success', this.user);
              return resp;
            },
            userIsAuthenticated: function() {
              return this.retrieveData('auth_headers') && this.user.signedIn && !this.tokenHasExpired();
            },
            requestPasswordReset: function(params, opts) {
              var successUrl;
              if (opts == null) {
                opts = {};
              }
              successUrl = this.getResultOrValue(this.getConfig(opts.config).passwordResetSuccessUrl);
              params.redirect_url = successUrl;
              if (opts.config != null) {
                params.config_name = opts.config;
              }
              return $http.post(this.apiUrl(opts.config) + this.getConfig(opts.config).passwordResetPath, params).then(function(resp) {
                $rootScope.$broadcast('auth:password-reset-request-success', params);
                return resp;
              }, function(resp) {
                $rootScope.$broadcast('auth:password-reset-request-error', resp.data);
                return $q.reject(resp);
              });
            },
            updatePassword: function(params) {
              return $http.put(this.apiUrl() + this.getConfig().passwordUpdatePath, params).then((function(_this) {
                return function(resp) {
                  $rootScope.$broadcast('auth:password-change-success', resp.data);
                  _this.mustResetPassword = false;
                  return resp;
                };
              })(this), function(resp) {
                $rootScope.$broadcast('auth:password-change-error', resp.data);
                return $q.reject(resp);
              });
            },
            updateAccount: function(params) {
              return $http.put(this.apiUrl() + this.getConfig().accountUpdatePath, params).then((function(_this) {
                return function(resp) {
                  var curHeaders, key, newHeaders, updateResponse, val, _ref;
                  updateResponse = _this.getConfig().handleAccountUpdateResponse(resp.data);
                  curHeaders = _this.retrieveData('auth_headers');
                  angular.extend(_this.user, updateResponse);
                  if (curHeaders) {
                    newHeaders = {};
                    _ref = _this.getConfig().tokenFormat;
                    for (key in _ref) {
                      val = _ref[key];
                      if (curHeaders[key] && updateResponse[key]) {
                        newHeaders[key] = updateResponse[key];
                      }
                    }
                    _this.setAuthHeaders(newHeaders);
                  }
                  $rootScope.$broadcast('auth:account-update-success', resp.data);
                  return resp;
                };
              })(this), function(resp) {
                $rootScope.$broadcast('auth:account-update-error', resp.data);
                return $q.reject(resp);
              });
            },
            destroyAccount: function(params) {
              return $http["delete"](this.apiUrl() + this.getConfig().accountUpdatePath, params).then((function(_this) {
                return function(resp) {
                  _this.invalidateTokens();
                  $rootScope.$broadcast('auth:account-destroy-success', resp.data);
                  return resp;
                };
              })(this), function(resp) {
                $rootScope.$broadcast('auth:account-destroy-error', resp.data);
                return $q.reject(resp);
              });
            },
            authenticate: function(provider, opts) {
              if (opts == null) {
                opts = {};
              }
              if (this.dfd == null) {
                this.setConfigName(opts.config);
                this.initDfd();
                this.openAuthWindow(provider, opts);
              }
              return this.dfd.promise;
            },
            setConfigName: function(configName) {
              if (configName == null) {
                configName = defaultConfigName;
              }
              return this.persistData('currentConfigName', configName, configName);
            },
            openAuthWindow: function(provider, opts) {
              var authUrl, omniauthWindowType;
              omniauthWindowType = this.getConfig(opts.config).omniauthWindowType;
              authUrl = this.buildAuthUrl(omniauthWindowType, provider, opts);
              if (omniauthWindowType === 'newWindow') {
                return this.requestCredentialsViaPostMessage(this.getConfig().createPopup(authUrl));
              } else if (omniauthWindowType === 'inAppBrowser') {
                return this.requestCredentialsViaExecuteScript(this.getConfig().createPopup(authUrl));
              } else if (omniauthWindowType === 'sameWindow') {
                return this.visitUrl(authUrl);
              } else {
                throw 'Unsupported omniauthWindowType "#{omniauthWindowType}"';
              }
            },
            visitUrl: function(url) {
              return $window.location.replace(url);
            },
            buildAuthUrl: function(omniauthWindowType, provider, opts) {
              var authUrl, key, params, val;
              if (opts == null) {
                opts = {};
              }
              authUrl = this.getConfig(opts.config).apiUrl;
              authUrl += this.getConfig(opts.config).authProviderPaths[provider];
              authUrl += '?auth_origin_url=' + encodeURIComponent($window.location.href);
              params = angular.extend({}, opts.params || {}, {
                omniauth_window_type: omniauthWindowType
              });
              for (key in params) {
                val = params[key];
                authUrl += '&';
                authUrl += encodeURIComponent(key);
                authUrl += '=';
                authUrl += encodeURIComponent(val);
              }
              return authUrl;
            },
            requestCredentialsViaPostMessage: function(authWindow) {
              if (authWindow.closed) {
                return this.handleAuthWindowClose(authWindow);
              } else {
                authWindow.postMessage("requestCredentials", "*");
                return this.requestCredentialsPollingTimer = $timeout(((function(_this) {
                  return function() {
                    return _this.requestCredentialsViaPostMessage(authWindow);
                  };
                })(this)), 500);
              }
            },
            requestCredentialsViaExecuteScript: function(authWindow) {
              var handleAuthWindowClose, handleLoadStop;
              this.cancelOmniauthInAppBrowserListeners();
              handleAuthWindowClose = this.handleAuthWindowClose.bind(this, authWindow);
              handleLoadStop = this.handleLoadStop.bind(this, authWindow);
              authWindow.addEventListener('loadstop', handleLoadStop);
              authWindow.addEventListener('exit', handleAuthWindowClose);
              return this.cancelOmniauthInAppBrowserListeners = function() {
                authWindow.removeEventListener('loadstop', handleLoadStop);
                return authWindow.removeEventListener('exit', handleAuthWindowClose);
              };
            },
            handleLoadStop: function(authWindow) {
              _this = this;
              return authWindow.executeScript({
                code: 'requestCredentials()'
              }, function(response) {
                var data, ev;
                data = response[0];
                if (data) {
                  ev = new Event('message');
                  ev.data = data;
                  _this.cancelOmniauthInAppBrowserListeners();
                  $window.dispatchEvent(ev);
                  _this.initDfd();
                  return authWindow.close();
                }
              });
            },
            handleAuthWindowClose: function(authWindow) {
              this.cancel({
                reason: 'unauthorized',
                errors: ['User canceled login']
              });
              this.cancelOmniauthInAppBrowserListeners;
              return $rootScope.$broadcast('auth:window-closed');
            },
            resolveDfd: function() {
              if (!this.dfd) {
                return;
              }
              this.dfd.resolve(this.user);
              return $timeout(((function(_this) {
                return function() {
                  _this.dfd = null;
                  if (!$rootScope.$$phase) {
                    return $rootScope.$digest();
                  }
                };
              })(this)), 0);
            },
            buildQueryString: function(param, prefix) {
              var encoded, k, str, v;
              str = [];
              for (k in param) {
                v = param[k];
                k = prefix ? prefix + "[" + k + "]" : k;
                encoded = angular.isObject(v) ? this.buildQueryString(v, k) : k + "=" + encodeURIComponent(v);
                str.push(encoded);
              }
              return str.join("&");
            },
            parseLocation: function(location) {
              var i, locationSubstring, obj, pair, pairs;
              locationSubstring = location.substring(1);
              obj = {};
              if (locationSubstring) {
                pairs = locationSubstring.split('&');
                pair = void 0;
                i = void 0;
                for (i in pairs) {
                  i = i;
                  if ((pairs[i] === '') || (typeof pairs[i] === 'function')) {
                    continue;
                  }
                  pair = pairs[i].split('=');
                  obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                }
              }
              return obj;
            },
            validateUser: function(opts) {
              var clientId, configName, expiry, location_parse, params, search, token, uid, url;
              if (opts == null) {
                opts = {};
              }
              configName = opts.config;
              if (this.dfd == null) {
                this.initDfd();
                if (this.userIsAuthenticated()) {
                  this.resolveDfd();
                } else {
                  search = $location.search();
                  location_parse = this.parseLocation(window.location.search);
                  params = Object.keys(search).length === 0 ? location_parse : search;
                  token = params.auth_token || params.token;
                  if (token !== void 0) {
                    clientId = params.client_id;
                    uid = params.uid;
                    expiry = params.expiry;
                    configName = params.config;
                    this.setConfigName(configName);
                    this.mustResetPassword = params.reset_password;
                    this.firstTimeLogin = params.account_confirmation_success;
                    this.oauthRegistration = params.oauth_registration;
                    this.setAuthHeaders(this.buildAuthHeaders({
                      token: token,
                      clientId: clientId,
                      uid: uid,
                      expiry: expiry
                    }));
                    url = $location.path() || '/';
                    ['auth_token', 'token', 'client_id', 'uid', 'expiry', 'config', 'reset_password', 'account_confirmation_success', 'oauth_registration'].forEach(function(prop) {
                      return delete params[prop];
                    });
                    if (Object.keys(params).length > 0) {
                      url += '?' + this.buildQueryString(params);
                    }
                    $location.url(url);
                  } else if (this.retrieveData('currentConfigName')) {
                    configName = this.retrieveData('currentConfigName');
                  }
                  if (this.getConfig().forceValidateToken) {
                    this.validateToken({
                      config: configName
                    });
                  } else if (!isEmpty(this.retrieveData('auth_headers'))) {
                    if (this.tokenHasExpired()) {
                      $rootScope.$broadcast('auth:session-expired');
                      this.rejectDfd({
                        reason: 'unauthorized',
                        errors: ['Session expired.']
                      });
                    } else {
                      this.validateToken({
                        config: configName
                      });
                    }
                  } else {
                    this.rejectDfd({
                      reason: 'unauthorized',
                      errors: ['No credentials']
                    });
                    $rootScope.$broadcast('auth:invalid');
                  }
                }
              }
              return this.dfd.promise;
            },
            validateToken: function(opts) {
              if (opts == null) {
                opts = {};
              }
              if (!this.tokenHasExpired()) {
                return $http.get(this.apiUrl(opts.config) + this.getConfig(opts.config).tokenValidationPath).then((function(_this) {
                  return function(resp) {
                    var authData;
                    authData = _this.getConfig(opts.config).handleTokenValidationResponse(resp.data);
                    _this.handleValidAuth(authData);
                    if (_this.firstTimeLogin) {
                      $rootScope.$broadcast('auth:email-confirmation-success', _this.user);
                    }
                    if (_this.oauthRegistration) {
                      $rootScope.$broadcast('auth:oauth-registration', _this.user);
                    }
                    if (_this.mustResetPassword) {
                      $rootScope.$broadcast('auth:password-reset-confirm-success', _this.user);
                    }
                    $rootScope.$broadcast('auth:validation-success', _this.user);
                    return _this.user;
                  };
                })(this), (function(_this) {
                  return function(resp) {
                    if (_this.firstTimeLogin) {
                      $rootScope.$broadcast('auth:email-confirmation-error', resp.data);
                    }
                    if (_this.mustResetPassword) {
                      $rootScope.$broadcast('auth:password-reset-confirm-error', resp.data);
                    }
                    $rootScope.$broadcast('auth:validation-error', resp.data);
                    _this.rejectDfd({
                      reason: 'unauthorized',
                      errors: resp.data != null ? resp.data.errors : ['Unspecified error']
                    }, resp.status > 0);
                    return $q.reject(resp);
                  };
                })(this));
              } else {
                return this.rejectDfd({
                  reason: 'unauthorized',
                  errors: ['Expired credentials']
                });
              }
            },
            tokenHasExpired: function() {
              var expiry, now;
              expiry = this.getExpiry();
              now = new Date().getTime();
              return expiry && expiry < now;
            },
            getExpiry: function() {
              return this.getConfig().parseExpiry(this.retrieveData('auth_headers') || {});
            },
            invalidateTokens: function() {
              var key, val, _ref;
              _ref = this.user;
              for (key in _ref) {
                val = _ref[key];
                delete this.user[key];
              }
              this.deleteData('currentConfigName');
              if (this.timer != null) {
                $interval.cancel(this.timer);
              }
              return this.deleteData('auth_headers');
            },
            signOut: function() {
              return $http["delete"](this.apiUrl() + this.getConfig().signOutUrl).then((function(_this) {
                return function(resp) {
                  _this.invalidateTokens();
                  $rootScope.$broadcast('auth:logout-success');
                  return resp;
                };
              })(this), (function(_this) {
                return function(resp) {
                  _this.invalidateTokens();
                  $rootScope.$broadcast('auth:logout-error', resp.data);
                  return $q.reject(resp);
                };
              })(this));
            },
            handleValidAuth: function(user, setHeader) {
              if (setHeader == null) {
                setHeader = false;
              }
              if (this.requestCredentialsPollingTimer != null) {
                $timeout.cancel(this.requestCredentialsPollingTimer);
              }
              this.cancelOmniauthInAppBrowserListeners();
              angular.extend(this.user, user);
              this.user.signedIn = true;
              this.user.configName = this.getCurrentConfigName();
              if (setHeader) {
                this.setAuthHeaders(this.buildAuthHeaders({
                  token: this.user.auth_token,
                  clientId: this.user.client_id,
                  uid: this.user.uid,
                  expiry: this.user.expiry
                }));
              }
              return this.resolveDfd();
            },
            buildAuthHeaders: function(ctx) {
              var headers, key, val, _ref;
              headers = {};
              _ref = this.getConfig().tokenFormat;
              for (key in _ref) {
                val = _ref[key];
                headers[key] = $interpolate(val)(ctx);
              }
              return headers;
            },
            persistData: function(key, val, configName) {
              if (this.getConfig(configName).storage instanceof Object) {
                return this.getConfig(configName).storage.persistData(key, val, this.getConfig(configName));
              } else {
                switch (this.getConfig(configName).storage) {
                  case 'localStorage':
                    return $window.localStorage.setItem(key, JSON.stringify(val));
                  case 'sessionStorage':
                    return $window.sessionStorage.setItem(key, JSON.stringify(val));
                  default:
                    return ipCookie(key, val, this.getConfig().cookieOps);
                }
              }
            },
            retrieveData: function(key) {
              var e;
              try {
                if (this.getConfig().storage instanceof Object) {
                  return this.getConfig().storage.retrieveData(key);
                } else {
                  switch (this.getConfig().storage) {
                    case 'localStorage':
                      return JSON.parse($window.localStorage.getItem(key));
                    case 'sessionStorage':
                      return JSON.parse($window.sessionStorage.getItem(key));
                    default:
                      return ipCookie(key);
                  }
                }
              } catch (_error) {
                e = _error;
                if (e instanceof SyntaxError) {
                  return void 0;
                } else {
                  throw e;
                }
              }
            },
            deleteData: function(key) {
              var cookieOps;
              if (this.getConfig().storage instanceof Object) {
                this.getConfig().storage.deleteData(key);
              }
              switch (this.getConfig().storage) {
                case 'localStorage':
                  return $window.localStorage.removeItem(key);
                case 'sessionStorage':
                  return $window.sessionStorage.removeItem(key);
                default:
                  cookieOps = {
                    path: this.getConfig().cookieOps.path
                  };
                  if (this.getConfig().cookieOps.domain !== void 0) {
                    cookieOps.domain = this.getConfig().cookieOps.domain;
                  }
                  return ipCookie.remove(key, cookieOps);
              }
            },
            setAuthHeaders: function(h) {
              var expiry, newHeaders, now, result;
              newHeaders = angular.extend(this.retrieveData('auth_headers') || {}, h);
              result = this.persistData('auth_headers', newHeaders);
              expiry = this.getExpiry();
              now = new Date().getTime();
              if (expiry > now) {
                if (this.timer != null) {
                  $interval.cancel(this.timer);
                }
                this.timer = $interval(((function(_this) {
                  return function() {
                    return _this.validateUser({
                      config: _this.getSavedConfig()
                    });
                  };
                })(this)), parseInt(expiry - now), 1);
              }
              return result;
            },
            initDfd: function() {
              return this.dfd = $q.defer();
            },
            rejectDfd: function(reason, invalidateTokens) {
              if (invalidateTokens == null) {
                invalidateTokens = true;
              }
              if (invalidateTokens === true) {
                this.invalidateTokens();
              }
              if (this.dfd != null) {
                this.dfd.reject(reason);
                return $timeout(((function(_this) {
                  return function() {
                    return _this.dfd = null;
                  };
                })(this)), 0);
              }
            },
            apiUrl: function(configName) {
              if (this.getConfig(configName).proxyIf()) {
                return this.getConfig(configName).proxyUrl;
              } else {
                return this.getConfig(configName).apiUrl;
              }
            },
            getConfig: function(name) {
              return configs[this.getCurrentConfigName(name)];
            },
            getResultOrValue: function(arg) {
              if (typeof arg === 'function') {
                return arg();
              } else {
                return arg;
              }
            },
            getCurrentConfigName: function(name) {
              return name || this.getSavedConfig();
            },
            getSavedConfig: function() {
              var c, key;
              c = void 0;
              key = 'currentConfigName';
              if (this.hasLocalStorage()) {
                if (c == null) {
                  c = JSON.parse($window.localStorage.getItem(key));
                }
              } else if (this.hasSessionStorage()) {
                if (c == null) {
                  c = JSON.parse($window.sessionStorage.getItem(key));
                }
              }
              if (c == null) {
                c = ipCookie(key);
              }
              return c || defaultConfigName;
            },
            hasSessionStorage: function() {
              var error;
              if (this._hasSessionStorage == null) {
                this._hasSessionStorage = false;
                try {
                  $window.sessionStorage.setItem('ng-token-auth-test', 'ng-token-auth-test');
                  $window.sessionStorage.removeItem('ng-token-auth-test');
                  this._hasSessionStorage = true;
                } catch (_error) {
                  error = _error;
                }
              }
              return this._hasSessionStorage;
            },
            hasLocalStorage: function() {
              var error;
              if (this._hasLocalStorage == null) {
                this._hasLocalStorage = false;
                try {
                  $window.localStorage.setItem('ng-token-auth-test', 'ng-token-auth-test');
                  $window.localStorage.removeItem('ng-token-auth-test');
                  this._hasLocalStorage = true;
                } catch (_error) {
                  error = _error;
                }
              }
              return this._hasLocalStorage;
            }
          };
        };
      })(this)
    ]
  };
}).config([
  '$httpProvider', function($httpProvider) {
    var httpMethods, tokenIsCurrent, updateHeadersFromResponse;
    tokenIsCurrent = function($auth, headers) {
      var newTokenExpiry, oldTokenExpiry;
      oldTokenExpiry = Number($auth.getExpiry());
      newTokenExpiry = Number($auth.getConfig().parseExpiry(headers || {}));
      return newTokenExpiry >= oldTokenExpiry;
    };
    updateHeadersFromResponse = function($auth, resp) {
      var key, newHeaders, val, _ref;
      newHeaders = {};
      _ref = $auth.getConfig().tokenFormat;
      for (key in _ref) {
        val = _ref[key];
        if (resp.headers(key)) {
          newHeaders[key] = resp.headers(key);
        }
      }
      if (tokenIsCurrent($auth, newHeaders)) {
        return $auth.setAuthHeaders(newHeaders);
      }
    };
    $httpProvider.interceptors.push([
      '$injector', function($injector) {
        return {
          request: function(req) {
            $injector.invoke([
              '$http', '$auth', function($http, $auth) {
                var key, val, _ref, _results;
                if (req.url.match($auth.apiUrl())) {
                  _ref = $auth.retrieveData('auth_headers');
                  _results = [];
                  for (key in _ref) {
                    val = _ref[key];
                    _results.push(req.headers[key] = val);
                  }
                  return _results;
                }
              }
            ]);
            return req;
          },
          response: function(resp) {
            $injector.invoke([
              '$http', '$auth', function($http, $auth) {
                if (resp.config.url.match($auth.apiUrl())) {
                  return updateHeadersFromResponse($auth, resp);
                }
              }
            ]);
            return resp;
          },
          responseError: function(resp) {
            $injector.invoke([
              '$http', '$auth', function($http, $auth) {
                if (resp.config.url.match($auth.apiUrl())) {
                  return updateHeadersFromResponse($auth, resp);
                }
              }
            ]);
            return $injector.get('$q').reject(resp);
          }
        };
      }
    ]);
    httpMethods = ['get', 'post', 'put', 'patch', 'delete'];
    return angular.forEach(httpMethods, function(method) {
      var _base;
      if ((_base = $httpProvider.defaults.headers)[method] == null) {
        _base[method] = {};
      }
      return $httpProvider.defaults.headers[method]['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    });
  }
]).run([
  '$auth', '$window', '$rootScope', function($auth, $window, $rootScope) {
    return $auth.initialize();
  }
]);

window.isOldIE = function() {
  var nav, out, version;
  out = false;
  nav = navigator.userAgent.toLowerCase();
  if (nav && nav.indexOf('msie') !== -1) {
    version = parseInt(nav.split('msie')[1]);
    if (version < 10) {
      out = true;
    }
  }
  return out;
};

window.isIE = function() {
  var nav;
  nav = navigator.userAgent.toLowerCase();
  return (nav && nav.indexOf('msie') !== -1) || !!navigator.userAgent.match(/Trident.*rv\:11\./);
};

window.isEmpty = function(obj) {
  var key, val;
  if (!obj) {
    return true;
  }
  if (obj.length > 0) {
    return false;
  }
  if (obj.length === 0) {
    return true;
  }
  for (key in obj) {
    val = obj[key];
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};

(function() {
    'use strict';

    angular
        .module('app')
        .filter('base64filename', base64filename);

    function base64filename() {
        return function(img) {
            if (img) {
                var filebase64 = 'data:' + img.filetype + ';base64,' + img.base64;

                return filebase64;
            }

            return img;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .filter('isEmpty', isEmpty);

    function isEmpty() {
        return function(container) {

            if (angular.isObject(container)) {

                angular.forEach(container, function(item, index) {
                    return false;
                });

            } else if (angular.isArray(container)) {
                return container.length == 0;
            }

            return true;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .filter('isLoading', isLoading);

    function isLoading() {
        return function(target) {
            $log.log(target);
            if (target) {
                var scope = angular.element(target).scope();

                if (angular.isDefined(scope.isLoading) && scope.isLoading) {
                    return true;
                }

                return false;
            }

            return false;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .filter('toDecimal', toDecimal);

    function toDecimal() {
        return function(num, dec) {
            if (num) {
                num = parseFloat(num);
                num = num.toFixed(dec);

                return '' + num;
            }

            return num;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .filter('ucFirst', ucFirst);

    function ucFirst() {
        return function(string) {
            if (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }

            return string;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .filter('whereAttr', whereAttr);

    function whereAttr() {
        return function(box, attr, value) {
            var obj = [];
            angular.forEach(box, function(item, index) {
                if (angular.isDefined(item[attr]) && item[attr] == value) {
                    obj.push(item);
                }
            });

            return obj;

        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('breadCrumbs', breadCrumbs);

    breadCrumbs.$inject = ['$state', '$stateParams', 'BreadCrumbService'];
    /* @ngInject */
    function breadCrumbs($state, $stateParams, BreadCrumbService) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/common/breadcrumbs.html',
            replace: true,
            // compile: function(tElement, tAttrs) {
            //     return function($scope, $elem, $attr) {

            //         $scope.states = BreadCrumbService.getCrumbs();

            //         $scope.show = function() {

            //             if ($scope.states.length == 0) {
            //                 return false;
            //             }

            //             return true;
            //         };

            //         $scope.$watch(BreadCrumbService.getCrumbs(), function() {
            //             $log.log('crumb test');
            //         });
            //     }
            // }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('clearImageInput', clearImageInput);

    clearImageInput.$inject = ['$state', '$stateParams', 'BreadCrumbService'];
    /* @ngInject */
    function clearImageInput($state, $stateParams, BreadCrumbService) {

        var directive = {
            restrict: 'A',
            scope: {
                selModel: '=',
                elemContainer: '@'
            },
            link: function(scope, element, attrs) {

                clearEvent();

                /////////////

                function clearEvent() {
                    element.bind('click', function() {
                        scope.selModel.file = null;
                        scope.selModel.file = "";
                        angular.element(scope.elemContainer).html('');
                    });
                }

            }
        };

        return directive;
    }

})();
(function() { 
    'use strict'; 
 
    angular 
        .module('app') 
        .directive('compareTo', compareTo); 
 
    compareTo.$inject = ['defaultErrorMessageResolver', '$state']; 
    /* @ngInject */ 
    function compareTo(defaultErrorMessageResolver) { 
        defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) { 
            errorMessages['compareTo'] = 'Please confirm your password correctly.'; 
        }); 
 
        return { 
            restrict: 'A', 
            require: 'ngModel', 
            scope: { 
                compareTo: '=compareTo' 
            }, 
            link: function(scope, element, attributes, ngModel) { 
 
                ngModel.$validators.compareTo = function(modelValue) { 
                    if (typeof modelValue === 'undefined') { 
                      return false; 
                    } 
                    if (modelValue == null) { 
                      return false; 
                    } 
                    return modelValue == scope.compareTo; 
                }; 
 
                scope.$watch('compareTo', function() { 
                    ngModel.$validate(); 
                }); 
            } 
        }; 
    } 
 
})(); 
(function() {
    'use strict';

    angular
        .module('app')
        .directive('dateDiff', dateDiff);

    function dateDiff() {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function(scope, element, attrs, ngModel) {
                $log.log(ngModel);
            }
        };
    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('enableDatetimePicker', enableDatetimePicker);

    enableDatetimePicker.$inject = ['HelperService'];
    /* @ngInject */
    function enableDatetimePicker(HelperService) {
        var directive = {
            restrict: 'A',
            scope: {
                enableDatetimePicker: '=enableDatetimePicker',

            },
            link: function(scope, element) {

                // document.querySelectorAll('input.date-picker').forEach(function(el) {
                //     el.value = HelperService.getDateNow();
                // });
                scope.enableDatetimePicker.$pristine;
                ComponentsDateTimePickers.init();
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('validateFacebookUrl', validateFacebookUrl);

    validateFacebookUrl.$inject = ['defaultErrorMessageResolver', '$state'];
    /* @ngInject */
    function validateFacebookUrl(defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
            errorMessages['facebook'] = 'Please enter a valid facebook url';
        });

        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                validateFacebookUrl: '=validateFacebookUrl'
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.facebook = function(modelValue) {
                    var i = modelValue.indexOf("https://facebook.com/");
                    return i > -1;
                };

                scope.$watch('facebook', function() {
                    ngModel.$validate();
                });
            }
        };
    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('initDatePicker', initDatePicker);

    function initDatePicker() {

        return {
            restrict: 'A',
            scope: {
                varModel: '='
            },
            link: function(scope, element) {
                // angular.element(element).datepicker({
                //     rtl: App.isRTL(),
                //     orientation: "left",
                //     autoclose: true
                // });
                // angular.element(element).datepicker({
                //     //autoclose: true
                // });

                // element.bind('click', function() {
                //     angular.element(element).datepicker({
                //         autoclose: true
                //     });
                // });
            }
        };
    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('validateInstagramUrl', validateInstagramUrl);

    validateInstagramUrl.$inject = ['defaultErrorMessageResolver', '$state'];
    /* @ngInject */
    function validateInstagramUrl(defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
            errorMessages['instagram'] = 'Please enter a valid instagram url';
        });

        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                validateInstagramUrl: '=validateInstagramUrl'
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.instagram = function(modelValue) {
                    var i = modelValue.indexOf("https://instagram.com/");
                    return i > -1;
                };

                scope.$watch('instagram', function() {
                    ngModel.$validate();
                });
            }
        };
    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('stringToNumber', stringToNumber);

    function stringToNumber() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    return '' + value;
                });
                ngModel.$formatters.push(function(value) {
                    return parseFloat(value);
                });
            }
        };
    }

})();
(function() {
    'use strict';

    angular
        .module('app')
        .directive('validateTwitterUrl', validateTwitterUrl);

    validateTwitterUrl.$inject = ['defaultErrorMessageResolver', '$state'];
    /* @ngInject */
    function validateTwitterUrl(defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages) {
            errorMessages['twitter'] = 'Please enter a valid twitter url';
        });

        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                validateTwitterUrl: '=validateTwitterUrl'
            },
            link: function(scope, element, attributes, ngModel) {

                ngModel.$validators.twitter = function(modelValue) {
                    var i = modelValue.indexOf("https://twitter.com/");
                    return i > -1;
                };

                scope.$watch('twitter', function() {
                    ngModel.$validate();
                });
            }
        };
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .factory('BreadCrumbService', BreadCrumbService);

    BreadCrumbService.$inject = [];

    /* @ngInject */
    function BreadCrumbService() {

        var service = {
            crumbs: [],
            set: set,
            getCrumbs: getCrumbs
        }

        return service;

        //////// SERIVCE METHODS ////////

        function getCrumbs() {
            return service.crumbs;
        }

        function set(str) {
            var res = str.split('.');
            var state = '';
            service.crumbs = [];
            angular.forEach(res, function(val, index) {
                if (index == 0) {
                    state = val;
                } else {
                    state += '.' + val;
                }

                var obj = { name: ucFirst(val), state: state };
                service.crumbs.push(obj);
            });
        }

        function ucFirst(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .service('SmoothScroll', SmoothScroll);

    function SmoothScroll() {

        this.scrollTo = function(eID) {

            // This scrolling function 
            // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

            var startY = currentYPosition();
            var stopY = elmYPosition(eID);
            var distance = stopY > startY ? stopY - startY : startY - stopY;
            if (distance < 100) {
                scrollTo(0, stopY);
                return;
            }
            var speed = Math.round(distance / 100);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;
            if (stopY > startY) {
                for (var i = startY; i < stopY; i += step) {
                    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                    leapY += step;
                    if (leapY > stopY) leapY = stopY;
                    timer++;
                }
                return;
            }
            for (var i = startY; i > stopY; i -= step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY -= step;
                if (leapY < stopY) leapY = stopY;
                timer++;
            }

            function currentYPosition() {
                // Firefox, Chrome, Opera, Safari
                if (self.pageYOffset) return self.pageYOffset;
                // Internet Explorer 6 - standards mode
                if (document.documentElement && document.documentElement.scrollTop)
                    return document.documentElement.scrollTop;
                // Internet Explorer 6, 7 and 8
                if (document.body.scrollTop) return document.body.scrollTop;
                return 0;
            }

            function elmYPosition(eID) {
                var elm = document.getElementById(eID);
                var y = elm.offsetTop;
                var node = elm;
                while (node.offsetParent && node.offsetParent != document.body) {
                    node = node.offsetParent;
                    y += node.offsetTop;
                }
                return y;
            }

        };
    }

})();
(function() {
    'use strict';

    angular.module('app.auth', [])
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$auth', '$rootScope', '$q', '$state', 'CONST', '$log'];

    /* @ngInject */
    function AuthService($auth, $rootScope, $q, $state, CONST, $log) {
        var api = CONST.api_domain;

        var service = {
            login: login,
            requestReset: requestReset,
            logout: logout,
            userIsAuthenticated: userIsAuthenticated,
            currentUser: currentUser,
            tokenExists: tokenExists,
            invalidateTokens: invalidateTokens
        }

        return service;

        ////////////////

        function userIsAuthenticated() {
            return $auth.userIsAuthenticated();
        }

        function currentUser() {
            return $auth.user;
        }

        function tokenExists() {
            return (!$auth.retrieveData('auth_headers') ? false : true);
        }

        function invalidateTokens() {
            $auth.invalidateTokens();
        }

        function login(credentials) {
            var d = $q.defer();

            $auth.submitLogin(credentials).then(function(resp) {
                d.resolve(resp);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function requestReset(params) {
            var d = $q.defer();

            $auth.requestPasswordReset(params).then(function(resp) {
                d.resolve(resp);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function logout() {
            var d = $q.defer();

            $auth.signOut().then(function(resp) {
                d.resolve(resp);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }
    }

})();

(function() {
    'use strict';

    angular.module('app.auth')
        .factory('ConfirmService', ConfirmService);

    ConfirmService.$inject = ['$rootScope', '$q', '$state', 'CONST', '$log', '$http'];

    /* @ngInject */
    function ConfirmService($rootScope, $q, $state, CONST, $log, $http) {
        var api = CONST.api_domain;

        var service = {
            validateConfirmationToken: validateConfirmationToken,
            validate: validate
        }

        return service;

        ////////////////

        function validateConfirmationToken(confirmation_token) {
            var url = api + '/auth/confirmations/validate_token';
            return $http.get(url + '?confirmation_token=' + confirmation_token);
        }

        function validate(passwords, confirmation_token) {
            
            var url = api + '/auth/confirmations';
            return $http.patch(url, {
                confirmation_token: confirmation_token,
                user: passwords
            });
        }

    }

})();

(function() {
    'use strict';

    angular.module('app.auth')
        .controller('ConfirmationController', ConfirmationController);

    ConfirmationController.$inject = ['$state', '$rootScope', '$log', 'CONST', '$http', '$window', 'ConfirmService', '$auth'];

    /* @ngInject */
    function ConfirmationController($state, $rootScope, $log, CONST, $http, $window, ConfirmService, $auth) {
        var vm = this;

        vm.form;
        vm.tokenValidated = false;
        vm.validate = validate;
        vm.error = "";
        if($window.location.href.indexOf('confirmation_token') === -1) {
             $state.go('auth');
        } else {
            vm.confirmation_token = $window.location.href.slice($window.location.href.indexOf('confirmation_token')).split('=')[1];
            ConfirmService.validateConfirmationToken(vm.confirmation_token)
            .then(function(resp) {  
                vm.tokenValidated = true;
                $rootScope.hasLoginView = true;
                $log.log("Confirm token validated");
            }).catch(function(err) {
                $log.log(err);
                $rootScope.loginError = err.data.errors[0];
                $state.go('auth');
            });    
        }
        

        ///////////
        
        function validate(){
            ConfirmService.validate(vm.form, vm.confirmation_token)
            .then(function(resp) {
                // vm.tokenValidated = true;
                // $log.log("Confirm token validated");
                $auth.logUser(resp);
            }).catch(function(err) {
                $log.log(err);
                vm.error = err.data.errors[0];
            });  
        }
    }
})();

(function() {
    'use strict';

    angular.module('app.auth')
        .controller('ForgotController', ForgotController);

    ForgotController.$inject = ['AuthService', '$state', '$rootScope', '$log'];

    /* @ngInject */
    function ForgotController(AuthService, $state, $rootScope, $log) {
        var vm = this;

        vm.form = {};
        vm.form.redirect_url = '';
        vm.toLogin = toLogin;
        vm.forgotPassword = forgotPassword;
        vm.sendingRequest = false;

        activate();

        ///////////

        function activate() {
            $rootScope.hasLoginView = true;
            $rootScope.resetPasswordError = null;
            $rootScope.resetPasswordSuccess = null;
        }

        function toLogin() {
            $state.go('auth');
        }

        function forgotPassword() {
            if (vm.sendingRequest) {
                return;
            }

            vm.sendingRequest = true;
            $rootScope.resetPasswordError = null;
            $rootScope.resetPasswordSuccess = null;

            AuthService.requestReset(vm.form).then(function(resp) {
                $rootScope.resetPasswordSuccess = resp.data.message;
                vm.sendingRequest = false;
            }).catch(function(err) {
                $rootScope.resetPasswordError = err.data.errors[0];
                vm.sendingRequest = false;
            });
        }
    }
})();

(function() {
    'use strict';

    angular.module('app.auth')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['AuthService', '$state', '$rootScope', '$log'];

    /* @ngInject */
    function LoginController(AuthService, $state, $rootScope, $log) {
        var vm = this;

        vm.form = {};
        vm.toForgot = toForgot;
        vm.login = login;
        vm.loggingIn = false;

        activate();

        ///////////

        function activate() {
            $rootScope.hasLoginView = true;
            $rootScope.loginError = null;
        }

        function toForgot() {
            $state.go('forgot');
        }

        function login() {
            if (vm.loggingIn) {
                return;
            }

            vm.loggingIn = true;
            $rootScope.loginError = null;

            AuthService.login(vm.form).then(function(resp) {
                vm.loggingIn = false;
            }).catch(function(err) {
                vm.loggingIn = false;
            });
        }
    }
})();



(function() {
    'use strict';

    angular
        .module('app.auth')
        .directive('compareTo', compareTo);

    compareTo.$inject = ['$state', '$stateParams'];
    /* @ngInject */
    function compareTo($state, $stateParams) {

        var directive = {
                
            require: "ngModel",
            scope: {
                otherModelValue: "=compareTo"
            },
            link: function(scope, element, attributes, ngModel) {
                 
                ngModel.$validators.compareTo = function(modelValue) {
                    return modelValue == scope.otherModelValue;
                };
     
                scope.$watch("otherModelValue", function() {
                    ngModel.$validate();
                });
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = [
        '$http',
        'CONST',
        '$q',
        '$rootScope',
        '$filter',
        '$log'
    ];

    /* @ngInject */
    function DashboardService(
        $http,
        CONST,
        $q,
        $rootScope,
        $filter,
        $log) {

        var service = {
            getGAReportingData: getGAReportingData
        }

        return service;

        function getGAReportingData(vendorid, type) {
            var d = $q.defer();

            var url = '/ga-reporting-data?vendor=' + vendorid + '&type=' + type;

            $http.get(url).then(function(resp) {
                d.resolve(resp.data);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

    }

})();

(function() {
    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$rootScope', 'DashboardService', 'HelperService', '$log'];

    /* @ngInject */
    function DashboardController($scope, $rootScope, DashboardService, HelperService, $log) {
        var vm = this;

        vm.errorMessage = null;
        vm.basicReport = null;
        vm.basicChartData = null;
        vm.trafficReport = null;
        vm.trafficChartData = null;
        vm.eventsReport = null;
        vm.firstLoadingFinished = false;

        activate();

        //////////////

        function activate() {
            vm.page_title = "Dashboard";

            requestBasicReport();
            requestTrafficReport();
            requestEventsReport();
        }

        function requestBasicReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'basic').then(function(reports) {

                if (reports.error) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }

                if (!reports.reports || !reports.reports[0].data.rows) {
                    vm.basicReport = null;
                    vm.firstLoadingFinished = true;
                    return;
                }

                vm.basicReport = reports.reports[0];
                vm.firstLoadingFinished = true;

                // Build the chart data
                vm.basicChartData = [];
                for (var i = 0; i < vm.basicReport.data.rows.length; i ++) {
                    var chartItem = {
                        dimension: vm.basicReport.data.rows[i].dimensions[0],
                        sessionsValue: vm.basicReport.data.rows[i].metrics[0].values[1],
                        completions2Value: vm.basicReport.data.rows[i].metrics[0].values[4]
                    }
                    vm.basicChartData.push(chartItem);
                }

                // configure chart
                var chart = new AmCharts.AmSerialChart();
                chart.dataProvider = vm.basicChartData;
                chart.categoryField = "dimension";
                var legend = new AmCharts.AmLegend();
                legend.useGraphSettings = true;
                chart.addLegend(legend);

                // configure category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.labelRotation = 90;

                // configure session graph
                var graph1 = new AmCharts.AmGraph();
                graph1.valueField = "sessionsValue";
                graph1.type = "line";
                graph1.bullet = "round";
                graph1.lineColor = "blue";
                graph1.balloonText = "[[category]]: <b>[[value]]</b>";
                graph1.title = "Sessions";
                chart.addGraph(graph1);

                // configure shop now graph
                var graph2 = new AmCharts.AmGraph();
                graph2.valueField = "completions2Value";
                graph2.type = "line";
                graph2.bullet = "diamond";
                graph2.lineColor = "red";
                graph2.balloonText = "[[category]]: <b>[[value]]</b>";
                graph2.title = "Shop - Now Clicks";
                chart.addGraph(graph2);

                chart.write("basic-report-chart");

            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }

        function requestTrafficReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'traffic').then(function(reports) {

                if (reports.error) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }

                if (!reports.reports || !reports.reports[0].data.rows) {
                    vm.trafficReport = null;
                    vm.firstLoadingFinished = true;
                    return;
                }

                vm.trafficReport = reports.reports[0];
                vm.firstLoadingFinished = true;

                // Build the chart data
                vm.trafficChartData = [];
                for (var i = 0; i < vm.trafficReport.data.rows.length; i ++) {
                    var chartItem = {
                        dimension: vm.trafficReport.data.rows[i].dimensions[0],
                        value: vm.trafficReport.data.rows[i].metrics[0].values[0]
                    }
                    vm.trafficChartData.push(chartItem);
                }

                // configure chart
                var chart = new AmCharts.AmPieChart();
                chart.dataProvider = vm.trafficChartData;
                chart.titleField = "dimension";
                chart.valueField = "value";
                chart.depth3D = 20;
                chart.angle = 30;

                chart.write("traffic-report-chart");

            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }

        function requestEventsReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'events').then(function(reports) {

                if (reports.error) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }

                if (!reports.reports || !reports.reports[0].data.rows) {
                    vm.eventsReport = null;
                    vm.firstLoadingFinished = true;
                    return;
                }

                vm.eventsReport = reports.reports[0];
                vm.firstLoadingFinished = true;

            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app')
        .filter('percentString', percentString);

    function percentString() {
        return function(total, part) {
            if (total <= 0) {
                return '';
            }

            var percent = part / total * 100;
            return (percent.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + '%');
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app')
        .filter('secondsTohhmmss', secondsTohhmmss);

    function secondsTohhmmss() {
        return function(input) {
            if (!input) {
                return '00:00:00';
            }

            var totalSeconds = Math.round(input);

            var hours   = Math.floor(totalSeconds / 3600);
            var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
            var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

            // round seconds
            seconds = Math.round(seconds * 100) / 100

            var result = (hours < 10 ? "0" + hours : hours);
            result += ":" + (minutes < 10 ? "0" + minutes : minutes);
            result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
            return result;
        }
    }
})();

(function() {
    'use strict';

    angular.module('app.brands', [])
        .factory('BrandService', BrandService);

    BrandService.$inject = ['$http', 'CONST', '$q', '$rootScope', '$log'];

    /* @ngInject */
    function BrandService($http, CONST, $q, $rootScope, $log) {
        var api = CONST.api_domain + '/vendor/brands';

        var service = {
            lists: [],
            errors: [],
            add: add,
            edit: edit,
            delete: _delete,
            getAll: getAll,
            find: find,
            findInList: findInList,
            isEmpty: isEmpty,
            search: search,
            searchedList: []
        }

        return service;

        //////// SERIVCE METHODS ////////

        function search(str) {
            var url = api + '/search';
            var d = $q.defer();
            var q = str.toLowerCase();
            var results = [];

            if (str.trim() == '') {
                d.resolve(service.lists.brands);
            } else {
                angular.forEach(service.lists.brands, function(brand, index) {
                    if (brand.name.toLowerCase().indexOf(q) > -1) {
                        results.push(brand);
                    }
                });

                if (results.length > 0) {
                    d.resolve(results);
                } else {
                    $http.get(url, { query: str }).then(function(resp) {
                        service.searchedList = resp.data;
                        d.resolve(resp.data.brands);
                    }).catch(function(err) {
                        $log.log(err);
                        d.reject(err);
                    });
                }
            }

            return d.promise;
        }

        function isEmpty() {
            if (!angular.isDefined(service.lists.brands)) {
                return true;
            }

            return service.lists.total == 0;
        }

        function findInList(id) {
            var d = $q.defer();

            if (angular.isDefined(id)) {
                if (!isEmpty()) {
                    angular.forEach(service.lists.brands, function(value, key) {
                        if (id == service.lists.brands[key].uid) {
                            d.resolve(service.lists.brands[key]);
                        }
                    });
                } else {
                    find(id).then(function(brand) {
                        d.resolve(brand);
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.resolve('Brand does not exist.');
            }

            return d.promise;
        }

        function getAll() {
            var d = $q.defer();

            var req = {
                method: 'GET',
                url: api
            };

            $http(req)
                .then(function(data) {
                    service.lists = data.data;
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function find(id) {
            var d = $q.defer();
            var url = api + '/' + id;
            $http({
                    method: 'GET',
                    url: url,
                    //params: {id: id}
                })
                .then(function(data) {
                    var brand = data.data;
                    brand["facebook"] = brand.facebook_url;
                    brand["twitter"] = brand.twitter_url;
                    brand["instagram"] = brand.instagram_url;
                    d.resolve(brand);
                })
                .catch(function(error) {
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function setLogoImage(img) {
            var filebase64 = 'data:' + img.filetype + ';base64,' + img.base64;

            var data = {
                file: filebase64,
                description: img.description
            };

            return data;
        }

        function setCoverImage(img) {
            var filebase64 = 'data:' + img.filetype + ';base64,' + img.base64;

            var data = {
                file: filebase64,
                description: img.description
            };

            return data;
        }

        function add(data) {
            var url = api;
            var d = $q.defer();

            data.logo_image_attributes = setLogoImage(data.logo);
            data.cover_image_attributes = setCoverImage(data.cover);
            
            $log.log(data);
            // return false;
 
            $http.post(url, {brand: data})
                .then(function(resp) {
                    //$log.log(resp);
                    d.resolve(resp);
                }).catch(function(error) {
                    // $log.log(error);
                    service.errors = error;
                    d.reject(error.data.errors);
                });

            return d.promise;
        }

        function edit(id, data) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.patch(url, data)
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function _delete(id) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.delete(url, {})
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }
    }

})();
(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandAddController', BrandAddController);

    BrandAddController.$inject = ['BrandService', '$scope', 'HelperService', 'prepCurUser', '$state', '$log'];

    /* @ngInject */
    function BrandAddController(BrandService, $scope, HelperService, prepCurUser, $state, $log) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.form.facebook = "https://facebook.com/";
        vm.form.twitter = "https://twitter.com/";
        vm.form.instagram = "https://instagram.com/";
        vm.form.vendor_id = prepCurUser.uid;
        vm.response = {};
        vm.isDone = true;

        //Logo
        vm.clearImage = clearImage;
        vm.previewImage = previewImage;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addBrand;

        ///////////////////

        function previewImage(logo, elem, img) {
            var filebase64 = 'data:' + logo.filetype + ';base64,' + logo.base64;

            angular.element(elem).html('<label>' + img + ' Preview:</label><div><img src="' + filebase64 + '" style="width: 250px; height: auto;border: 1px solid #f0f0f0;" /></div>');
        }

        function clearImage(imgModel, container) {
            imgModel.file = null;
            imgModel.file = "";
            imgModel.description = "";
            angular.element(container).html('');
        }

        function addBrand() {
            vm.isDone = false;
            //vm.form.logo_image = "default.png"; //temporary
            //vm.form.brand_image = "default.png"; //temporary
            BrandService.add(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Added brand: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getBrands();
                $state.go(vm.prevState);

            }).catch(function(errors) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add new Brand.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandController', BrandController);

    BrandController.$inject = ['BrandService', 'brandPrepService', '$log'];

    /* @ngInject */
    function BrandController(BrandService, brandPrepService, $log) {
        var vm = this;

        vm.prepBrands = brandPrepService;
        vm.brands = vm.prepBrands.brands;
        vm.getBrands = getBrands;
        vm.hasDeleted = false;
        vm.response = {};
        vm.deleteBrand = deleteBrand;
        vm.response = {};
        vm.isDone = false;
        vm.search = search;
        vm.searchItem = '';
        vm.isLoading = false;
        vm.isSearch = false;
        vm.clearSearch = clearSearch;
        vm.isBrandEmpty = BrandService.isEmpty();

        //activate();

        ////////////////

        function activate() {
            return getBrands();
        }

        function clearSearch() {
            vm.searchItem = '';
            search();
        }

        function search() {
            vm.isLoading = true;

            if (vm.searchItem.trim().length > 0) {
                vm.isSearch = true;
            } else {
                vm.isSearch = false;
            }

            BrandService.search(vm.searchItem).then(function(resp) {
                vm.brands = resp;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
            });
        }

        function getBrands() {
            return BrandService.getAll().then(function(data) {
                vm.prepBrands = data;
                vm.brands = vm.prepBrands.brands;
                vm.isBrandEmpty = BrandService.isEmpty();
                return vm.brands;
            });
        }

        function deleteBrand(element, brand) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete brand: <b>" + brand.name + "</b>?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function(result) {
                    if (result) {
                        Ladda.create(element).start();
                        doDelete(brand);
                    }
                }
            });

        }

        function doDelete(brand) {
            BrandService.delete(brand.uid).then(function(resp) {
                vm.hasDeleted = true;
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted brand: " + brand.name;
                getBrands();
                vm.hasAdded = true;
                vm.isDone = true;
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to delete brand: " + brand.name;
                vm.hasAdded = true;
                vm.isDone = true;
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandEditController', BrandEditController);

    BrandEditController.$inject = ['BrandService', '$stateParams', '$scope', 'prepSelBrand', 'HelperService', '$state', '$log'];

    /* @ngInject */
    function BrandEditController(BrandService, $stateParams, $scope, prepSelBrand, HelperService, $state, $log) {
        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.brandId = $stateParams.id;
        vm.selectedBrand = prepSelBrand;
        vm.form = vm.selectedBrand;
        vm.isDone = true;

        //Logo
        //vm.form.logo.description = vm.form.logo_image
        vm.clearImage = clearImage;
        vm.previewImage = previewImage;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editPost;

        activate();

        ///////////////////

        function activate() {
            $log.log(vm.form);
            //console.log('hey');
            // BrandService.find(vm.brandId).then(function(data) {
            //     vm.selectedBrand = data;
            //     vm.form = vm.selectedBrand;
            // });

            // vm.$watch('form.logo', function() {
            //     $log.log(vm.form.logo);
            // });
        }

        function previewImage(logo, elem, img) {
            var filebase64 = 'data:' + logo.filetype + ';base64,' + logo.base64;

            angular.element(elem).html('<label>' + img + ' Preview:</label><div><img src="' + filebase64 + '" style="width: 250px; height: auto;border: 1px solid #f0f0f0;" /></div>');
        }

        function clearImage(imgModel, container) {
            imgModel.file = null;
            imgModel.file = "";
            imgModel.description = "";
            angular.element(container).html('');
        }

        function editPost() {
            vm.isDone = false;
            //vm.form.logo_image = "default.png"; //temporary
            //vm.form.brand_image = "default.png"; //temporary

            BrandService.edit(vm.brandId, vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated brand: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getBrands();
                $state.go(vm.prevState);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update Brand.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandViewController', BrandViewController);

    BrandViewController.$inject = ['BrandService', '$stateParams', '$scope', 'prepSelBrand', 'HelperService', '$log'];

    /* @ngInject */
    function BrandViewController(BrandService, $stateParams, $scope, prepSelBrand, HelperService, $log) {
        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.brandId = $stateParams.id;
        vm.brand = prepSelBrand;
        vm.isDone = false;

        //Images
        vm.openEditImageModal = openEditImageModal;

        vm.prevState = HelperService.getPrevState();

        //activate();

        ///////////////////

        function activate() {
            BrandService.find(vm.brandId).then(function(data) {
                vm.brand = data;
            });
        }

        function openEditImageModal(elem) {
            $(elem).parents('.image-view-container').find('.image-modal').modal('show');
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.deals', [
            'app.deals.highlightadd',
            'app.deals.highlightedit',
            'app.deals.highlightfield',
            'app.deals.templateadd',
            'app.deals.templateedit',
            'app.deals.templatefield',
            'app.deals.templatemodal',
            'app.deals.templatemodaledit',
            'app.deals.image'
        ])
        .factory('DealService', DealService);

    DealService.$inject = ['$http', 'CONST', '$q', 'HelperService', 'BrandService', '$rootScope', '$filter', '$log'];

    /* @ngInject */
    function DealService($http, CONST, $q, HelperService, BrandService, $rootScope, $filter, $log) {
        var api = CONST.api_domain + '/admin/deals';

        var service = {
            lists: [],
            errors: [],
            add: add,
            edit: edit,
            delete: _delete,
            getAll: getAll,
            find: find,
            findInList: findInList,
            isEmpty: isEmpty,
            addHighlights: addHighlights,
            addTemplates: addTemplates,
            search: search,
            searchedList: [],
            highlights: [],
            templates: [],
            getHighlights: getHighlights,
            getTemplates: getTemplates,
            removeHighlights: removeHighlights,
            updateHighlights: updateHighlights,
            //removeTemplates: removeTemplates,
            //updateTemplates: updateTemplates,
            templateNames: [],
            templateTypes: [],
            getTemplateNames: getTemplateNames,
            getTemplateTypes: getTemplateTypes,
            getStandardDiscounts: getStandardDiscounts,
            getEarlyBirdDiscounts: getEarlyBirdDiscounts,
            dealImagesList: [],
            getDealImages: getDealImages,
            setActive: setActive
        }

        return service;

        //////// SERIVCE METHODS ////////

        function getDealImages(dealId) {
            var d = $q.defer();

            // if (service.dealImagesList.length > 0) {
            //     d.resolve(service.dealImagesList);
            // } else {
            //     var url = api + '/' + dealId + '/images';
            //     $http.get(url).then(function(resp) {
            //         service.dealImagesList = resp.data.images;
            //         d.resolve(resp.data.images);
            //     }).catch(function(err) {
            //         $log.log(err);
            //         d.reject(err);
            //     });
            // }

            var url = api + '/' + dealId + '/images';
            $http.get(url).then(function(resp) {
                service.dealImagesList = resp.data.images;
                d.resolve(resp.data.images);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getEarlyBirdDiscounts(dealId) {
            var d = $q.defer();
            var url = api + '/' + dealId + '/discounts/early_bird';

            $http.get(url).then(function(resp) {
                var discounts = resp.data.discounts;
                angular.forEach(discounts, function(discount, index) {
                    if (discount.is_active) {
                        discounts[index]['status'] = 'active';
                    } else if (discount.is_suspended) {
                        discounts[index]['status'] = 'suspended';
                    }

                    if (discount.is_percentage) {
                        discounts[index]['value_type'] = 'percentage';
                    } else if (discount.is_unit) {
                        discounts[index]['value_type'] = 'unit';
                    }
                });
                d.resolve(discounts);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getStandardDiscounts(dealId) {
            var d = $q.defer();
            var url = api + '/' + dealId + '/discounts/standard';

            $http.get(url).then(function(resp) {
                //$log.log(resp);
                var discounts = resp.data.discounts;
                angular.forEach(discounts, function(discount, index) {
                    if (discount.is_active) {
                        discounts[index]['status'] = 'active';
                    } else if (discount.is_suspended) {
                        discounts[index]['status'] = 'suspended';
                    }

                    if (discount.is_percentage) {
                        discounts[index]['value_type'] = 'percentage';
                    } else if (discount.is_unit) {
                        discounts[index]['value_type'] = 'unit';
                    }
                });
                d.resolve(discounts);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getTemplateTypes() {
            var d = $q.defer();

            if (service.templateTypes.length > 0) {
                d.resolve(service.templateTypes);
            } else {
                var url = CONST.api_domain + '/templates/types';
                $http.get(url).then(function(resp) {
                    service.templateTypes = resp.data.template_types;
                    d.resolve(resp.data.template_types);
                }).catch(function(err) {
                    $log.log(err);
                    d.reject(err);
                });
            }

            return d.promise;
        }

        function getTemplateNames() {
            var d = $q.defer();

            if (service.templateNames.length > 0) {
                d.resolve(service.templateNames);
            } else {
                var url = CONST.api_domain + '/templates/names';
                $http.get(url).then(function(resp) {
                    service.templateNames = resp.data.template_names;
                    d.resolve(resp.data.template_names);
                }).catch(function(err) {
                    $log.log(err);
                    d.reject(err);
                });
            }

            return d.promise;
        }

        function removeHighlights(dealId, highlights) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();
            var tasks = [];

            angular.forEach(highlights, function(val, index) {
                tasks.push(function(cb) {
                    $http.delete(url + '/' + val.uid).then(function(resp) {
                        //d.resolve(resp);
                        cb(null, resp);
                    }).catch(function(err) {
                        $log.log(error);
                        // service.errors = error;
                        // d.reject(error);
                        cb(err);
                    });
                });
            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    $log.log(error);
                    d.reject(error);
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function updateHighlights(dealId, highlights) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();
            var tasks = [];

            angular.forEach(highlights, function(val, index) {
                tasks.push(function(cb) {
                    var data = {
                        title: val.title
                    };

                    $http.patch(url + '/' + val.uid, data).then(function(resp) {
                        //d.resolve(resp);
                        cb(null, resp);
                    }).catch(function(err) {
                        $log.log(error);
                        // service.errors = error;
                        // d.reject(error);
                        cb(err);
                    });
                });
            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    $log.log(error);
                    d.reject(error);
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function getTemplates(dealId) {
            var url = api + '/' + dealId + '/templates';
            var d = $q.defer();

            $http.get(url).then(function(resp) {
                service.templates = resp.data.templates;

                angular.forEach(service.templates, function(template, index) {
                    if (template.is_archived) {
                        service.templates[index]['status'] = 'archived';
                    } else if (template.is_draft) {
                        service.templates[index]['status'] = 'draft';
                    } else if (template.is_published) {
                        service.templates[index]['status'] = 'published';
                    } else {
                        service.templates[index]['status'] = 'draft';
                    }
                });



                d.resolve(service.templates);
            }).catch(function(err) {
                $log.log(err);
                service.errors.push(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getHighlights(dealId) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();

            $http.get(url).then(function(resp) {
                service.highlights = resp.data.highlights;
                d.resolve(service.highlights);
            }).catch(function(err) {
                $log.log(err);
                service.errors.push(err);
                d.reject(err);
            });

            return d.promise;
        }

        function search(str) {
            var url = api + '/search';
            var d = $q.defer();
            var q = str.toLowerCase();
            var results = [];

            if (str.trim() == '') {
                d.resolve(service.lists.deals);
            } else {
                angular.forEach(service.lists.deals, function(brand, index) {
                    if (brand.name.toLowerCase().indexOf(q) > -1) {
                        results.push(brand);
                    }
                });

                if (results.length > 0) {
                    d.resolve(results);
                } else {
                    $http.get(url, { query: str }).then(function(resp) {
                        service.searchedList = resp.data;
                        d.resolve(resp.data.deals);
                    }).catch(function(err) {
                        $log.log(err);
                        d.reject(err);
                    });
                }
            }

            return d.promise;
        }

        function addHighlights(dealId, highlights) {
            var d = $q.defer();

            var url = api + '/' + dealId + '/highlights/collection';

            var highlightsArr = [];
            angular.forEach(highlights, function(val, key) {
                var obj = {
                    title: val
                };

                highlightsArr.push(obj);

                // function handleCb(cb) {
                //     $http.post(url, highlights).then(function(resp) {
                //         //d.resolve(resp);
                //         cb(null, resp);
                //     }).catch(function(err) {
                //         // $log.log(error);
                //         // service.errors = error;
                //         // d.reject(error);
                //         cb(err);
                //     });
                // }

            });
            var data = {
                highlight: {
                    highlights: highlightsArr
                }
            };

            $http.post(url, data)
                .then(function(resp) {
                    // var dealId = resp.uid;
                    // addHighlights(dealId, data.highlights).then(function(resp) {
                    //     d.resolve(resp);
                    // }).catch(function(err) {
                    //     d.reject(err);
                    // });
                    // d.resolve(resp);
                    d.resolve('');
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    //d.reject(error);
                    d.resolve('Failed to add highlight. ')
                });

            // async.parallel(tasks, function(error, results) {
            //     if (error) {
            //         d.reject(error);
            //     } else {
            //         d.resolve(results);
            //     }

            // });

            return d.promise;
        }

        function isEmpty() {
            if (!angular.isDefined(service.lists.deals)) {
                return true;
            }

            return service.lists.total == 0;
        }

        function findInList(id) {
            var d = $q.defer();

            if (angular.isDefined(id)) {
                if (!isEmpty()) {
                    var deal = null;

                    angular.forEach(service.lists.deals, function(value, key) {
                        if (id == service.lists.deals[key].uid) {
                            deal = service.lists.deals[key];
                        }
                    });

                    deal["price"] = parseFloat(deal.price);
                    deal["amazon_rating"] = parseFloat(deal.amazon_rating);

                    var dateStart = HelperService.convertToDateTime(deal.starts_at);
                    var dateEnd = HelperService.convertToDateTime(deal.ends_at);
                    deal['date_start'] = dateStart;
                    deal['date_end'] = dateEnd;

                    BrandService.findInList(deal.brand_id).then(function(brand) {
                        deal['brand'] = brand;
                        d.resolve(deal);
                    });

                    d.resolve(deal);
                } else {
                    find(id).then(function(deal) {
                        d.resolve(deal);
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.resolve('Deal does not exist.');
            }

            return d.promise;
        }

        function getAll() {
            var d = $q.defer();

            $http.get(api)
                .then(function(data) {
                    service.lists = data.data;
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    $log.log(error.data);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function find(id) {
            var d = $q.defer();
            var url = api + '/' + id;

            $http({
                    method: 'GET',
                    url: url,
                    //params: {id: id}
                })
                .then(function(data) {
                    ComponentsDateTimePickers.init();
                    var deal = data.data;
                    deal["price"] = parseFloat(deal.price);
                    deal["amazon_rating"] = parseFloat(deal.amazon_rating);

                    var dateStart = HelperService.convertToDateTime(deal.starts_at);
                    var dateEnd = HelperService.convertToDateTime(deal.ends_at);
                    deal['date_start'] = dateStart;
                    deal['date_end'] = dateEnd;
                    //$log.log(dateStart);
                    //$log.log(dateStart.date);
                    deal['date_starts'] = dateStart.date;
                    deal['time_starts'] = dateStart.time;

                    deal['date_ends'] = dateEnd.date;
                    deal['time_ends'] = dateEnd.time;

                    //DISABLED
                    BrandService.findInList(deal.brand_id).then(function(brand) {
                        deal['brand'] = brand;
                        d.resolve(deal);
                    });
                    //d.resolve(deal);
                })
                .catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function addTemplates(deal_id, templates) {
            var d = $q.defer();

            var url = api + '/' + deal_id + '/templates';

            var tasks = [];

            angular.forEach(templates, function(template, index) {
                if (angular.isDefined(template.name) && template.name.trim() != '') {
                    tasks.push(function(cb) {
                        template['templatable_id'] = deal_id;

                        $http.post(url, template).then(function(resp) {
                            //d.resolve(resp);
                            // cb(null, resp);
                            cb(null, '');
                        }).catch(function(err) {
                            $log.log(err);
                            // service.errors = error;
                            // d.reject(error);
                            //cb(err);
                            cb(null, 'Failed to add template. ');
                        });

                    });
                }

            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject('template');
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function addDiscounts(deal_id, discounts) {
            var d = $q.defer();

            var url = api + '/' + deal_id + '/discounts';

            var tasks = [];
            // $log.log(discounts);
            angular.forEach(discounts, function(discount, index) {
                if (angular.isDefined(discount.value) && discount.value.trim() != '') {
                    tasks.push(function(cb) {
                        $log.log(discount);
                        $http.post(url, discount)
                            .then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                $log.log(err);
                                var errors = HelperService.setErrorStr(err);
                                cb(null, err.data.errors);
                            });

                    });
                }

            });

            // for (var attr in discounts) {
            //     var discount = discounts[attr];
            //     $log.log(discount);
            //     if (discount != null) {
            //         tasks.push(function(cb) {
            //             $log.log(discount);
            //             $http.post(url, discount)
            //                 .then(function(resp) {
            //                     cb(null, resp);
            //                 }).catch(function(err) {
            //                     $log.log(err);
            //                     var errors = HelperService.setErrorStr(err);
            //                     cb(null, 'Failed to add discount. Reason: ' + errors + '. ');
            //                 });

            //         });
            //     }
            // }
            // var _obj = ["waaaa", "weee"];
            // angular.forEach(_obj, function(discount, index) {
            //     $log.log(discount);
            // });
            // angular.forEach(discounts, function(discount, index) {
            //     $log.log(discount);
            // });
            //$log.log(tasks);
            async.parallel(tasks, function(error, results) {
                if (error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject('discount');
                } else {
                    $log.log(results);
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function addFileImage(dealId, file) {
            var d = $q.defer();
            var url = api + '/' + dealId + '/images';

            var filebase64 = 'data:' + file.file.filetype + ';base64,' + file.file.base64;

            var data = {

                image: {
                    file: filebase64,
                    description: file.description
                }

            };
            //$log.log(data);
            $http.post(url, data).then(function(resp) {
                d.resolve(resp);
            }).catch(function(err) {
                d.reject(err);
            });

            return d.promise;
        }

        function add(data) {
            var url = api;
            var d = $q.defer();

            $http.post(url, data)
                .then(function(resp) {
                    //$log.log(resp);
                    //return false;
                    var dealId = resp.data.deal.uid;

                    var tasks = [];

                    if (data.file.length > 0) {
                        angular.forEach(data.file, function(img, index) {

                            if (angular.isObject(img.file)) {
                                tasks.push(function(cb) {
                                    addFileImage(dealId, img).then(function(resp) {
                                        cb(null, resp);
                                    }).catch(function(err) {
                                        $log.log(err);
                                        cb(err);
                                    });
                                });
                            }

                        });

                    }

                    if (data.highlights.length > 0) {
                        //$log.log(data.highlights);
                        tasks.push(function(cb) {
                            addHighlights(dealId, data.highlights).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                $log.log(err);
                                cb(err);
                            });
                        });
                    }

                    if (angular.isDefined(data.templates[0]) && angular.isDefined(data.templates[0].name) && data.templates[0].name.trim() != '' && data.templates[0].name.trim() != 'null') {
                        tasks.push(function(cb) {
                            addTemplates(dealId, data.templates).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                $log.log(err);
                                cb(err);
                            });
                        });
                    }
                    $log.log(angular.isDefined(data.discounts['d0']));
                    //if (angular.isDefined(data.discounts[0]) && angular.isDefined(data.discounts[0].value) && data.discounts[0].value.trim() != '' && data.discounts[0].value.trim() != 'null') {
                    if (HelperService.countModelLength(data.discounts) > 0) {
                        tasks.push(function(cb) {
                            addDiscounts(dealId, data.discounts).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                $log.log(err);
                                cb(err);
                            });
                        });
                    }

                    if (tasks.length > 0) {
                        async.parallel(tasks, function(error, results) {
                            if (error) {
                                $log.log(error);
                                service.errors = error;
                                d.reject(error);
                            } else {
                                d.resolve(results);
                            }

                        });
                    } else {
                        d.resolve(resp);
                    }


                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject('deal');
                });

            return d.promise;
        }

        function setOnePublish(templates) {
            var hasPublish = false;
            angular.forEach(templates, function(template, index) {
                if (template.status == 'published' && !hasPublish) {
                    hasPublish = true;
                } else if (template.status == 'published' && hasPublish) {
                    templates[index].status = 'draft';
                }
            });

            return templates;
        }

        function edit(id, data) {
            var url = api + "/" + id;
            var d = $q.defer();

            var tasks = [];
            var tasksSeries = [];

            //IMAGE ADD
            if (angular.isDefined(data.form.file)) {

                angular.forEach(data.form.file, function(img, index) {
                    if (angular.isObject(img.file) && angular.isDefined(img.file.filetype)) {

                        tasks.push(function(cb) {
                            addFileImage(id, img)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    $log.log(err);
                                    cb(err);
                                });
                        });
                    }

                });
            }

            //IMAGE DELETE
            if (angular.isDefined(data.removedImages)) {
                angular.forEach(data.removedImages, function(image, index) {
                    tasks.push(function(cb) {
                        $http.delete(api + '/' + id + '/images/' + image.uid)
                            .then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                cb(err);
                            });
                    });
                });

            }

            //IMAGE EDIT
            if (angular.isDefined(data.images)) {

                angular.forEach(data.images, function(img, index) {
                    if (angular.isObject(img.file) && angular.isDefined(img.file.filetype)) {
                        var filebase64 = 'data:' + img.file.filetype + ';base64,' + img.file.base64;

                        var data = {

                            image: {
                                file: filebase64,
                                description: img.description
                            }

                        }

                        tasks.push(function(cb) {
                            $http.patch(api + '/' + id + '/images/' + img.uid, data)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    $log.log(err);
                                    cb(err);
                                });
                        });
                    }

                });
            }

            //TEMPLATE ADD
            if (angular.isDefined(data.form.templates) && data.form.templates.length > 0) {
                //var url_ah = api + '/' + id + '/templates';

                angular.forEach(data.form.templates, function(template, index) {
                    //$log.log(angular.isDefined(template.name));
                    //$log.log(template.name);
                    if (angular.isDefined(template.name) && template.name.trim() != '') {
                        tasks.push(function(cb) {
                            template['templatable_id'] = id;
                            $http.post(api + '/' + id + '/templates', template)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    $log.log(err);
                                    cb(err);
                                });
                        });
                    }

                });
            }

            //HIGHLIGHT UPDATE
            if (angular.isDefined(data.highlights) && data.highlights.length > 0) {
                angular.forEach(data.highlights, function(val, index) {
                    //var url_h = url + '/highlights/' + val.uid;
                    var data_h = {
                        highlight: {
                            title: val.title
                        }
                    };

                    tasks.push(function(cb) {
                        $http.patch(url + '/highlights/' + val.uid, data_h).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //HIGHLIGHT DELETE
            if (angular.isDefined(data.removedHighlights) && data.removedHighlights.length > 0) {
                angular.forEach(data.removedHighlights, function(val, index) {
                    //var url_h = url + '/highlights/' + val.uid;

                    tasks.push(function(cb) {
                        $http.delete(url + '/highlights/' + val.uid).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //TEMPLATE UPDATE
            if (angular.isDefined(data.templates) && data.templates.length > 0) {
                angular.forEach(data.templates, function(template, index) {
                    //var url_h = url + '/templates/' + template.uid;

                    tasks.push(function(cb) {
                        template['templatable_id'] = id;
                        $http.patch(url + '/templates/' + template.uid, template).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //TEMPLATE DELETE
            if (angular.isDefined(data.removedTemplates) && data.removedTemplates.length > 0) {
                angular.forEach(data.removedTemplates, function(val, index) {
                    //var url_h = url + '/templates/' + val.uid;

                    tasks.push(function(cb) {
                        $http.delete(url + '/templates/' + val.uid).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //HIHGLIGHT
            if (angular.isDefined(data.form.highlights) && data.form.highlights.length > 0) {
                var highlightsArr = [];
                angular.forEach(data.form.highlights, function(val, index) {
                    var obj = {
                        title: val
                    };

                    highlightsArr.push(obj);
                });

                var data_h = {
                    highlight: {
                        highlights: highlightsArr
                    }
                };

                //var url_ah = api + '/' + id + '/highlights/collection';
                $log.log(data_h);
                tasks.push(function(cb) {
                    $http.post(api + '/' + id + '/highlights/collection', data_h)
                        .then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                });

            }

            tasks.push(function(cb) {
                $http.patch(url, data.form)
                    .then(function(resp) {
                        cb(null, resp);
                    }).catch(function(err) {
                        $log.log(err);
                        cb(err);
                    });
            });

            tasksSeries.push(function(cb) {
                async.parallel(tasks, function(err, results) {
                    if (err) {
                        // $log.log(err);
                        // service.errors = err;
                        // d.reject(err);
                        cb(err);
                    } else {
                        //d.resolve(results);
                        cb(null, results);
                    }

                });
            });
            // async.parallel(tasks, function(err, results) {
            //     if (err) {
            //         $log.log(err);
            //         service.errors = err;
            //         d.reject(err);
            //     } else {
            //         d.resolve(results);
            //     }

            // });

            //DISCOUNT DELETE
            if (angular.isDefined(data.removedDiscounts) && data.removedDiscounts.length > 0) {
                angular.forEach(data.removedDiscounts, function(val, index) {
                    //var url_h = url + '/discounts/' + val.uid;

                    tasksSeries.push(function(cb) {
                        $http.delete(url + '/discounts/' + val.uid).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err.data.errors);
                        });
                    });
                });
            }

            //DISCOUNT UPDATE
            if (angular.isDefined(data.discounts) && data.discounts.length > 0) {
                angular.forEach(data.discounts, function(discount, index) {
                    //var url_h = url + '/discounts/' + discount.uid;

                    tasksSeries.push(function(cb) {
                        $log.log(discount);
                        $http.patch(url + '/discounts/' + discount.uid, discount).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err.data.errors);
                        });
                    });
                });
            }
            //$log.log(data.form);
            //DISCOUNT ADD
            if (angular.isDefined(data.form.discounts) && HelperService.countModelLength(data.form.discounts) > 0) {
                //var url_ah = url + '/discounts';

                angular.forEach(data.form.discounts, function(discount, index) {
                    if (angular.isDefined(discount.value) && discount.value.trim() != '' && discount.value.trim() !== 'null') {
                        //discount.codes_expire_at = HelperService.combineDateTime(discount.codes_expire_at, '00:00:00');
                        //$log.log(discount);
                        tasksSeries.push(function(cb) {

                            $http.post(url + '/discounts', discount)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    $log.log(err);
                                    cb(err.data.errors);
                                });
                        });
                    }

                });
            }

            //DISCOUNT only
            async.series(tasksSeries, function(err, results) {
                if (err) {
                    $log.log(err);
                    service.errors = err;
                    d.reject(err);
                } else {
                    d.resolve(results);
                }
            });


            return d.promise;
        }

        function _delete(id) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.delete(url, {})
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function setActive(selFieldModel, newDiscounts, discountsData, type, mode) {
            var existingCount = HelperService.countModelLength($filter('getActiveStandard')(discountsData));
            var newCount = HelperService.countModelLength($filter('getActiveStandard')(newDiscounts));

            if (type == 'standard' && mode == 'Edit') {
                if (selFieldModel.status == 'active') { //Set to suspended
                    bootbox.alert('There must be one active standard discount.');
                } else { //set to active

                    bootbox.confirm({
                        title: "Confirm Active Standard",
                        message: "You have set this standard discount as \"Active\". You have an active standard discount running at the moment.<br ><br >Press \"Yes\" to proceed and the current active standard discount will be suspended.<br ><br >Press \"No\" and the new standard discount will be set to \"Suspended\".",
                        buttons: {
                            confirm: {
                                label: 'Yes',
                                className: 'btn-success'
                            },
                            cancel: {
                                label: 'No',
                                className: 'btn-danger'
                            }
                        },
                        callback: function(result) {
                            if (result) {
                                //$log.log('test');
                                reverseStatus(type, discountsData, newDiscounts);
                                $rootScope.$digest();
                            }
                        }
                    });

                }
            } else {
                if (type == 'standard' && mode == 'Add') {
                    // if (existingCount + newCount == 1) {
                    //     angular.forEach($filter('whereAttr')(newDiscounts, 'discount_type', type), function(discount, index) {
                    //         if (discount == selFieldModel) {
                    //             discount.status = 'active';
                    //         }
                    //     });
                    // }
                    // else {
                    reverseStatus(type, discountsData, newDiscounts);
                    // }

                } else {
                    //Existing discounts
                    angular.forEach($filter('whereAttr')(discountsData, 'discount_type', type), function(discount, index) {
                        if (discount == selFieldModel) {
                            discount.status = $filter('reverseStatus')(discount);
                        }
                    });
                    //New discounts
                    angular.forEach($filter('whereAttr')(newDiscounts, 'discount_type', type), function(discount, index) {
                        if (discount == selFieldModel) {
                            discount.status = $filter('reverseStatus')(discount);
                        }
                    });
                }

            }
        }

        function reverseStatus(type, discountsData, newDiscounts) {
            //Existing discounts
            angular.forEach($filter('whereAttr')(discountsData, 'discount_type', type), function(discount, index) {
                discount.status = $filter('reverseStatus')(discount);
            });
            //New discounts
            angular.forEach($filter('whereAttr')(newDiscounts, 'discount_type', type), function(discount, index) {
                discount.status = $filter('reverseStatus')(discount);
            });
        }
    }

})();
(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealAddController', DealAddController);

    DealAddController.$inject = ['DealService', '$scope', 'HelperService', '$state', 'brandPrepService', 'prepTemplateNames', 'prepTemplateTypes'];

    /* @ngInject */
    function DealAddController(DealService, $scope, HelperService, $state, brandPrepService, prepTemplateNames, prepTemplateTypes) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.form.highlights = [];
        vm.form.templates = [];
        vm.form.discounts = {};
        vm.response = {};
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];
        vm.removeHighlight = removeHighlight;

        //template
        vm.templateCounter = 0;
        vm.increTemplateCounter = increTemplateCounter;
        vm.selTemplateIndex = 0;
        vm.setSelTemplateIndex = setSelTemplateIndex;
        vm.selTemplateObj = {};
        vm.setSelTemplateObj = setSelTemplateObj;
        vm.templateNames = prepTemplateNames;
        vm.templateTypes = prepTemplateTypes;
        vm.removeTemplate = removeTemplate;
        vm.priceFormat = priceFormat;

        //discount
        vm.discountCounter = 0;
        vm.increDiscountCounter = increDiscountCounter;
        vm.selDiscountIndex = 0;
        vm.setSelDiscountIndex = setSelDiscountIndex;
        vm.selDiscountObj = {};
        vm.setSelDiscountObj = setSelDiscountObj;
        vm.removeDiscount = removeDiscount;
        vm.standardDiscounts = [];
        vm.earlyBirdDiscounts = [];
        vm.hasStandardDiscounts = hasStandardDiscounts;
        vm.hasEarlybirdDiscounts = hasEarlybirdDiscounts;
        vm.openDiscountModal = openDiscountModal;
        vm.removeSelDiscount = removeSelDiscount;
        vm.removedDiscountObjs = [];
        vm.setActive = setActive;
        vm.discounts = [];

        //image
        vm.form.file = [];
        vm.imageCounter = 0;
        vm.getImageCounter = getImageCounter;
        vm.removeAddedImage = removeAddedImage;
        vm.insertNewImageObj = insertNewImageObj;
        vm.latestImgIndex = latestImgIndex;
        vm.blankFn = blankFn;

        vm.updateDateDiff = updateDateDiff;
        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addDeal;
        vm.isDealEmpty = DealService.isEmpty();
        vm.isBrandEmpty = brandPrepService.total == 0;

        activate();

        ///////////////////

        function activate() {
            // angular.element('.start-date').datepicker({
            //     orientation: "left",
            //     autoclose: true
            // });
            //ComponentsDateTimePickers.init();
            insertNewImageObj();
            $(document).ready(function() {
                ComponentsDateTimePickers.init();
            });
            // vm.$watch('vm.form.price', function(newVal, oldVal) {
            //     $log.log(newVal);
            //     return newVal.toFixed(2);
            // });
        }

        function blankFn() {
            return false;
        }

        function latestImgIndex() {
            return vm.form.file.length - 1;
        }

        function insertNewImageObj() {
            var obj = {
                file: "",
                description: ""
            };
            vm.form.file.push(obj);
        }

        function removeAddedImage(image) {
            angular.forEach(vm.form.file, function(img, index) {
                if (img === image) {
                    vm.form.file.splice(index, 1);
                }
            });
        }

        function getImageCounter() {
            return vm.imageCounter++;
        }

        function updateDateDiff() {
            vm.form.date_ends = '';

            var dateNow = new Date();
            var dateComp = new Date(vm.form.date_starts);

            var timeDiff = Math.abs(dateComp.getTime() - dateNow.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            $('#ending_date').datepicker({
                autoclose: true
            });

            $('#ending_date').datepicker('setStartDate', '+' + diffDays + 'd');

        }

        //Discount
        function removeSelDiscount(target, discountModel) {
            angular.element(target).parents('.discount-row').remove();
            vm.removeDiscount(discountModel);
        }

        function openDiscountModal(discountModel) {
            $('#discount-modal-edit').modal('show');
            vm.setSelDiscountObj(discountModel);
        }

        function hasStandardDiscounts() {
            var formDiscountCount = 0;
            //$log.log(vm.form.discounts);
            // for (var key in vm.form.discounts) {
            //     //$log.log(vm.form.discounts[key].discount_type);
            //     if (vm.form.discounts[key] != null && vm.form.discounts[key].discount_type == 'standard') {
            //         formDiscountCount++;
            //     }
            // }

            angular.forEach(vm.form.discounts, function(discount, index) {
                if (discount != null && discount.discount_type == 'standard') {
                    formDiscountCount++;
                }
            });

            return formDiscountCount > 0;
        }

        function hasEarlybirdDiscounts() {
            var formDiscountCount = 0;

            for (var key in vm.form.discounts) {
                //$log.log(vm.form.discounts[key].discount_type);
                if (vm.form.discounts[key] != null && vm.form.discounts[key].discount_type == 'early_bird') {
                    formDiscountCount++;
                }
            }

            return formDiscountCount > 0;
            // angular.forEach(vm.form.discounts, function(discount, index) {
            //     if (discount.value != 'null' &&
            //         discount.value != '' &&
            //         discount.weighting != null &&
            //         discount.weighting != 'null' &&
            //         discount.weighting != '' &&
            //         discount.coupon_count != null &&
            //         discount.coupon_count != 'null' &&
            //         discount.coupon_count != '' &&
            //         discount.coupon_limit != null &&
            //         discount.coupon_limit != 'null' &&
            //         discount.coupon_limit != '' &&
            //         discount.discount_type == 'early_bird') {
            //         formDiscountCount++;
            //     }
            // });

            // angular.forEach(vm.removedDiscountObjs, function(discount, index) {
            //     if (discount.value != 'null' && discount.value != '' && discount.discount_type == 'early_bird') {
            //         removedDiscountCount++;
            //     }
            // });

            // var discountCount = vm.earlyBirdDiscounts.length + formDiscountCount;
            // var rows = angular.element('.early-bird').find('.discount-row');

            // // if (discountCount == removedDiscountCount) {
            // if (removedDiscountCount == 0 && (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0)) {
            //     return true;
            // }

            // if (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length == 0 && formDiscountCount > 0) {
            //     return true;
            // }

            // // if (formDiscountCount == 0 && rows.length == 0) {
            // //     return false;
            // // }

            // if (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length == 0 && formDiscountCount == 0) {
            //     return false;
            // }

            // return (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0);

        }

        function removeDiscount(discount) {
            // angular.forEach(vm.form.discounts, function(val, attr) {
            //     $log.log(discount == val);
            //     if (discount == val) {
            //         //$log.log('test')
            //         //vm.form.discounts.splice(index, 1);
            //         delete vm.form.discounts[attr];
            //     }
            // });
            for (var attr in vm.form.discounts) {
                $log.log(discount == vm.form.discounts[attr]);
                if (discount == vm.form.discounts[attr]) {
                    vm.form.discounts[attr] = null;
                }
            }
        }

        function setSelDiscountObj(dobj) {
            vm.selDiscountObj = dobj;
        }

        function setSelDiscountIndex(index) {
            vm.selDiscountIndex = index;
        }

        function increDiscountCounter() {
            vm.discountCounter++;
        }
        //End Discount

        //Template
        function priceFormat() {
            var price = vm.form.price;

            vm.form.price = parseFloat(price).toFixed(2) + '';
        }

        function removeTemplate(template_index) {
            angular.forEach(vm.form.templates, function(val, index) {
                if (index == template_index) {
                    $log.log('test')
                    vm.form.templates.splice(index, 1);
                }
            });
        }

        function setSelTemplateObj(tobj) {
            vm.selTemplateObj = tobj;
        }

        function setSelTemplateIndex(index) {
            vm.selTemplateIndex = index;
        }

        function increTemplateCounter() {
            vm.templateCounter++;
        }
        //END Template


        function addDeal() {
            vm.isDone = false;
            //temporary
            //vm.form.brand_id = '3228eb88-6810-4b28-ae52-88a62e4655c3';

            vm.isDone = false;
            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);

            //$log.log(vm.form);
            //return false;
            if (!checkHasActiveStandardDiscount()) {
                bootbox.alert({
                    title: "No active standard discount!",
                    message: "Please add a single active standard discount to add new deal."
                });
                vm.isDone = true;
                return false;
            }

            DealService.add(vm.form).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                // vm.response['msg'] = "Added new deal: " + vm.form.name + ' ' + resp;
                vm.response['msg'] = "Added new deal.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getDeals();
                $state.go(vm.prevState);

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add deal.";
                vm.response['error_arr'] = err;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }

        function checkHasActiveStandardDiscount() {
            var discounts = vm.form.discounts;
            var hasActive = false;
            for (var key in discounts) {
                if (discounts[key].discount_type == 'standard' && discounts[key].status == 'active') {
                    hasActive = true;
                }
            }

            return hasActive;
        }

        function setActive(selFieldModel, newDiscounts, discountsData, type, mode) {
            DealService.setActive(selFieldModel, newDiscounts, discountsData, type, mode);
        }

        function removeHighlight(highlightId) {

        }
    }
})();
(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealController', DealController);

    DealController.$inject = ['DealService', 'dealPrepService'];

    /* @ngInject */
    function DealController(DealService, dealPrepService) {
        var vm = this;

        vm.prepDeals = dealPrepService;
        vm.deals = vm.prepDeals.deals;
        vm.getDeals = getDeals;
        vm.hasDeleted = false;
        vm.response = {};
        vm.deleteDeal = deleteDeal;
        vm.response = {};
        vm.isDone = false;
        vm.search = search;
        vm.searchItem = '';
        vm.isLoading = false;
        vm.isSearch = false;
        vm.clearSearch = clearSearch;
        vm.isDealEmpty = DealService.isEmpty();

        //activate();

        ////////////////

        function activate() {
            return getDeals();
        }

        function clearSearch() {
            vm.searchItem = '';
            search();
        }

        function search() {
            vm.isLoading = true;

            if (vm.searchItem.trim().length > 0) {
                vm.isSearch = true;
            } else {
                vm.isSearch = false;
            }

            DealService.search(vm.searchItem).then(function(resp) {
                vm.deals = resp;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
            });
        }

        function getDeals() {
            return DealService.getAll().then(function(data) {
                vm.prepDeals = data;
                vm.deals = vm.prepDeals.deals;
                return vm.deals;
            });
        }

        function deleteDeal(element, deal) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete deal: <b>" + deal.name + "</b>?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function(result) {
                    if (result) {
                        Ladda.create(element).start();
                        doDelete(deal);
                    }
                }
            });
        }

        function doDelete(deal) {
            DealService.delete(deal.uid).then(function(resp) {
                vm.hasDeleted = true;
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted deal: " + deal.name;
                getDeals();
                vm.hasAdded = true;
                vm.isDone = true;
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to delete deal: " + deal.name;
                vm.hasAdded = true;
                vm.isDone = true;
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealEditController', DealEditController);

    DealEditController.$inject = [
        'DealService',
        '$stateParams',
        '$scope',
        'prepSelDeal',
        'HelperService',
        '$state',
        'brandPrepService',
        'prepSelHighlights',
        'prepSelTemplates',
        'prepTemplateNames',
        'prepTemplateTypes',
        'prepStandardD',
        'prepEarlyBirdD',
        'prepDealImages',
        '$filter',
        '$log'
    ];

    /* @ngInject */
    function DealEditController(DealService,
        $stateParams,
        $scope,
        prepSelDeal,
        HelperService,
        $state,
        brandPrepService,
        prepSelHighlights,
        prepSelTemplates,
        prepTemplateNames,
        prepTemplateTypes,
        prepStandardD,
        prepEarlyBirdD,
        prepDealImages,
        $filter,
        $log
    ) {

        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.selectedDeal = prepSelDeal;
        vm.form = vm.selectedDeal;
        vm.form.highlights = [];
        vm.form.templates = [];
        vm.form.discounts = {};
        //vm.form.highlights = vm.selectedDeal.highlights;
        vm.highlights = prepSelHighlights;
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];
        vm.removeHighlight = removeHighlight;
        vm.removedHighlightObjs = [];

        //template
        vm.templates = prepSelTemplates;
        vm.removedTemplateObjs = [];
        vm.templateCounter = 0;
        vm.increTemplateCounter = increTemplateCounter;
        vm.selTemplateIndex = 0;
        vm.setSelTemplateIndex = setSelTemplateIndex;
        vm.selTemplateObj = {};
        vm.setSelTemplateObj = setSelTemplateObj;
        vm.templateNames = prepTemplateNames;
        vm.templateTypes = prepTemplateTypes;
        vm.removeTemplate = removeTemplate;
        vm.priceFormat = priceFormat;

        //discount
        vm.discounts = prepStandardD.concat(prepEarlyBirdD);
        vm.removedDiscountObjs = [];
        vm.discountCounter = 0;
        vm.increDiscountCounter = increDiscountCounter;
        vm.selDiscountIndex = 0;
        vm.setSelDiscountIndex = setSelDiscountIndex;
        vm.selDiscountObj = {};
        vm.setSelDiscountObj = setSelDiscountObj;
        vm.removeDiscount = removeDiscount;
        vm.standardDiscounts = prepStandardD;
        vm.earlyBirdDiscounts = prepEarlyBirdD;
        vm.hasStandardDiscounts = hasStandardDiscounts;
        vm.hasEarlybirdDiscounts = hasEarlybirdDiscounts;
        vm.openDiscountModal = openDiscountModal;
        vm.removeSelDiscount = removeSelDiscount;
        vm.setActive = setActive;

        //images
        vm.form.file = [];
        vm.images = prepDealImages;
        vm.removeImage = removeImage;
        vm.removedImageObj = [];
        vm.imageCounter = 0;
        vm.getImageCounter = getImageCounter;
        vm.insertNewImageObj = insertNewImageObj;
        vm.latestImgIndex = latestImgIndex;
        vm.blankFn = blankFn;
        vm.openEditImageModal = openEditImageModal;
        vm.removeAddedImage = removeAddedImage;

        vm.updateDateDiff = updateDateDiff;
        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editDeal;

        activate();

        ///////////////////

        function activate() {
            //$log.log(vm.discounts);
            insertNewImageObj();
            // angular.element('.start-date').datepicker({
            //     orientation: "left",
            //     autoclose: true
            // });
            //$log.log(vm.discounts);
            priceFormat();
            // DealService.find(vm.dealId).then(function(data) {
            //     vm.selectedDeal = data;
            //     vm.form = vm.selectedDeal;
            // });
            //temporary workaround
            $(document).ready(function() {
                ComponentsDateTimePickers.init();
                $('[data-toggle="tooltip"]').tooltip();
            });
        }

        function removeSelDiscount(target, discountModel) {
            if (discountModel.discount_type == 'standard' && discountModel.status == 'active') {
                bootbox.alert("You can't remove an active standard discount!");
            } else {
                angular.element(target).parents('.discount-row').remove();
                vm.removeDiscount(discountModel);
            }

        }

        function openDiscountModal(discountModel) {
            $('#discount-modal-edit').modal('show');
            vm.setSelDiscountObj(discountModel);
        }

        function hasStandardDiscounts() {
            var formDiscountCount = 0;
            var removedDiscountCount = 0;

            angular.forEach(vm.form.discounts, function(discount, index) {
                // if (discount.value != 'null' && discount.value != '' && discount.discount_type == 'standard') {
                //     formDiscountCount++;
                // }
                if (discount != 'null' && discount.discount_type == 'standard') {
                    formDiscountCount++;
                }
            });

            angular.forEach(vm.removedDiscountObjs, function(discount, index) {
                if (discount != 'null' && discount.discount_type == 'standard') {
                    removedDiscountCount++;
                }
            });

            var discountCount = vm.standardDiscounts.length + formDiscountCount;

            if (discountCount == removedDiscountCount) {
                return false;
            }

            return angular.isDefined(vm.standardDiscounts) && vm.standardDiscounts.length > 0;
        }

        function hasEarlybirdDiscounts() {
            var formDiscountCount = 0;
            var removedDiscountCount = 0;

            angular.forEach(vm.form.discounts, function(discount, index) {
                if (discount != null && discount.discount_type == 'early_bird') {
                    formDiscountCount++;
                }
            });

            angular.forEach(vm.removedDiscountObjs, function(discount, index) {
                if (discount.value != 'null' && discount.value != '' && discount.discount_type == 'early_bird') {
                    removedDiscountCount++;
                }
            });

            var discountCount = vm.earlyBirdDiscounts.length + formDiscountCount;
            var rows = angular.element('.early-bird').find('.discount-row');

            // if (discountCount == removedDiscountCount) {
            if (removedDiscountCount == 0 && (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0)) {
                return true;
            }

            if (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length == 0 && formDiscountCount > 0) {
                return true;
            }

            // if (formDiscountCount == 0 && rows.length == 0) {
            //     return false;
            // }

            if (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length == 0 && formDiscountCount == 0) {
                return false;
            }

            return (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0);

        }

        function removeAddedImage(image) {
            angular.forEach(vm.form.file, function(img, index) {
                if (img === image) {
                    vm.form.file.splice(index, 1);
                }
            });
        }

        function openEditImageModal(elem) {
            $(elem).parents('.image-view-container').find('.image-modal').modal('show');
        }

        function blankFn() {
            return false;
        }

        function latestImgIndex() {
            return vm.form.file.length - 1;
        }

        function insertNewImageObj() {
            var obj = {
                file: "",
                description: ""
            };
            vm.form.file.push(obj);
        }

        function getFormImage() {
            //var index = getImageCounter();

            vm.form.file[vm.imageCounter] = {
                file: "",
                description: ""
            };

            return vm.form.file[vm.imageCounter++];
        }

        function getImageCounter() {
            return vm.imageCounter++;
        }

        function removeImage(elem, image) {
            vm.removedImageObj.push(image);
            $(elem).parents('.image-view-container').remove();
        }

        function updateDateDiff() {
            vm.form.date_ends = '';

            var dateNow = new Date();
            var dateComp = new Date(vm.form.date_starts);

            var timeDiff = Math.abs(dateComp.getTime() - dateNow.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            $('#ending_date').datepicker({
                autoclose: true
            });

            $('#ending_date').datepicker('setStartDate', '+' + diffDays + 'd');

        }

        //Discount
        function removeDiscount(discount) {
            //$log.log(vm.form.discounts);
            angular.forEach(vm.form.discounts, function(val, attr) {
                if (val == discount) {
                    //$log.log(attr);
                    //delete vm.form.discounts[attr];
                    vm.form.discounts[attr] = null;
                }
            });

            angular.forEach(vm.standardDiscounts, function(val, index) {
                if (val.uid == discount.uid) {
                    vm.standardDiscounts.splice(index, 1);
                }
            });

            angular.forEach(vm.earlyBirdDiscounts, function(val, index) {
                if (val.uid == discount.uid) {
                    vm.earlyBirdDiscounts.splice(index, 1);
                }
            });

            $log.log(vm.form.discounts);
            vm.removedDiscountObjs.push(discount);
        }

        function setSelDiscountObj(dobj) {
            vm.selDiscountObj = dobj;
        }

        function setSelDiscountIndex(index) {
            vm.selDiscountIndex = index;
        }

        function increDiscountCounter() {
            vm.discountCounter++;
        }
        //End Discount

        function priceFormat() {
            var price = vm.form.price;

            vm.form.price = parseFloat(price).toFixed(2) + '';
        }

        function setSelTemplateObj(tobj) {
            vm.selTemplateObj = tobj;
        }

        function setSelTemplateIndex(index) {
            vm.selTemplateIndex = index;
        }

        function increTemplateCounter() {
            vm.templateCounter++;
        }

        function removeTemplate(template) {
            angular.forEach(vm.templates, function(val, index) {
                if (val.uid == template.uid) {
                    vm.templates.splice(index, 1);
                }
            });
            vm.removedTemplateObjs.push(template);
        }

        function removeHighlight(highlight) {
            angular.forEach(vm.highlights, function(val, index) {
                if (val.uid == highlight.uid) {
                    vm.highlights.splice(index, 1);
                }
            });
            vm.removedHighlightObjs.push(highlight);
        }

        function deleteHighligts() {

        }

        function editDeal() {
            vm.isDone = false;
            //temporary
            //vm.form.brand_id = '3228eb88-6810-4b28-ae52-88a62e4655c3';

            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);
            // $log.log(vm.form);
            // $log.log(vm.highlights);
            // $log.log(vm.removedHighlightObjs);
            // return false;
            vm.form.templates.splice(vm.form.templates.length - 1, 1);
            //vm.form.highlights.splice(vm.form.highlights.length - 1, 1);
            //$log.log(vm.form);
            var data = {
                form: vm.form,
                highlights: vm.highlights,
                removedHighlights: vm.removedHighlightObjs,
                templates: vm.templates,
                removedTemplates: vm.removedTemplateObjs,
                discounts: vm.discounts,
                removedDiscounts: vm.removedDiscountObjs,
                images: vm.images,
                removedImages: vm.removedImageObj
            };

            //$log.log(data);
            //return false;

            DealService.edit(vm.dealId, data).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated deal: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getDeals();
                $state.go(vm.prevState);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update deal.";
                vm.response['error_arr'] = err;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');

            });
        }

        function countActiveStandard(selFieldModel) {
            var dobj = selFieldModel;
            var countStandard = 0;
            // $log.log('---------');
            // $log.log(scope.fieldModel);
            angular.forEach(vm.form.discounts, function(discount, index) {
                if (discount != null && discount.discount_type == 'standard') {
                    if (discount.status == 'active') {
                        countStandard++;
                    }
                }
            });
            //$log.log(scope.discountsData);
            angular.forEach(vm.discounts, function(discount, index) {
                if (discount != null && discount.discount_type == 'standard' && dobj != discount) {
                    if (discount.status == 'active') {
                        countStandard++;
                    }
                }
            });

            // $log.log(countStandard);
            // $log.log('---------');

            return countStandard;
        }

        function setActive(selFieldModel, newDiscounts, discountsData, type, mode) {
            DealService.setActive(selFieldModel, newDiscounts, discountsData, type, mode);
        }

        function _setActive(selFieldModel, discountsData, type, mode) {
            if (type == 'standard') {
                var existingCount = HelperService.countModelLength($filter('getActiveStandard')(vm.discounts));
                var newCount = HelperService.countModelLength($filter('getActiveStandard')(vm.form.discounts));

                if (selFieldModel.status == 'active') { //Set to suspended
                    bootbox.alert('There must be one active standard discount.');
                } else { //set to active

                    bootbox.confirm({
                        title: "Confirm Active Standard",
                        message: "You have set this standard discount as \"Active\". You have an active standard discount running at the moment.<br ><br >Press \"Yes\" to proceed and the current active standard discount will be suspended.<br ><br >Press \"No\" and the new standard discount will be set to \"Suspended\".",
                        buttons: {
                            confirm: {
                                label: 'Yes',
                                className: 'btn-success'
                            },
                            cancel: {
                                label: 'No',
                                className: 'btn-danger'
                            }
                        },
                        callback: function(result) {
                            if (result) {
                                //$log.log('test');
                                reverseStatus(type);
                                $scope.$digest();
                            }
                        }
                    });

                }
            } else {
                //Existing discounts
                angular.forEach($filter('whereAttr')(vm.discounts, 'discount_type', type), function(discount, index) {
                    if (discount == selFieldModel) {
                        discount.status = $filter('reverseStatus')(discount);
                    }
                });
                //New discounts
                angular.forEach($filter('whereAttr')(vm.form.discounts, 'discount_type', type), function(discount, index) {
                    if (discount == selFieldModel) {
                        discount.status = $filter('reverseStatus')(discount);
                    }
                });
            }
        }

        function reverseStatus(type) {
            //Existing discounts
            angular.forEach($filter('whereAttr')(vm.discounts, 'discount_type', type), function(discount, index) {
                discount.status = $filter('reverseStatus')(discount);
            });
            //New discounts
            angular.forEach($filter('whereAttr')(vm.form.discounts, 'discount_type', type), function(discount, index) {
                discount.status = $filter('reverseStatus')(discount);
            });
        }

        function statusChange(selFieldModel) {
            if (selFieldModel.status == 'active') {
                selFieldModel.status = 'suspended';
            } else {
                selFieldModel.status = 'active';
            }

            var selDiscount = selFieldModel;
            var status = selDiscount.status;
            var countStandard = 0;
            //$log.log(selDiscount);
            var activeStandard = countActiveStandard(selFieldModel);
            //$log.log(activeStandard);
            if (status == 'active') {

                angular.forEach(vm.form.discounts, function(discount, index) {
                    if (discount != null && discount != selDiscount && discount.discount_type == 'standard') {
                        countStandard++;
                        if (discount.status == 'active') {
                            discount.status = 'suspended';
                        }
                    } else if (discount != null && discount.discount_type == 'early_bird') {
                        if (discount.status == 'active') {
                            discount.status = 'suspended';
                        } else {
                            discount.status = 'active'
                        }
                    }
                });

                if (vm.mode == 'Edit' && selDiscount.discount_type == 'standard') {

                    angular.forEach(vm.discounts, function(discount, index) {
                        countStandard++;
                        if (discount != null && discount.discount_type == 'standard') {
                            if (discount.status == 'active') {
                                discount.status = 'suspended';
                            }

                        } else if (discount != null && discount.discount_type == 'early_bird') {
                            if (discount.status == 'active') {
                                discount.status = 'suspended';
                            } else {
                                discount.status = 'active'
                            }
                        }
                    });
                }
                if (countStandard == 0 && selDiscount.discount_type == 'standard') {
                    selFieldModel.status = 'active';
                }
            } else if (selDiscount.discount_type == 'standard' && activeStandard == 0) {
                bootbox.alert('There must be one active standard discount.');
                selFieldModel.status = 'active';
            }


        }
    }
})();
(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealViewController', DealViewController);

    DealViewController.$inject = [
        'DealService',
        '$stateParams',
        '$scope',
        'prepSelDeal',
        'HelperService',
        'prepSelHighlights',
        'prepSelTemplates',
        'prepStandardD',
        'prepEarlyBirdD',
        'prepDealImages'
    ];

    /* @ngInject */
    function DealViewController(
        DealService,
        $stateParams,
        $scope,
        prepSelDeal,
        HelperService,
        prepSelHighlights,
        prepSelTemplates,
        prepStandardD,
        prepEarlyBirdD,
        prepDealImages
    ) {
        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.deal = prepSelDeal;
        vm.isDone = false;

        //Highlights
        vm.highlights = prepSelHighlights;

        //Templates
        vm.templates = prepSelTemplates;

        //Discounts
        vm.standardDiscounts = prepStandardD;
        vm.earlyBirdDiscounts = prepEarlyBirdD;
        vm.hasStandardDiscounts = hasStandardDiscounts;
        vm.hasEarlybirdDiscounts = hasEarlybirdDiscounts;

        //Images
        vm.images = prepDealImages;
        vm.openEditImageModal = openEditImageModal;

        vm.prevState = HelperService.getPrevState();

        //activate();

        ///////////////////

        function activate() {
            DealService.find(vm.dealId).then(function(data) {
                vm.deal = data;
            });
        }

        function openEditImageModal(elem) {
            $(elem).parents('.image-view-container').find('.image-modal').modal('show');
        }

        function hasStandardDiscounts() {
            return angular.isDefined(vm.standardDiscounts) && vm.standardDiscounts.length > 0;
        }

        function hasEarlybirdDiscounts() {
            return angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0;
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .filter('toCurrencyFormat', toCurrencyFormat);

    function toCurrencyFormat() {
        return function(input) {
            if (input) {
                var num = parseFloat(input);
                var currency = '$ ' + num.toFixed(2);

                return currency;
            }

            return input;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .filter('discountStatus', discountStatus);

    discountStatus.$inject = ['$filter'];
    /* @ngInject */
    function discountStatus($filter) {
        return function(discount, isReverse) {
            var status = null;

            if (angular.isDefined(discount) && discount != null) {
                if (angular.isDefined(discount.status)) {
                    status = $filter('ucFirst')(discount.status);
                    if (isReverse && status == 'Active') {
                        status = 'Suspended';
                    } else
                    if (isReverse && status == 'Suspended') {
                        status = 'Active';
                    }
                } else {
                    if (discount.is_active || discount.status == 'active') {
                        status = 'Active';
                        if (isReverse) {
                            status = 'Suspended';
                        }
                    } else if (discount.is_suspended || discount.status == 'suspended') {
                        status = 'Suspended';
                        if (isReverse) {
                            status = 'Active';
                        }
                    }
                }
            }

            return status;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .filter('discountType', discountType);

    function discountType() {
        return function(discount) {
            if (angular.isDefined(discount) && discount != null) {
                if (discount.is_unit || discount.value_type == 'unit') {
                    return '$';
                } else if (discount.is_percentage || discount.value_type == 'percentage') {
                    return '%';
                }
            }

            return null;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .filter('getActiveStandard', getActiveStandard);

    function getActiveStandard() {
        return function(discounts) {
            var obj = [];

            angular.forEach(discounts, function(discount, index) {
                if (discount != null) {
                    if (angular.isDefined(discount.status) && discount.discount_type == 'standard' && discount.status == 'active') {
                        obj.push(discount);
                    } else if (discount.discount_type == 'standard' && discount.is_active) {
                        obj.push(discount);
                    }
                }

            });

            return obj;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .filter('isActiveStandard', isActiveStandard);

    function isActiveStandard() {
        return function(discount) {
            if (discount != null && discount.discount_type == 'standard' && discount.status == 'active') {
                return true;
            }

            return false;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .filter('reverseStatus', reverseStatus);

    function reverseStatus() {
        return function(discount) {
            var status = null;

            if (angular.isDefined(discount) && discount != null) {
                if (angular.isDefined(discount.status)) {
                    if (discount.status == 'active') {
                        status = 'suspended';
                    } else
                    if (discount.status == 'suspended') {
                        status = 'active';
                    }
                } else {
                    if (discount.is_active) {
                        status = 'suspended';
                    } else if (discount.is_suspended) {
                        status = 'active';
                    }
                }
            }
            //console.log(discount);
            //console.log(status);
            return status;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .filter('roundPrice', roundPrice);

    function roundPrice() {
        return function(price) {
            if (price) {
                var num = parseFloat(price);
                var currency = num.toFixed(2);

                return currency;
            }

            return null;
        }

    }

})();
(function() {
    'use strict';

    angular.module('app.deals')
        .factory('TemplateService', TemplateService);

    TemplateService.$inject = ['$scope'];

    /* @ngInject */
    function TemplateService($scope) {

        var service = {
            lists: [],
            setList: setList
        }

        return service;

        //////// SERIVCE METHODS ////////

        function setList(list) {
            service.lists = list;
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals.image', [])
        .directive('addImage', addImage);

    addImage.$inject = ['$compile', '$document'];
    /* @ngInject */
    function addImage($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/image/image.html',
            replace: true,
            scope: {
                formImage: '=',
                formMode: '=',
                insertImg: '=',
                removeImage: '='
            },
            link: function(scope, element, attrs) {
                scope.openModalForm = openModalForm;

                /////////////

                function openModalForm() {
                    angular.element(element).find('.image-modal').modal('show');
                    //$('#image-modal').modal('show');
                }
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals.image')
        .directive('imageDisplay', imageDisplay);

    imageDisplay.$inject = ['$compile', '$filter'];
    /* @ngInject */
    function imageDisplay($compile, $filter) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/image/imagedisplay.html',
            replace: true,
            scope: {
                selFormImage: '=',
                formMode: '=',
                removeImage: '=',
                insertImg: '=',
            },
            link: function(scope, element, attrs) {

                scope.remove = remove;
                scope.formImage = scope.selFormImage
                previewImage(scope.formImage.file);
                scope.insertImg();

                /////////////

                function previewImage(imgModel) {
                    var filename64 = $filter('base64filename')(imgModel);
                    var html = '<label>Preview:</label><div><img src="' + filename64 + '" style="border: 1px solid #f0f0f0;" /></div>';
                    var input = angular.element(html);
                    var compile = $compile(input)(scope);
                    angular.element(element).find('.image-preview').html(compile);
                }

                function remove(elem, image) {
                    angular.element(elem).parents('.image-field-container').remove();
                    scope.removeImage(image);
                }
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals.image')
        .directive('imageForm', imageForm);

    imageForm.$inject = ['$compile', '$document', '$filter'];
    /* @ngInject */
    function imageForm($compile, $document, $filter) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/image/imageform.html',
            replace: true,
            scope: {
                formImage: '=',
                formMode: '@',
                insertImg: '=',
                removeImage: '=',
                noBtn: '@'
            },
            link: function(scope, element, attrs) {
                scope.addNewImageObj = addNewImageObj;
                //scope.selFormImage = scope.formImage;
                scope.clearFile = clearFile;
                scope.fileIsBlank = fileIsBlank;
                scope.previewImage = previewImage;
                scope.closeForm = closeForm;

                ///////////

                function closeForm() {
                    if (scope.formMode == 'Edit') {
                        var filename64 = $filter('base64filename')(scope.formImage.file);
                        angular.element('#' + scope.formImage.uid).attr('src', filename64);
                    }
                }

                function previewImage(imgModel) {
                    var filename64 = $filter('base64filename')(imgModel);
                    var html = '<label>Preview:</label><div><img src="' + filename64 + '" style="border: 1px solid #f0f0f0;" /></div>';
                    var input = angular.element(html);
                    var compile = $compile(input)(scope);
                    angular.element(element).find('.form-image-preview').html(compile);
                }

                function fileIsBlank() {
                    if (scope.formMode == 'Edit') {
                        return !angular.isObject(scope.formImage.file);
                    } else {
                        return false;
                    }
                }

                function clearFile() {
                    scope.formImage.file = null;
                    scope.formImage.file = "";
                    scope.formImage.description = "";
                }

                function addNewImageObj() {
                    if (angular.isObject(scope.formImage.file)) {
                        var html = '<image-display sel-form-image="formImage" form-mode="formMode" remove-image="removeImage" insert-img="insertImg" ></image-display>';
                        var input = angular.element(html);
                        var compile = $compile(input)(scope);
                        //console.log(scope.selFormImage);
                        $('#image-display-container').append(compile);

                        angular.element(element).find('.form-image-preview').html('');
                        $('.fileinput').fileinput('clear');
                        $('.image-modal').modal('hide');
                    }
                }
            }
        };

        return directive;
    }

})();
// (function() {
//     'use strict';

//     angular.module('app.deals')
//         .controller('HighlightController', HighlightController);

//     HighlightController.$inject = ['$scope', '$compile'];

//     /* @ngInject */
//     function HighlightController($scope, $compile) {
//         var hl = this;

//         //hl.remove = remove;
//         hl.counter = 0;
//         hl.increCounter = increCounter;
//         hl.modelo = {};
//         hl.we = 'test';
//         //hl.form = $scope.$parent.$parent.vm.form;

//         //////////////

//         // function remove(target, highlight) {
//         //     var parent = $(target).parent();
//         //     console.log($scope);
//         //     //$parent.$parent.vm.removeHighlight(highlight);
//         //     parent.remove();
//         // }

//         function increCounter() {
//             hl.counter++;
//         }
//     }
// })();
(function() {
    'use strict';

    angular
        .module('app.deals.highlightadd', [])
        .directive('addHighlight', addHighlight);

    addHighlight.$inject = ['$compile'];
    /* @ngInject */
    function addHighlight($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/highlight/highlight.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                highlightsData: '=',
                counter: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                //scope.counter = 0;
                scope.increCounter = increCounter;
                element.find('button#add-highlight-btn').bind('click', function() {
                    var html = '<highlight-field field-model="fieldModel" ></highlight-field>';
                    var input = angular.element(html);
                    var compile = $compile(input)(scope);

                    element.find('#highlight-container').append(input);

                    increCounter();
                });

                //////////////

                function increCounter() {
                    scope.counter++;
                }

            },
            // controller: 'HighlightController',
            // controllerAs: 'hl',
            // bindToController: true
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals.highlightedit', [])
        .directive('highlightEdit', highlightEdit);

    highlightEdit.$inject = ['$compile'];
    /* @ngInject */
    function highlightEdit($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/highlight/highlight-edit-field.html',
            replace: true,
            scope: {
                highlightItem: '=',
                formMode: '='
            },
            link: function(scope, element, attrs) {
                $('[data-toggle="tooltip"]').tooltip();
                scope.fieldModel = scope.$parent.fieldModel;
                scope.counter = scope.$parent.counter;
                //console.log(scope.formMode);
                //scope.formMode = scope.$parent.formMode ? scope.$parent.formMode : 'Edit';

                scope.remove = remove;

                function remove(target, highlight) {
                    var parent = $(target).parent();
                    scope.$parent.$parent.$parent.$parent.vm.removeHighlight(highlight);
                    parent.remove();
                }
            },
            // controller: 'HighlightController',
            // controllerAs: 'hl',
            // bindToController: true
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals.highlightfield', [])
        .directive('highlightField', highlightField);

    highlightField.$inject = ['$compile'];
    /* @ngInject */
    function highlightField($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/highlight/highlight-field.html',
            replace: true,
            scope: {
                fieldModel: '='
            },
            link: function(scope, element, attrs) {
                $('[data-toggle="tooltip"]').tooltip();

                scope.fieldModel = scope.$parent.fieldModel;
                scope.counter = scope.$parent.counter;
                scope.formMode = scope.$parent.formMode;

                scope.remove = remove;

                function remove(target) {
                    var parent = $(target).parent();
                    parent.remove();
                }
            },
            // controller: 'HighlightController',
            // controllerAs: 'hl',
            // bindToController: true
        };

        return directive;
    }

})();
// (function() {
//     'use strict';

//     angular.module('app.deals')
//         .controller('TemplateController', TemplateController);

//     TemplateController.$inject = ['$scope', '$compile', '$document'];

//     /* @ngInject */
//     function TemplateController($scope, $compile, $document) {
//         var hl = this;

//         hl.counter = 0;
//         hl.increCounter = increCounter;
//         hl.openModal = openModal;
//         hl.currModel = {};
//         //hl.addTemplate = addTemplate;
//         //hl.modalContainer = $('#template-modal');

//         //////////////

//         function openModal() {
//             $('#template-modal').modal('show');

//             $("#template-modal").on("hidden.bs.modal", function() {
//                 $scope.$parent.vm.setSelTemplateIndex($scope.$parent.vm.templateCounter);
//             });
//         }



//         function increCounter() {
//             hl.counter++;
//         }
//     }
// })();
(function() {
    'use strict';

    angular
        .module('app.deals.templateadd', [])
        .directive('addTemplate', addTemplate)
        .controller('TemplateController', TemplateController);

    addTemplate.$inject = ['$compile', '$document'];
    /* @ngInject */
    function addTemplate($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/template/template.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                templatesData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                element.find('button#add-template-btn').bind('click', function() {
                    // var html = '<template-field field-model="hl.fieldModel" ></template-field>';

                    // var input = angular.element(html);

                    // var compile = $compile(input)(scope);

                    // element.find('#template-container').append(input);

                    scope.hl.openModal();
                    scope.hl.increCounter();
                    //scope.$parent.vm.increTemplateCounter();
                });

            },
            controller: 'TemplateController',
            controllerAs: 'hl',
            bindToController: true
        };

        return directive;
    }


    TemplateController.$inject = ['$scope', '$compile', '$document'];

    /* @ngInject */
    function TemplateController($scope, $compile, $document) {
        var hl = this;

        hl.counter = 0;
        hl.increCounter = increCounter;
        hl.openModal = openModal;
        hl.currModel = {};
        //hl.addTemplate = addTemplate;
        //hl.modalContainer = $('#template-modal');

        //////////////

        function openModal() {
            $('#template-modal').modal('show');

            $("#template-modal").on("hidden.bs.modal", function() {
                $scope.$parent.vm.setSelTemplateIndex($scope.$parent.vm.templateCounter);
            });
        }



        function increCounter() {
            hl.counter++;
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.deals.templateedit', [])
        .directive('templateEdit', templateEdit);

    templateEdit.$inject = ['$compile'];
    /* @ngInject */
    function templateEdit($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/template/template-edit-field.html',
            replace: true,
            scope: {
                templateCounter: '=',
                fieldModel: '='
            },
            link: function(scope, element, attrs) {
                $('[data-toggle="tooltip"]').tooltip();
                //scope.fieldModel = scope.$parent.$parent.vm.form.templates[scope.templateCounter];
                //console.log(scope);
                scope.openModal = openModal;
                scope.remove = remove;


                ///////////////////

                function openModal() {
                    //scope.$parent.$parent.vm.setSelTemplateIndex(scope.templateCounter);
                    $('#template-modal-edit').modal('show');
                    scope.$parent.$parent.$parent.$parent.vm.setSelTemplateObj(scope.fieldModel);
                    // $("#template-modal-edit").on("hidden.bs.modal", function() {
                    //     console.log(scope.$parent.$parent.vm.templateCounter);
                    //     scope.$parent.$parent.vm.setSelTemplateIndex(scope.$parent.$parent.vm.templateCounter);
                    // });
                }

                function remove(target) {
                    var parent = $(target).parent();
                    parent.remove();
                    scope.$parent.$parent.$parent.$parent.vm.removeTemplate(scope.fieldModel);
                }
            },
            // controller: 'TemplateController',
            // controllerAs: 'hl',
            // bindToController: true
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals.templatefield', [])
        .directive('templateField', templateField);

    templateField.$inject = ['$compile'];
    /* @ngInject */
    function templateField($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/template/template-field.html',
            replace: true,
            scope: {
                templateCounter: '=',
                //fieldModel: '='
            },
            link: function(scope, element, attrs) {
                $('[data-toggle="tooltip"]').tooltip();
                //console.log(scope);
                //if (angular.isDefined(scope.$parent.$parent.vm)) {
                scope.fieldModel = scope.$parent.$parent.vm ? scope.$parent.$parent.vm.form.templates[scope.templateCounter] : {};
                //}

                scope.openModal = openModal;
                scope.remove = remove;

                ///////////////////

                function openModal() {
                    //scope.$parent.$parent.vm.setSelTemplateIndex(scope.templateCounter);
                    $('#template-modal-edit').modal('show');
                    scope.$parent.$parent.vm.setSelTemplateObj(scope.fieldModel);
                    // $("#template-modal-edit").on("hidden.bs.modal", function() {
                    //     console.log(scope.$parent.$parent.vm.templateCounter);
                    //     scope.$parent.$parent.vm.setSelTemplateIndex(scope.$parent.$parent.vm.templateCounter);
                    // });
                }

                function remove(target) {
                    var parent = $(target).parent();
                    parent.remove();
                    scope.$parent.$parent.vm.removeTemplate(scope.templateCounter);
                }
            },
            // controller: 'TemplateController',
            // controllerAs: 'hl',
            // bindToController: true
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals.templatemodal', [])
        .directive('templateModal', templateModal)
        .controller('TemplateController', TemplateController);

    templateModal.$inject = ['$compile', '$document'];
    /* @ngInject */
    function templateModal($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: 'app/deals/template/template-modal.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                templatesData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                //console.log(scope.$parent);
                scope.hl.templates = scope.$parent.vm.templateNames;
                scope.hl.types = scope.$parent.vm.templateTypes;

                scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex].template_type = scope.hl.templates[0].value;
                scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex].template_location = scope.hl.types[0].value;

                scope.$parent.vm.setSelTemplateIndex(scope.$parent.vm.templateCounter);
                scope.addTemplate = addTemplate;

                scope.disableAdd = true;
                //scope.statusChange = statusChange;

                /////////////

                function statusChange() {
                    var status = scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex].status;

                    if (status == 'published') {
                        angular.forEach(scope.$parent.vm.form.templates, function(t, index) {
                            if (index != scope.$parent.vm.selTemplateIndex) {
                                if (t.status == 'published') {
                                    t.status = 'draft';
                                }

                            }
                        });

                        if (scope.hl.formMode == 'Edit') {
                            angular.forEach(scope.$parent.vm.templates, function(t, index) {
                                if (t.status == 'published') {
                                    t.status = 'draft';
                                }
                            });
                        }
                    }
                }

                scope.$watch('$parent.vm.form.templates[$parent.vm.selTemplateIndex].name', function(newValue, oldValue) {
                    if (angular.isDefined(newValue)) {
                        if (newValue.trim() == '') {
                            scope.disableAdd = true;
                        } else {
                            scope.disableAdd = false;
                        }
                    } else {
                        scope.disableAdd = true;
                    }

                });

                function addTemplate() {
                    if (!angular.isDefined(scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex].name) || scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex].name.trim() == '') {
                        return false;
                    }

                    statusChange();

                    var html = '<template-field template-counter="' + scope.$parent.vm.selTemplateIndex + '" field-model="scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex]" ></template-field>';
                    var input = angular.element(html);
                    var compile = $compile(input)(scope);

                    $document.find('#template-container').append(input);
                    $('#template-modal').modal('hide');
                    scope.$parent.vm.increTemplateCounter();
                    scope.$parent.vm.setSelTemplateIndex(scope.$parent.vm.templateCounter);

                    scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex] = {};

                    scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex].template_type = scope.hl.templates[0].value;
                    scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex].template_location = scope.hl.types[0].value;
                    scope.$parent.vm.form.templates[scope.$parent.vm.selTemplateIndex].status = 'draft';
                }
            },
            controller: 'TemplateController',
            controllerAs: 'hl',
            bindToController: true
        };

        return directive;
    }

    TemplateController.$inject = ['$scope', '$compile', '$document'];

    /* @ngInject */
    function TemplateController($scope, $compile, $document) {
        var hl = this;

        hl.counter = 0;
        hl.increCounter = increCounter;
        hl.openModal = openModal;
        hl.currModel = {};
        //hl.addTemplate = addTemplate;
        //hl.modalContainer = $('#template-modal');

        //////////////

        function openModal() {
            $('#template-modal').modal('show');

            $("#template-modal").on("hidden.bs.modal", function() {
                $scope.$parent.vm.setSelTemplateIndex($scope.$parent.vm.templateCounter);
            });
        }



        function increCounter() {
            hl.counter++;
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals.templatemodaledit', [])
        .directive('templateModalEdit', templateModalEdit);

    templateModalEdit.$inject = ['$compile', '$document'];
    /* @ngInject */
    function templateModalEdit($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/template/template-modal-edit.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                templatesData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                scope.templates = scope.$parent.vm.templateNames;
                scope.types = scope.$parent.vm.templateTypes;
                scope.closeModal = closeModal;

                scope.$parent.vm.setSelTemplateIndex(scope.$parent.vm.templateCounter);

                //////////////////////////

                function statusChange() {
                    var tobj = scope.$parent.vm.selTemplateObj;

                    if (tobj.status == 'published') {
                        angular.forEach(scope.$parent.vm.form.templates, function(t, index) {
                            if (t.uid != tobj.uid) {
                                if (t.status == 'published') {
                                    t.status = 'draft';
                                }
                            }

                        });

                        angular.forEach(scope.$parent.vm.templates, function(t, index) {
                            if (t.uid != tobj.uid) {
                                if (t.status == 'published') {
                                    t.status = 'draft';
                                }

                            }
                        });
                    }
                }

                $("#template-modal-edit").on("hidden.bs.modal", function() {
                    statusChange();
                });

                function closeModal() {
                    $('#template-modal-edit').modal('hide');
                }
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountEdit', discountEdit);

    discountEdit.$inject = ['$compile'];
    /* @ngInject */
    function discountEdit($compile) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-edit-field.html',
            replace: true,
            scope: {
                discountCounter: '=',
                fieldModel: '='
            },
            link: function(scope, element, attrs) {
                $('[data-toggle="tooltip"]').tooltip();
                //scope.fieldModel = scope.$parent.$parent.vm.form.discounts[scope.discountCounter];
                //console.log(scope);
                scope.openModal = openModal;
                scope.remove = remove;


                ///////////////////

                function openModal() {
                    //scope.$parent.$parent.vm.setSelDiscountIndex(scope.discountCounter);
                    $('#discount-modal-edit').modal('show');
                    scope.$parent.$parent.$parent.$parent.vm.setSelDiscountObj(scope.fieldModel);
                    // $("#discount-modal-edit").on("hidden.bs.modal", function() {
                    //     console.log(scope.$parent.$parent.vm.discountCounter);
                    //     scope.$parent.$parent.vm.setSelDiscountIndex(scope.$parent.$parent.vm.discountCounter);
                    // });
                }

                function remove(target) {
                    var parent = $(target).parent();
                    parent.remove();
                    scope.$parent.$parent.$parent.$parent.vm.removeDiscount(scope.fieldModel);
                }
            },
            // controller: 'DiscountController',
            // controllerAs: 'hl',
            // bindToController: true
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountField', discountField);

    discountField.$inject = ['$compile', '$filter', 'HelperService', '$rootScope', 'DealService'];
    /* @ngInject */
    function discountField($compile, $filter, HelperService, $rootScope, DealService) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-field.html',
            replace: true,
            scope: {
                selFieldModel: '=',
                fieldModelIndex: '@',
                fieldModel: '=',
                discountsData: '=',
                formMode: '@'
            },
            link: function(scope, element, attrs) {
                $('[data-toggle="tooltip"]').tooltip();
                //scope.fieldModel = scope.$parent.$parent.scope.selFieldModel[scope.discountCounter];
                scope.index = scope.fieldModelIndex;
                //$log.log(scope.selFieldModel[scope.index]);
                //$log.log(scope.fieldModelIndex)
                scope.openModal = openModal;
                scope.remove = remove;
                scope.setActive = setActive;

                ///////////////////

                // function setActive() {
                //     //statusChange()

                // }

                function setActive() {
                    DealService.setActive(scope.selFieldModel[scope.index], scope.selFieldModel, scope.discountsData, scope.selFieldModel[scope.index].discount_type, scope.formMode);
                }

                function _setActive(selFieldModel, type) {
                    if (type == 'standard' && scope.formMode == 'Edit') {
                        var existingCount = HelperService.countModelLength($filter('getActiveStandard')(scope.discountsData));
                        var newCount = HelperService.countModelLength($filter('getActiveStandard')(scope.selFieldModel));
                        //$log.log(scope.discountsData);
                        //$log.log($filter('getActiveStandard')(scope.selFieldModel));
                        if (selFieldModel.status == 'active') { //Set to suspended
                            bootbox.alert('There must be one active standard discount.');
                        } else { //set to active

                            bootbox.confirm({
                                title: "Confirm Active Standard",
                                message: "You have set this standard discount as \"Active\". You have an active standard discount running at the moment.<br ><br >Press \"Yes\" to proceed and the current active standard discount will be suspended.<br ><br >Press \"No\" and the new standard discount will be set to \"Suspended\".",
                                buttons: {
                                    confirm: {
                                        label: 'Yes',
                                        className: 'btn-success'
                                    },
                                    cancel: {
                                        label: 'No',
                                        className: 'btn-danger'
                                    }
                                },
                                callback: function(result) {
                                    if (result) {
                                        //$log.log('test');
                                        reverseStatus(type);
                                        $rootScope.$digest();
                                    }
                                }
                            });

                        }
                    } else {
                        if (type == 'standard' && scope.formMode == 'Add') {
                            reverseStatus(type);
                        } else {
                            //Existing discounts
                            angular.forEach($filter('whereAttr')(scope.discountsData, 'discount_type', type), function(discount, index) {
                                if (discount == selFieldModel) {
                                    discount.status = $filter('reverseStatus')(discount);
                                }
                            });
                            //New discounts
                            angular.forEach($filter('whereAttr')(scope.selFieldModel, 'discount_type', type), function(discount, index) {
                                if (discount == selFieldModel) {
                                    discount.status = $filter('reverseStatus')(discount);
                                }
                            });
                        }

                    }
                }

                function reverseStatus(type) {
                    //Existing discounts
                    angular.forEach($filter('whereAttr')(scope.discountsData, 'discount_type', type), function(discount, index) {
                        discount.status = $filter('reverseStatus')(discount);
                    });
                    //New discounts
                    angular.forEach($filter('whereAttr')(scope.selFieldModel, 'discount_type', type), function(discount, index) {
                        discount.status = $filter('reverseStatus')(discount);
                    });
                }

                function countActiveStandard() {
                    var dobj = scope.selFieldModel[scope.index];
                    var countStandard = 0;
                    $log.log('---------');
                    $log.log(scope.fieldModel);
                    angular.forEach(scope.fieldModel, function(discount, index) {
                        if (discount != null && discount.discount_type == 'standard') {
                            if (discount.status == 'active') {
                                countStandard++;
                            }
                        }
                    });
                    $log.log(scope.discountsData);
                    angular.forEach(scope.discountsData, function(discount, index) {
                        if (discount != null && discount.discount_type == 'standard' && dobj != discount) {
                            if (discount.status == 'active') {
                                countStandard++;
                            }
                        }
                    });

                    $log.log(countStandard);
                    $log.log('---------');

                    return countStandard;
                }

                function statusChange() {
                    if (scope.selFieldModel[scope.index].status == 'active') {
                        scope.selFieldModel[scope.index].status = 'suspended';
                    } else {
                        scope.selFieldModel[scope.index].status = 'active';
                    }

                    var selDiscount = scope.selFieldModel[scope.index];
                    var status = selDiscount.status;
                    var countStandard = 0;
                    //$log.log(selDiscount);
                    var activeStandard = countActiveStandard();
                    //$log.log(activeStandard);
                    if (status == 'active') {
                        for (var attr in scope.fieldModel) {
                            if (scope.fieldModel[attr] != null && scope.fieldModel[attr] != selDiscount && scope.fieldModel[attr].discount_type == 'standard') {
                                countStandard++;
                                if (scope.fieldModel[attr].status == 'active') {
                                    scope.fieldModel[attr].status = 'suspended';
                                }
                            }
                        }

                        if (scope.formMode == 'Edit' && selDiscount.discount_type == 'standard') {
                            for (var attr in scope.discountsData) {
                                countStandard++;
                                if (scope.discountsData[attr] != null && scope.discountsData[attr].discount_type == 'standard') {
                                    if (scope.discountsData[attr].status == 'active') {
                                        scope.discountsData[attr].status = 'suspended';
                                    }

                                }
                            }
                        }
                        if (countStandard == 0 && selDiscount.discount_type == 'standard') {
                            scope.selFieldModel[scope.index].status = 'active';
                        }
                    } else if (selDiscount.discount_type == 'standard' && activeStandard == 0) {
                        bootbox.alert('There must be one active standard discount.');
                        scope.selFieldModel[scope.index].status = 'active';
                    }


                }

                function openModal(fieldModel) {
                    $('#discount-modal-edit').modal('show');
                    scope.$parent.$parent.vm.setSelDiscountObj(fieldModel);
                }

                function remove(target, selectedModel) {
                    if (selectedModel.discount_type == 'standard' && selectedModel.status == 'active') {
                        bootbox.alert("You can't remove an active standard discount!");
                    } else {
                        angular.element(target).parents('.discount-row').remove();
                        scope.$parent.$parent.vm.removeDiscount(selectedModel);
                    }

                }
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountModalEdit', discountModalEdit);

    discountModalEdit.$inject = ['$compile', '$document'];
    /* @ngInject */
    function discountModalEdit($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-modal-edit.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                discountsData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                ComponentsDateTimePickers.init();

                scope.closeModal = closeModal;

                scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);
                scope.statusChange = statusChange;
                scope.checkActiveDiscount = checkActiveDiscount;
                //scope.statusChange = statusChange;

                //////////////////////////

                function checkActiveDiscount() {
                    var tobj = scope.$parent.vm.selDiscountObj;
                    //$log.log(selDiscount);
                    var activeStandard = countActiveStandard();

                    if (tobj.status == 'active' && activeStandard > 0) {
                        bootbox.confirm({
                            title: "Confirm Active Standard",
                            message: "You have an active standard discount running at the moment. Do you want to create a new active standard discount?",
                            buttons: {
                                confirm: {
                                    label: 'Yes',
                                    className: 'btn-success'
                                },
                                cancel: {
                                    label: 'No',
                                    className: 'btn-danger'
                                }
                            },
                            callback: function(result) {
                                // if (result) {
                                //     t.status = 'suspended';
                                // } else {
                                //     $log.log(scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].status);
                                //     scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].status = 'suspended';
                                // }
                            }
                        });
                    }


                }

                function countActiveStandard() {
                    var tobj = scope.$parent.vm.selDiscountObj;
                    var countStandard = 0;

                    angular.forEach(scope.$parent.vm.form.discounts, function(t, index) {
                        if (t.discount_type == 'standard' && angular.isDefined(t.value) && t.value.trim() != "" && t.value.trim() != "null") {
                            if (t.status == 'active') {
                                countStandard++;
                            }
                        }

                    });

                    angular.forEach(scope.$parent.vm.discounts, function(t, index) {
                        if (tobj.uid != t.uid && t.discount_type == 'standard') {
                            if (t.status == 'active') {
                                countStandard++;
                            }

                        }
                    });
                    return countStandard;
                }

                function statusChange() {
                    var tobj = scope.$parent.vm.selDiscountObj;
                    var countStandard = 0;
                    var activeStandard = countActiveStandard();

                    if (tobj.discount_type == 'standard' && tobj.status == 'active') {
                        angular.forEach(scope.$parent.vm.form.discounts, function(t, index) {
                            $log.log(scope.$parent.vm.discountCounter);
                            if (t !== tobj && t.discount_type == 'standard') {
                                countStandard++;
                                //$log.log(t);
                                if (t.status == 'active') {

                                    t.status = 'suspended';
                                }
                            }

                        });

                        angular.forEach(scope.$parent.vm.discounts, function(t, index) {
                            if (tobj.uid != t.uid && t.discount_type == 'standard') {
                                countStandard++;
                                if (t.status == 'active') {
                                    t.status = 'suspended';
                                }

                            }
                        });

                        if (countStandard == 0 && tobj.discount_type == 'standard') {

                            scope.$parent.vm.selDiscountObj.status = 'active';
                        }
                    } else if (tobj.discount_type == 'standard' && activeStandard == 0) {

                        scope.$parent.vm.selDiscountObj.status = 'active';
                    }

                }

                // $("#discount-modal-edit").on("hidden.bs.modal", function() {
                //     statusChange();
                // });

                function closeModal() {
                    $('#discount-modal-edit').modal('hide');
                }
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountModal', discountModal);

    discountModal.$inject = ['$compile', '$document', '$q', 'DealService', '$rootScope', 'HelperService', '$filter'];
    /* @ngInject */
    function discountModal($compile, $document, $q, DealService, $rootScope, HelperService, $filter) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-modal.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                discountsData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                ComponentsDateTimePickers.init();
                //console.log(scope.fieldModel);
                //scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);
                scope.addDiscount = addDiscount;
                scope.checkActiveDiscount = checkActiveDiscount;

                init();

                /////////////

                function init() {
                    scope.newDiscountObj = {};
                    scope.newDiscountObj.value_type = 'percentage';
                    scope.newDiscountObj.discount_type = 'standard';
                    scope.newDiscountObj.status = 'suspended';
                }

                function checkActiveDiscount() {
                    var d = $q.defer();

                    var selDiscount = scope.newDiscountObj;
                    var status = selDiscount.status;
                    var countStandard = 0;
                    //console.log(selDiscount);
                    var existingCount = HelperService.countModelLength($filter('getActiveStandard')(scope.discountsData));
                    var newCount = HelperService.countModelLength($filter('getActiveStandard')(scope.fieldModel));
                    var activeStandard = existingCount + newCount;
                    //console.log(activeStandard);
                    if (scope.formMode == 'Edit') {
                        //console.log('test');
                        if (selDiscount.discount_type == 'standard' && status == 'active' && activeStandard > 0) {
                            bootbox.confirm({
                                title: "Confirm Active Standard",
                                message: "You have set this standard discount as \"Active\". You have an active standard discount running at the moment.<br ><br >Press \"Yes\" to proceed and the current active standard discount will be suspended.<br ><br >Press \"No\" and the new standard discount will be set to \"Suspended\".",
                                buttons: {
                                    confirm: {
                                        label: 'Yes',
                                        className: 'btn-success'
                                    },
                                    cancel: {
                                        label: 'No',
                                        className: 'btn-danger'
                                    }
                                },
                                callback: function(result) {
                                    if (result) {
                                        d.resolve(result);
                                    } else {
                                        d.reject(false);
                                    }
                                }
                            });
                        } else {
                            d.reject(null);
                        }
                    } else if (selDiscount.discount_type == 'standard' && status == 'active' && activeStandard > 0) {
                        d.resolve(null);
                    } else if (selDiscount.discount_type == 'standard' && activeStandard == 0) {
                        d.resolve(null);
                    } else {
                        d.reject(null);
                    }

                    return d.promise;
                }

                function countActiveStandard() {
                    var tobj = scope.newDiscountObj;
                    var countStandard = 0;
                    //console.log(scope.discountsData);
                    angular.forEach(scope.fieldModel, function(discount, index) {
                        if (discount != null && discount.discount_type == 'standard' && discount.status == 'active') {
                            //if (t.status == 'active') {
                            countStandard++;
                            //}
                        }

                    });

                    // for (var attr in scope.fieldModel) {
                    //     if (scope.fieldModel[attr] != null && scope.fieldModel[attr].discount_type == 'standard') {
                    //         if (scope.fieldModel[attr].status == 'active') {
                    //             countStandard++;
                    //         }
                    //     }
                    // }

                    angular.forEach(scope.discountsData, function(discount, index) {
                        //if (tobj.uid != t.uid && t.discount_type == 'standard') {
                        if (discount != null && discount.uid != tobj.uid && discount.discount_type == 'standard' && discount.status == 'active') {
                            //if (t.status == 'active') {
                            countStandard++;
                            //}

                        }
                    });

                    // for (var attr in scope.discountsData) {
                    //     if (scope.discountsData[attr] != null && scope.discountsData[attr].uid != t.uid && scope.discountsData[attr].discount_type == 'standard') {
                    //         if (scope.discountsData[attr].status == 'active') {
                    //             countStandard++;
                    //         }

                    //     }
                    // }

                    return countStandard;
                }

                function statusChange() {
                    var selDiscount = scope.newDiscountObj;
                    var status = selDiscount.status;
                    var countStandard = 0;
                    //console.log(selDiscount);
                    var existingCount = HelperService.countModelLength($filter('getActiveStandard')(scope.discountsData));
                    var newCount = HelperService.countModelLength($filter('getActiveStandard')(scope.fieldModel));
                    var activeStandard = existingCount + newCount;
                    //console.log(status);
                    if (status == 'active') {

                        angular.forEach(scope.fieldModel, function(t, index) {
                            if (t.discount_type == 'standard') {
                                countStandard++;
                                if (t.status == 'active') {
                                    t.status = 'suspended';
                                }
                            }

                        });

                        if (scope.formMode == 'Edit' && selDiscount.discount_type == 'standard') {
                            //console.log(scope.discountsData);
                            angular.forEach(scope.discountsData, function(t, index) {
                                if (t.discount_type == 'standard') {
                                    countStandard++;
                                    if (t.status == 'active') {
                                        t.status = 'suspended';
                                    }

                                }
                            });
                        }
                        //console.log(countStandard);
                        if (countStandard == 0 && selDiscount.discount_type == 'standard') {
                            scope.newDiscountObj.status = 'active';
                        }
                    } else if (selDiscount.discount_type == 'standard' && activeStandard == 0) {
                        scope.newDiscountObj.status = 'active';
                    }


                }

                // function addDiscount() {
                //     add();
                //     DealService.setActive(scope.newDiscountObj, scope.fieldModel, scope.discountsData, scope.newDiscountObj.discount_type, scope.formMode);
                // }

                function addDiscount() {
                    checkActiveDiscount().then(function() {
                        statusChange();
                        add();

                    }).catch(function(err) {
                        if (scope.newDiscountObj.discount_type == 'standard') {
                            scope.newDiscountObj.status = 'suspended';
                        }
                        add();
                    });

                }

                function add() {
                    var selDiscount = scope.newDiscountObj;
                    var elem = '';

                    if (selDiscount.discount_type == 'standard') {
                        elem = '#standard-discount-body';
                    } else if (selDiscount.discount_type == 'early_bird') {
                        elem = '#early-discount-body';
                    }

                    //console.log(elem);
                    var index = 'd' + countModelLength();
                    scope.fieldModel[index] = scope.newDiscountObj;
                    init();
                    //console.log(scope.fieldModel);
                    // console.log(scope.newDiscountObj);
                    //var index = scope.fieldModel.length - 1;
                    //console.log(index);
                    var html = '<discount-field form-mode="' + scope.formMode + '" field-model="fieldModel" discounts-data="discountsData" sel-field-model="fieldModel" field-model-index="' + index + '" ></discount-field>';
                    var input = angular.element(html);
                    var compile = $compile(input)(scope);

                    angular.element(elem).append(compile);
                    scope.discount_form.$setPristine();
                    $('#discount-modal').modal('hide');
                }

                function countModelLength() {
                    var count = 0;

                    // angular.forEach(scope.fieldModel, function(v, i) {
                    //     count++;
                    // });
                    for (var key in scope.fieldModel) {
                        count++;
                    }

                    return count;
                }
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('addDiscount', addDiscount);

    addDiscount.$inject = ['$compile', '$document'];
    /* @ngInject */
    function addDiscount($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                discountsData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                //console.log(scope.fieldModel);
                element.find('button#add-discount-btn').bind('click', function() {
                    openModal();
                });

                function openModal() {
                    $('#discount-modal').modal('show');

                    $("#discount-modal").on("hidden.bs.modal", function() {
                        scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);
                    });
                }
            }
        };

        return directive;
    }

})();
(function() {
    'use strict';

    angular.module('app.users', [])
        .factory('UserService', UserService);

    UserService.$inject = ['$http', 'CONST', '$q', '$rootScope', '$log'];

    /* @ngInject */
    function UserService($http, CONST, $q, $rootScope, $log) {
        var api = CONST.api_domain + '/admin/users';

        var service = {
            lists: [],
            errors: [],
            add: add,
            edit: edit,
            delete: _delete,
            getAll: getAll,
            find: find,
            findInList: findInList,
            isEmpty: isEmpty,
            editMe: editMe,
            search: search,
            searchedList: []
        }

        return service;

        //////// SERIVCE METHODS ////////

        function search(str) {
            var url = api + '/search';
            var d = $q.defer();
            var q = str.toLowerCase();
            var results = [];

            if (str.trim() == '') {
                d.resolve(service.lists.users);
            } else {
                angular.forEach(service.lists.users, function(user, index) {
                    if (user.name.toLowerCase().indexOf(q) > -1) {
                        results.push(user);
                    }
                });

                if (results.length > 0) {
                    d.resolve(results);
                } else {
                    $http.get(url, { query: str }).then(function(resp) {
                        service.searchedList = resp.data;
                        d.resolve(resp.data.users);
                    }).catch(function(err) {
                        $log.log(err);
                        d.reject(err);
                    });
                }
            }

            return d.promise;
        }

        function isEmpty() {
            if (!angular.isDefined(service.lists.users)) {
                return true;
            }

            return service.lists.total == 0;
        }

        function findInList(id) {
            var d = $q.defer();

            if (angular.isDefined(id)) {
                if (!isEmpty()) {
                    angular.forEach(service.lists.users, function(user, key) {

                        if (id == user.uid) {

                            if (user.is_admin) {
                                user['role'] = 'admin';
                            } else if (user.is_vendor) {
                                user['role'] = 'vendor';
                            } else if (user.is_customer) {
                                user['role'] = 'customer';
                            } else {
                                user['role'] = '';
                            }

                            user['status'] = (user.is_active) ? 'active' : 'inactive';

                            d.resolve(user);
                        }
                    });
                } else {
                    find(id).then(function(user) {
                        d.resolve(user);
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.reject('User does not exist.');
            }

            return d.promise;
        }

        function getAll() {
            var d = $q.defer();

            var req = {
                method: 'GET',
                url: api
            };

            $http(req)
                .then(function(data) {
                    var list = data.data;

                    service.lists = list;
                    d.resolve(list);
                })
                .catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function find(id) {
            var d = $q.defer();
            var url = api + '/' + id;
            $http({
                    method: 'GET',
                    url: url,
                    //params: {id: id}
                })
                .then(function(data) {
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function add(data) {
            var url = api;
            var d = $q.defer();

            // var data = {
            //     user: data
            // }

            $http.post(url, data)
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error.data.errors);
                });

            return d.promise;
        }

        function edit(id, data) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.patch(url, data)
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function _delete(id) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.delete(url, {})
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function editMe(id, data){
            var url = CONST.api_domain + '/users/me';
            var d = $q.defer();

            $http.patch(url, data)
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }
    }

})();
(function() {
    'use strict';

    angular.module('app.users')
        .controller('UserAddController', UserAddController);

    UserAddController.$inject = ['UserService', '$scope', 'HelperService', '$state'];

    /* @ngInject */
    function UserAddController(UserService, $scope, HelperService, $state) {
        var vm = this;

        vm.mode = "Add";
        vm.response = {};
        vm.form = {};
        vm.defaultRole = 'admin';
        vm.defaultStatus = 'active';
        vm.isDone = true;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addPost;

        //activate();

        ///////////////////

        function activate() {
            UserService.find(vm.userId).then(function(data) {
                vm.selectedUser = data;
                vm.form = vm.selectedUser;
            });
        }

        function addPost() {
            vm.isDone = false;
            // $log.log(vm.form);
            // return false;
            UserService.add(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated user: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getUsers();
                $state.go(vm.prevState);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update User.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.users')
        .controller('UserController', UserController);

    UserController.$inject = ['UserService', 'userPrepService'];

    /* @ngInject */
    function UserController(UserService, userPrepService) {
        var vm = this;

        vm.prepBrands = userPrepService;
        vm.users = vm.prepBrands.users;
        vm.getUsers = getUsers;
        vm.hasDeleted = false;
        vm.response = {};
        vm.deleteUser = deleteUser;
        vm.response = {};
        vm.isDone = true;
        vm.search = search;
        vm.searchItem = '';
        vm.isLoading = false;
        vm.isSearch = false;
        vm.clearSearch = clearSearch;
        vm.isUserEmpty = UserService.isEmpty();

        //activate();

        ////////////////

        function activate() {
            return getUsers();
        }

        function clearSearch() {
            vm.searchItem = '';
            search();
        }

        function search() {
            vm.isLoading = true;

            if (vm.searchItem.trim().length > 0) {
                vm.isSearch = true;
            } else {
                vm.isSearch = false;
            }

            UserService.search(vm.searchItem).then(function(resp) {
                vm.users = resp;
                vm.isLoading = false;
            }).catch(function(err) {
                console.log(err);
            });
        }

        function getUsers() {
            return UserService.getAll().then(function(data) {
                vm.prepBrands = data;
                vm.users = vm.prepBrands.users;
                return vm.users;
            });
        }

        function deleteUser(element, user) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete user: <b>" + user.name + "</b>?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function(result) {
                    if (result) {
                        Ladda.create(element).start();
                        doDelete(user);
                    }
                }
            });

        }

        function doDelete(user) {
            UserService.delete(user.uid).then(function(resp) {
                vm.hasDeleted = true;
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted user: " + user.name;
                getUsers();
                vm.hasAdded = true;
                vm.isDone = true;
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to delete user: " + user.name;
                vm.hasAdded = true;
                vm.isDone = true;
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.users')
        .controller('UserEditController', UserEditController);

    UserEditController.$inject = ['UserService', '$stateParams', '$scope', 'prepSelUser', 'HelperService', '$state'];

    /* @ngInject */
    function UserEditController(UserService, $stateParams, $scope, prepSelUser, HelperService, $state) {
        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.userId = $stateParams.id;
        vm.selectedUser = prepSelUser;
        vm.form = vm.selectedUser;
        vm.defaultRole = vm.selectedUser.role;
        vm.defaultStatus = vm.selectedUser.is_active ? 'active' : 'inactive';
        vm.isDone = true;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editPost;

        //activate();

        ///////////////////

        function activate() {
            UserService.find(vm.userId).then(function(data) {
                vm.selectedUser = data;
                vm.form = vm.selectedUser;
            });
        }

        function editPost() {
            vm.isDone = false;
            // $log.log(vm.form);
            // return false;
            UserService.edit(vm.userId, vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated user: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getUsers();
                $state.go(vm.prevState);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update User.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.users')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['UserService', '$scope', 'prepCurUser', 'HelperService', '$state'];

    /* @ngInject */
    function UserInfoController(UserService, $scope, prepCurUser, HelperService, $state) {
        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.selectedUser = prepCurUser;
        vm.form = vm.selectedUser;
        vm.defaultRole = vm.selectedUser.role;
        vm.defaultStatus = vm.selectedUser.is_active ? 'active' : 'inactive';
        vm.isDone = true;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editPost;

        activate();

        ///////////////////

        function activate() {
            vm.form.password = '';
            vm.form.confirm_password = '';
        }

        function editPost() {
            vm.isDone = false;
            // $log.log(vm.form);
            // return false;
            var editReq = {};
            if(vm.form.password.length){
                editReq = {
                    name: vm.form.name,
                    email: vm.form.email,
                    password: vm.form.password,
                    password_confirmation: vm.form.confirm_password
                }
            } else {
                editReq = {
                    name: vm.form.name,
                    email: vm.form.email
                }
            }
            UserService.editMe(vm.selectedUser.uid, editReq).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated user: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update User.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app.users')
        .controller('UserViewController', UserViewController);

    UserViewController.$inject = ['UserService', '$stateParams', 'prepSelUser', 'HelperService'];

    /* @ngInject */
    function UserViewController(UserService, $stateParams, prepSelUser, HelperService) {
        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.userId = $stateParams.id;
        vm.user = prepSelUser;
        vm.isDone = false;
        vm.prevState = HelperService.getPrevState();

        //activate();

        ///////////////////

        function activate() {
            DealService.find(vm.dealId).then(function(data) {
                vm.deal = data;
            });
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.users')
        .filter('isYesNo', isYesNo);

    function isYesNo() {
        return function(input) {
            if (input) {
                return 'Yes';
            }

            return 'No';
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app.users')
        .filter('isSuperAdmin', isSuperAdmin);

    function isSuperAdmin() {
        return function(user) {
            if (user) {
                if (user.email == 'admin@example.com') {
                    return true;
                }

            }

            return false;
        }

    }

})();
(function() {
    'use strict';

    angular
        .module('app.users')
        .filter('isRole', isRole);

    function isRole() {
        return function(user) {
            if (user) {
                if (user.is_admin) {
                    return 'Admin';
                }
                if (user.is_vendor) {
                    return 'Vendor';
                }
                if (user.is_customer) {
                    return 'Customer';
                }
            }

            return 'No Role';
        }

    }

})();