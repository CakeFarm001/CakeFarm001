(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-4cf9d976":"de313554"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-4cf9d976":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-4cf9d976":"fadad3c8"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],h.parentNode.removeChild(h),n(i)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0a7c":function(t,e){t.exports={a1:"Connect Wallet",a2:"WHITEPAPER",a3:"AUDIT REPORT",a4:"The BNB Reward Pool with the 10% daily return and 13% referral rewards and lowest dev fee",a5:"Contract",a6:"Wallet",a7:"Your Vegetable",a8:"Vegetable",a9:"Nutrition Facts",a10:"Daily Return",a11:"APR",a12:"Dev Fee",a13:"GROW VEGETABLE",a14:"Your Rewards",a15:"RE-GROW",a16:"HARVEST",a17:"Referral Link",a18:"Earn 13% of the BNB used to grow vegetable from anyone who uses your referral link",a19:"Copy",a20:"Please enter planting quantity",a21:"Not sufficient funds",a22:"Mininum RE-GROW amount must be greater than 0.01 BNB",a23:"Success in growing vegetables",a24:"Regrow success",a25:"Harvest success",a26:"Please install BSC Wallet first",a27:"You need to switch to Kovan chain before connecting",a28:"Connection successful",a29:"Disconnect",a30:"Wallet",tip:"User denied transaction signature"}},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},1267:function(t,e,n){var r,a,o=n("7037").default;n("a434"),n("b64b"),n("99af"),n("a9e3"),n("ac1f"),n("1276"),n("b0c0"),n("fb6a"),n("498a"),n("d3b7"),n("159b"),n("4de4"),n("466d"),n("5319"),n("caad"),n("2532"),n("a15b"),function(i,s){"object"==o(e)&&"undefined"!=typeof t?t.exports=s():(r=s,a="function"===typeof r?r.call(e,n,e,t):r,void 0===a||(t.exports=a))}(0,(function(){"use strict";function t(t,e){"undefined"!=typeof console&&(console.warn("[vue-i18n] "+t),e&&console.warn(e.stack))}function e(t){return null!==t&&"object"==o(t)}function n(t){return M.call(t)===D}function r(t){return null===t||void 0===t}function a(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var r=null,a=null;return 1===t.length?e(t[0])||Array.isArray(t[0])?a=t[0]:"string"==typeof t[0]&&(r=t[0]):2===t.length&&("string"==typeof t[0]&&(r=t[0]),(e(t[1])||Array.isArray(t[1]))&&(a=t[1])),{locale:r,params:a}}function i(t){return JSON.parse(JSON.stringify(t))}function s(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function c(t,e){return A.call(t,e)}function u(t){for(var n=arguments,r=Object(t),a=1;a<arguments.length;a++){var o=n[a];if(void 0!==o&&null!==o){var i=void 0;for(i in o)c(o,i)&&(e(o[i])?r[i]=u(r[i],o[i]):r[i]=o[i])}}return r}function l(t,n){if(t===n)return!0;var r=e(t),a=e(n);if(!r||!a)return!r&&!a&&String(t)===String(n);try{var o=Array.isArray(t),i=Array.isArray(n);if(o&&i)return t.length===n.length&&t.every((function(t,e){return l(t,n[e])}));if(o||i)return!1;var s=Object.keys(t),c=Object.keys(n);return s.length===c.length&&s.every((function(e){return l(t[e],n[e])}))}catch(t){return!1}}function f(t){t.prototype.hasOwnProperty("$i18n")||Object.defineProperty(t.prototype,"$i18n",{get:function(){return this._i18n}}),t.prototype.$t=function(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var r=this.$i18n;return r._t.apply(r,[t,r.locale,r._getMessages(),this].concat(e))},t.prototype.$tc=function(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];var a=this.$i18n;return a._tc.apply(a,[t,a.locale,a._getMessages(),this,e].concat(n))},t.prototype.$te=function(t,e){var n=this.$i18n;return n._te(t,n.locale,n._getMessages(),e)},t.prototype.$d=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).d.apply(e,[t].concat(n))},t.prototype.$n=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this.$i18n).n.apply(e,[t].concat(n))}}function h(t,e,n){g(t,n)&&b(t,e,n)}function p(t,e,n,r){if(g(t,n)){var a=n.context.$i18n;m(t,n)&&l(e.value,e.oldValue)&&l(t._localeMessage,a.getLocaleMessage(a.locale))||b(t,e,n)}}function d(e,n,r,a){r.context?(e.textContent="",e._vt=void 0,delete e._vt,e._locale=void 0,delete e._locale,e._localeMessage=void 0,delete e._localeMessage):t("Vue instance does not exists in VNode context")}function g(e,n){var r=n.context;return r?!!r.$i18n||(t("VueI18n instance does not exists in Vue instance"),!1):(t("Vue instance doest not exists in VNode context"),!1)}function m(t,e){var n=e.context;return t._locale===n.$i18n.locale}function b(e,n,r){var a,o,i=n.value,s=v(i),c=s.path,u=s.locale,l=s.args,f=s.choice;if(c||u||l)if(c){var h=r.context;e._vt=e.textContent=f?(a=h.$i18n).tc.apply(a,[c,f].concat(y(u,l))):(o=h.$i18n).t.apply(o,[c].concat(y(u,l))),e._locale=h.$i18n.locale,e._localeMessage=h.$i18n.getLocaleMessage(h.$i18n.locale)}else t("`path` is required in v-t directive");else t("value type not supported")}function v(t){var e,r,a,o;return"string"==typeof t?e=t:n(t)&&(e=t.path,r=t.locale,a=t.args,o=t.choice),{path:e,locale:r,args:a,choice:o}}function y(t,e){var r=[];return t&&r.push(t),e&&(Array.isArray(e)||n(e))&&r.push(e),r}function _(t){_.installed=!0,O=t,O.version&&Number(O.version.split(".")[0]),f(O),O.mixin(L),O.directive("t",{bind:h,update:p,unbind:d}),O.component(C.name,C),O.config.optionMergeStrategies.i18n=function(t,e){return void 0===e?t:e}}function j(t){for(var e=[],n=0,r="";n<t.length;){var a=t[n++];if("{"===a){r&&e.push({type:"text",value:r}),r="";var o="";for(a=t[n++];void 0!==a&&"}"!==a;)o+=a,a=t[n++];var i="}"===a,s=z.test(o)?"list":i&&P.test(o)?"named":"unknown";e.push({value:o,type:s})}else"%"===a?"{"!==t[n]&&(r+=a):r+=a}return r&&e.push({type:"text",value:r}),e}function w(t,n){var r=[],a=0,o=Array.isArray(n)?"list":e(n)?"named":"unknown";if("unknown"===o)return r;for(;a<t.length;){var i=t[a];switch(i.type){case"text":r.push(i.value);break;case"list":r.push(n[parseInt(i.value,10)]);break;case"named":"named"===o&&r.push(n[i.value])}a++}return r}function k(t){return K.test(t)}function $(t){var e=t.charCodeAt(0);return e!==t.charCodeAt(t.length-1)||34!==e&&39!==e?t:t.slice(1,-1)}function F(t){if(void 0===t||null===t)return"eof";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return"ident"}function T(t){var e=t.trim();return("0"!==t.charAt(0)||!isNaN(t))&&(k(e)?$(e):"*"+e)}function x(t){var e,n,r,a,o,i,s,c=[],u=-1,l=B,f=0,h=[];for(h[I]=function(){void 0!==n&&(c.push(n),n=void 0)},h[W]=function(){void 0===n?n=r:n+=r},h[R]=function(){h[W](),f++},h[V]=function(){if(f>0)f--,l=U,h[W]();else{if(f=0,!1===(n=T(n)))return!1;h[I]()}};null!==l;)if(u++,"\\"!==(e=t[u])||!function(){var e=t[u+1];if(l===q&&"'"===e||l===H&&'"'===e)return u++,r="\\"+e,h[W](),!0}()){if(a=F(e),s=G[l],(o=s[a]||s.else||J)===J)return;if(l=o[0],(i=h[o[1]])&&(r=o[2],r=void 0===r?e:r,!1===i()))return;if(l===Y)return c}}var O,M=Object.prototype.toString,D="[object Object]",A=Object.prototype.hasOwnProperty,N="undefined"!=typeof Intl&&void 0!==Intl.DateTimeFormat,S="undefined"!=typeof Intl&&void 0!==Intl.NumberFormat,L={beforeCreate:function(){var t=this.$options;if(t.i18n=t.i18n||(t.__i18n?{}:null),t.i18n){if(t.i18n instanceof et){if(t.__i18n)try{var e={};t.__i18n.forEach((function(t){e=u(e,JSON.parse(t))})),Object.keys(e).forEach((function(n){t.i18n.mergeLocaleMessage(n,e[n])}))}catch(t){}this._i18n=t.i18n,this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0}else if(n(t.i18n)){if(this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof et&&(t.i18n.root=this.$root,t.i18n.formatter=this.$root.$i18n.formatter,t.i18n.fallbackLocale=this.$root.$i18n.fallbackLocale,t.i18n.silentTranslationWarn=this.$root.$i18n.silentTranslationWarn),t.__i18n)try{var r={};t.__i18n.forEach((function(t){r=u(r,JSON.parse(t))})),t.i18n.messages=r}catch(t){}this._i18n=new et(t.i18n),this._i18nWatcher=this._i18n.watchI18nData(),this._i18n.subscribeDataChanging(this),this._subscribing=!0,(void 0===t.i18n.sync||t.i18n.sync)&&(this._localeWatcher=this.$i18n.watchLocale())}}else this.$root&&this.$root.$i18n&&this.$root.$i18n instanceof et?(this._i18n=this.$root.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0):t.parent&&t.parent.$i18n&&t.parent.$i18n instanceof et&&(this._i18n=t.parent.$i18n,this._i18n.subscribeDataChanging(this),this._subscribing=!0)},beforeDestroy:function(){this._i18n&&(this._subscribing&&(this._i18n.unsubscribeDataChanging(this),delete this._subscribing),this._i18nWatcher&&(this._i18nWatcher(),delete this._i18nWatcher),this._localeWatcher&&(this._localeWatcher(),delete this._localeWatcher),this._i18n=null)}},C={name:"i18n",functional:!0,props:{tag:{type:String,default:"span"},path:{type:String,required:!0},locale:{type:String},places:{type:[Array,Object]}},render:function(t,e){var n=e.props,r=e.data,a=e.children,o=e.parent,i=o.$i18n;if(a=(a||[]).filter((function(t){return t.tag||(t.text=t.text.trim())})),!i)return a;var s=n.path,c=n.locale,u={},l=n.places||{},f=(Array.isArray(l)?l.length:Object.keys(l).length,a.every((function(t){if(t.data&&t.data.attrs){var e=t.data.attrs.place;return void 0!==e&&""!==e}})));return Array.isArray(l)?l.forEach((function(t,e){u[e]=t})):Object.keys(l).forEach((function(t){u[t]=l[t]})),a.forEach((function(t,e){var n=f?""+t.data.attrs.place:""+e;u[n]=t})),t(n.tag,r,i.i(s,c,u))}},E=function(){this._caches=Object.create(null)};E.prototype.interpolate=function(t,e){if(!e)return[t];var n=this._caches[t];return n||(n=j(t),this._caches[t]=n),w(n,e)};var z=/^(?:\d)+/,P=/^(?:\w)+/,W=0,I=1,R=2,V=3,B=0,U=4,q=5,H=6,Y=7,J=8,G=[];G[B]={ws:[B],ident:[3,W],"[":[U],eof:[Y]},G[1]={ws:[1],".":[2],"[":[U],eof:[Y]},G[2]={ws:[2],ident:[3,W],0:[3,W],number:[3,W]},G[3]={ident:[3,W],0:[3,W],number:[3,W],ws:[1,I],".":[2,I],"[":[U,I],eof:[Y,I]},G[U]={"'":[q,W],'"':[H,W],"[":[U,R],"]":[1,V],eof:J,else:[U,W]},G[q]={"'":[U,W],eof:J,else:[q,W]},G[H]={'"':[U,W],eof:J,else:[H,W]};var K=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,Q=function(){this._cache=Object.create(null)};Q.prototype.parsePath=function(t){var e=this._cache[t];return e||(e=x(t))&&(this._cache[t]=e),e||[]},Q.prototype.getPathValue=function(t,n){if(!e(t))return null;var r=this.parsePath(n);if(0===r.length)return null;for(var a=r.length,o=t,i=0;i<a;){var s=o[r[i]];if(void 0===s)return null;o=s,i++}return o};var X=["style","currency","currencyDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","localeMatcher","formatMatcher"],Z=/(?:@:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,tt=/[()]/g,et=function(t){var e=this;void 0===t&&(t={}),!O&&"undefined"!=typeof window&&window.Vue&&_(window.Vue);var n=t.locale||"en-US",a=t.fallbackLocale||"en-US",o=t.messages||{},i=t.dateTimeFormats||{},s=t.numberFormats||{};this._vm=null,this._formatter=t.formatter||new E,this._missing=t.missing||null,this._root=t.root||null,this._sync=void 0===t.sync||!!t.sync,this._fallbackRoot=void 0===t.fallbackRoot||!!t.fallbackRoot,this._silentTranslationWarn=void 0!==t.silentTranslationWarn&&!!t.silentTranslationWarn,this._dateTimeFormatters={},this._numberFormatters={},this._path=new Q,this._dataListeners=[],this._exist=function(t,n){return!(!t||!n)&&!r(e._path.getPathValue(t,n))},this._initVM({locale:n,fallbackLocale:a,messages:o,dateTimeFormats:i,numberFormats:s})},nt={vm:{configurable:!0},messages:{configurable:!0},dateTimeFormats:{configurable:!0},numberFormats:{configurable:!0},locale:{configurable:!0},fallbackLocale:{configurable:!0},missing:{configurable:!0},formatter:{configurable:!0},silentTranslationWarn:{configurable:!0}};return et.prototype._initVM=function(t){var e=O.config.silent;O.config.silent=!0,this._vm=new O({data:t}),O.config.silent=e},et.prototype.subscribeDataChanging=function(t){this._dataListeners.push(t)},et.prototype.unsubscribeDataChanging=function(t){s(this._dataListeners,t)},et.prototype.watchI18nData=function(){var t=this;return this._vm.$watch("$data",(function(){for(var e=t._dataListeners.length;e--;)O.nextTick((function(){t._dataListeners[e]&&t._dataListeners[e].$forceUpdate()}))}),{deep:!0})},et.prototype.watchLocale=function(){if(!this._sync||!this._root)return null;var t=this._vm;return this._root.$i18n.vm.$watch("locale",(function(e){t.$set(t,"locale",e),t.$forceUpdate()}),{immediate:!0})},nt.vm.get=function(){return this._vm},nt.messages.get=function(){return i(this._getMessages())},nt.dateTimeFormats.get=function(){return i(this._getDateTimeFormats())},nt.numberFormats.get=function(){return i(this._getNumberFormats())},nt.locale.get=function(){return this._vm.locale},nt.locale.set=function(t){this._vm.$set(this._vm,"locale",t)},nt.fallbackLocale.get=function(){return this._vm.fallbackLocale},nt.fallbackLocale.set=function(t){this._vm.$set(this._vm,"fallbackLocale",t)},nt.missing.get=function(){return this._missing},nt.missing.set=function(t){this._missing=t},nt.formatter.get=function(){return this._formatter},nt.formatter.set=function(t){this._formatter=t},nt.silentTranslationWarn.get=function(){return this._silentTranslationWarn},nt.silentTranslationWarn.set=function(t){this._silentTranslationWarn=t},et.prototype._getMessages=function(){return this._vm.messages},et.prototype._getDateTimeFormats=function(){return this._vm.dateTimeFormats},et.prototype._getNumberFormats=function(){return this._vm.numberFormats},et.prototype._warnDefault=function(t,e,n,a,o){if(!r(n))return n;if(this._missing){var i=this._missing.apply(null,[t,e,a,o]);if("string"==typeof i)return i}return e},et.prototype._isFallbackRoot=function(t){return!t&&!r(this._root)&&this._fallbackRoot},et.prototype._interpolate=function(t,e,a,o,i,s,c){if(!e)return null;var u,l=this._path.getPathValue(e,a);if(Array.isArray(l)||n(l))return l;if(r(l)){if(!n(e))return null;if("string"!=typeof(u=e[a]))return null}else{if("string"!=typeof l)return null;u=l}return u.indexOf("@:")>=0&&(u=this._link(t,e,u,o,i,s,c)),this._render(u,i,s)},et.prototype._link=function(t,e,n,r,a,o,i){var s=this,c=n,u=c.match(Z);for(var l in u)if(u.hasOwnProperty(l)){var f=u[l],h=f.substr(2).replace(tt,"");if(i.includes(h))return c;i.push(h);var p=s._interpolate(t,e,h,r,"raw"===a?"string":a,"raw"===a?void 0:o,i);if(s._isFallbackRoot(p)){if(!s._root)throw Error("unexpected error");var d=s._root.$i18n;p=d._translate(d._getMessages(),d.locale,d.fallbackLocale,h,r,a,o)}p=s._warnDefault(t,h,p,r,Array.isArray(o)?o:[o]),i.pop(),c=p?c.replace(f,p):c}return c},et.prototype._render=function(t,e,n){var r=this._formatter.interpolate(t,n);return"string"===e?r.join(""):r},et.prototype._translate=function(t,e,n,a,o,i,s){var c=this._interpolate(e,t[e],a,o,i,s,[a]);return r(c)?(c=this._interpolate(n,t[n],a,o,i,s,[a]),r(c)?null:c):c},et.prototype._t=function(t,e,n,r){for(var o,i=[],s=arguments.length-4;s-- >0;)i[s]=arguments[s+4];if(!t)return"";var c=a.apply(void 0,i),u=c.locale||e,l=this._translate(n,u,this.fallbackLocale,t,r,"string",c.params);if(this._isFallbackRoot(l)){if(!this._root)throw Error("unexpected error");return(o=this._root).$t.apply(o,[t].concat(i))}return this._warnDefault(u,t,l,r,i)},et.prototype.t=function(t){for(var e,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return(e=this)._t.apply(e,[t,this.locale,this._getMessages(),null].concat(n))},et.prototype._i=function(t,e,n,r,a){var o=this._translate(n,e,this.fallbackLocale,t,r,"raw",a);if(this._isFallbackRoot(o)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.i(t,e,a)}return this._warnDefault(e,t,o,r,[a])},et.prototype.i=function(t,e,n){return t?("string"!=typeof e&&(e=this.locale),this._i(t,e,this._getMessages(),null,n)):""},et.prototype._tc=function(t,e,n,r,o){for(var i,s=[],c=arguments.length-5;c-- >0;)s[c]=arguments[c+5];if(!t)return"";void 0===o&&(o=1);var u={count:o,n:o},l=a.apply(void 0,s);return l.params=Object.assign(u,l.params),s=null===l.locale?[l.params]:[l.locale,l.params],this.fetchChoice((i=this)._t.apply(i,[t,e,n,r].concat(s)),o)},et.prototype.fetchChoice=function(t,e){if(!t&&"string"!=typeof t)return null;var n=t.split("|");return e=this.getChoiceIndex(e,n.length),n[e]?n[e].trim():t},et.prototype.getChoiceIndex=function(t,e){return t=Math.abs(t),2===e?t?t>1?1:0:1:t?Math.min(t,2):0},et.prototype.tc=function(t,e){for(var n,r=[],a=arguments.length-2;a-- >0;)r[a]=arguments[a+2];return(n=this)._tc.apply(n,[t,this.locale,this._getMessages(),null,e].concat(r))},et.prototype._te=function(t,e,n){for(var r=[],o=arguments.length-3;o-- >0;)r[o]=arguments[o+3];var i=a.apply(void 0,r).locale||e;return this._exist(n[i],t)},et.prototype.te=function(t,e){return this._te(t,this.locale,this._getMessages(),e)},et.prototype.getLocaleMessage=function(t){return i(this._vm.messages[t]||{})},et.prototype.setLocaleMessage=function(t,e){this._vm.$set(this._vm.messages,t,e)},et.prototype.mergeLocaleMessage=function(t,e){this._vm.$set(this._vm.messages,t,u(this._vm.messages[t]||{},e))},et.prototype.getDateTimeFormat=function(t){return i(this._vm.dateTimeFormats[t]||{})},et.prototype.setDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,e)},et.prototype.mergeDateTimeFormat=function(t,e){this._vm.$set(this._vm.dateTimeFormats,t,u(this._vm.dateTimeFormats[t]||{},e))},et.prototype._localizeDateTime=function(t,e,n,a,o){var i=e,s=a[i];if((r(s)||r(s[o]))&&(i=n,s=a[i]),r(s)||r(s[o]))return null;var c=s[o],u=i+"__"+o,l=this._dateTimeFormatters[u];return l||(l=this._dateTimeFormatters[u]=new Intl.DateTimeFormat(i,c)),l.format(t)},et.prototype._d=function(t,e,n){if(!n)return new Intl.DateTimeFormat(e).format(t);var r=this._localizeDateTime(t,e,this.fallbackLocale,this._getDateTimeFormats(),n);if(this._isFallbackRoot(r)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.d(t,n,e)}return r||""},et.prototype.d=function(t){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var a=this.locale,o=null;return 1===n.length?"string"==typeof n[0]?o=n[0]:e(n[0])&&(n[0].locale&&(a=n[0].locale),n[0].key&&(o=n[0].key)):2===n.length&&("string"==typeof n[0]&&(o=n[0]),"string"==typeof n[1]&&(a=n[1])),this._d(t,a,o)},et.prototype.getNumberFormat=function(t){return i(this._vm.numberFormats[t]||{})},et.prototype.setNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,e)},et.prototype.mergeNumberFormat=function(t,e){this._vm.$set(this._vm.numberFormats,t,u(this._vm.numberFormats[t]||{},e))},et.prototype._localizeNumber=function(t,e,n,a,o,i){var s=e,c=a[s];if((r(c)||r(c[o]))&&(s=n,c=a[s]),r(c)||r(c[o]))return null;var u,l=c[o];if(i)u=new Intl.NumberFormat(s,Object.assign({},l,i));else{var f=s+"__"+o;u=this._numberFormatters[f],u||(u=this._numberFormatters[f]=new Intl.NumberFormat(s,l))}return u.format(t)},et.prototype._n=function(t,e,n,r){if(!et.availabilities.numberFormat)return"";if(!n)return(r?new Intl.NumberFormat(e,r):new Intl.NumberFormat(e)).format(t);var a=this._localizeNumber(t,e,this.fallbackLocale,this._getNumberFormats(),n,r);if(this._isFallbackRoot(a)){if(!this._root)throw Error("unexpected error");return this._root.$i18n.n(t,Object.assign({},{key:n,locale:e},r))}return a||""},et.prototype.n=function(t){for(var n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];var a=this.locale,o=null,i=null;return 1===n.length?"string"==typeof n[0]?o=n[0]:e(n[0])&&(n[0].locale&&(a=n[0].locale),n[0].key&&(o=n[0].key),i=Object.keys(n[0]).reduce((function(t,e){var r;return X.includes(e)?Object.assign({},t,(r={},r[e]=n[0][e],r)):t}),null)):2===n.length&&("string"==typeof n[0]&&(o=n[0]),"string"==typeof n[1]&&(a=n[1])),this._n(t,a,o,i)},Object.defineProperties(et.prototype,nt),et.availabilities={dateTimeFormat:N,numberFormat:S},et.install=_,et.version="8.3.2",et}))},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e){},20:function(t,e){},21:function(t,e){},22:function(t,e){},3:function(t,e){},"3dfe":function(t,e){t.exports={a1:"连接钱包",a2:"白皮书",a3:"审计报告",a4:"BNB奖励池，每日10%的回报和13%的推荐奖励和最低的开发费用",a5:"合约",a6:"钱包",a7:"你的蔬菜",a8:"蔬菜",a9:"营养成分",a10:"每日回报",a11:"年利率",a12:"开发费",a13:"种植蔬菜",a14:"您的奖励",a15:"重新成长",a16:"收成",a17:"推荐链接",a18:"从使用您推荐链接的任何人那里赚取13%的用于种植蔬菜的BNB",a19:"复制",a20:"请输入种植数量",a21:"余额不足",a22:"重新成长数量不得低于0.01BNB",a23:"种植蔬菜成功",a24:"重新成长成功",a25:"收成成功",a26:"请先安装 BSC wallet",a27:"您需要在连接前切换到Kovan链",a28:"连接成功",a29:"断开连接",a30:"钱包",tip:"用户拒绝事务签名"}},4:function(t,e){},4678:function(t,e,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="4678"},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("5530"),s=n("2f62"),c={data:function(){return{}},created:function(){this.getAccount()},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["login"])),{},{getAccount:function(){console.log("111"),this.$storage.has("account")&&(console.log("has"),this.login(this.$storage.get("account")))}})},u=c,l=(n("034f"),n("2877")),f=Object(l["a"])(u,a,o,!1,null,null,null),h=f.exports,p=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["default"].use(p["a"]);var d=[{path:"/",name:"index",component:function(){return n.e("chunk-4cf9d976").then(n.bind(null,"1e4b"))}}],g=new p["a"]({routes:d}),m=g;r["default"].use(s["a"]);var b=new s["a"].Store({state:{account:void 0},mutations:{login:function(t,e){t.account=e,window.localStorage.setItem("account",e)},loginout:function(t){t.account=void 0,window.localStorage.removeItem("account")}},actions:{}}),v=b,y=n("99e5"),_=n.n(y),j=n("5c96"),w=n.n(j),k=(n("0fae"),n("e05f"),n("4eb5")),$=n.n(k),F={};r["default"].use($.a),F.jump=function(t,e){m.push({path:t,query:e})},F.copy=function(t){if(!t||void 0==t)return w.a.Message.error("复制内容为空");r["default"].prototype.$copyText(t).then((function(t){console.log(t),w.a.Message.success("复制成功")}),(function(t){console.log(t),w.a.Message.error("复制失败")}))},F.back=function(){m.go(-1)},F.success=function(t){w.a.Message.success(t)},F.warning=function(t){w.a.Message.warning(t)},F.info=function(t){w.a.Message.info(t)},F.error=function(t){w.a.Message.error(t)};var T=F;n("4de4"),n("b680"),n("ac1f"),n("1276"),n("a9e3");r["default"].filter("formatTime",(function(t,e){var n="",r=new Date;r.setTime(t);var a=r.getFullYear(),o=r.getMonth()+1,i=o<10?"0"+o:o,s=r.getDate()<10?"0"+r.getDate():r.getDate(),c=r.getHours()<10?"0"+r.getHours():r.getHours(),u=r.getMinutes()<10?"0"+r.getMinutes():r.getMinutes(),l=r.getSeconds()<10?"0"+r.getSeconds():r.getSeconds();return"YMD"==e?n=a+"-"+i+"-"+s:"YMDHMS"==e?n=a+"-"+i+"-"+s+" "+c+":"+u+":"+l:"HMS"==e?n=c+":"+u+":"+l:"YM"==e&&(n=a+"-"+i),n})),r["default"].filter("number",(function(t,e){null!=t&&""!=t||(t=0),t=parseFloat(t),t=t.toFixed(8);var n=(t+"").split("."),r=n[0],a=0;return n.length>1&&(a=n[1],a.length>e&&(a=a.substring(0,e))),t=Number(r+"."+a),Number(t).toFixed(e)}));var x=n("1267"),O=n.n(x),M=n("da7e"),D=n.n(M),A=n("0a7c"),N=n.n(A),S=n("3dfe"),L=n.n(S);r["default"].use(O.a);var C={En:{message:N.a},Cn:{message:L.a}},E=D.a.has("language")?D.a.get("language"):"Cn";window.localStorage.setItem("language",E);var z=new O.a({locale:E,messages:C});r["default"].prototype.i18n=z;var P=z,W=n("2ef0"),I=n.n(W),R=n("313e"),V=n.n(R),B=n("bc3a"),U=n.n(B),q="test",H={dev:{baseUrl:"http://192.168.1.134:8069/",networkVersion:97},test:{baseUrl:"http://192.168.1.134:8069/",networkVersion:97},prod:{baseUrl:"https://bonusapi.godofwar.io",networkVersion:56}},Y=H[q],J=Y,G=U.a.create({baseURL:J.baseUrl,timeout:6e4,headers:{Authorization:"Bearer "+window.localStorage.getItem("myToken")}});function K(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,a){G.get(t,e,{headers:n}).then((function(t){r(t)})).catch((function(t){a(t)}))}))}function Q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(r,a){G.post(t,e,{headers:n}).then((function(t){r(t)}),(function(t){a(t)}))}))}G.interceptors.request.use((function(t){return t.headers.Authorization&&(t.headers.Authorization="Bearer "+window.localStorage.getItem("myToken"),t.ContentType="multipart/form-data"),t}),(function(t){return Promise.reject(t)}));var X=n("c1df"),Z=n.n(X);r["default"].prototype.$store=v,r["default"].prototype.$Web3=_.a,r["default"].use(w.a),r["default"].prototype.$tools=T,r["default"].prototype._=I.a,r["default"].prototype.$echarts=V.a,r["default"].prototype.$storage=D.a,r["default"].prototype.$post=Q,r["default"].prototype.$get=K,r["default"].prototype.$moment=Z.a,r["default"].config.productionTip=!1,new r["default"]({router:m,store:v,i18n:P,render:function(t){return t(h)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},"85ec":function(t,e,n){},9:function(t,e){}});
//# sourceMappingURL=app.ee14c04f.js.map