!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["utils/image-resolution"]=e():t["utils/image-resolution"]=e()}(globalThis,(()=>(()=>{var t,e,o={708:(t,e,o)=>{var n=o(955)((function(t){return t[1]}));n.push([t.id,".favInfo-box .collection-cover img,\n.favInfo-box .favInfo-cover img {\n  width: 100% !important;\n  object-position: left !important;\n}\n\n.bb-comment .sailing .sailing-img,\n.comment-bilibili-fold .sailing .sailing-img {\n  width: 288px;\n}",""]),t.exports=n},955:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o=t(e);return e[2]?"@media ".concat(e[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,o,n){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var i={};if(n)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&i[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),e.push(c))}},e}},186:(t,e,o)=>{var n=o(708);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},288:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=288,t.exports=e},903:t=>{"use strict";t.exports="对 200% 以上的屏幕 DPI 缩放请求更高分辨率的图片, 加载时间也会相应变长一些. (也会导致某些浏览器里出现图片闪动, 因为本质上是更换了图片源)\n\n由于 b 站在很多地方没有设置图片维持原比例, 如果计算后的图片尺寸超出原图尺寸则会产生错误的比例, 可以考虑在选项中手动降低缩放级别.\n\n`缩放级别` 选项:\n- `auto`: 根据 DPI 缩放超出 200% 的比例自动计算, 例如 250% 的缩放下会请求 1.5 倍尺寸的图片.\n- `数字`: 自定义尺寸的缩放倍率.\n"},104:t=>{"use strict";t.exports=coreApis.observer}},n={};function i(t){var e=n[t];if(void 0!==e)return e.exports;var r=n[t]={id:t,exports:{}};return o[t](r,r.exports,i),r.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var r=Object.create(null);i.r(r);var s={};t=t||[null,e({}),e([]),e(e)];for(var a=2&n&&o;"object"==typeof a&&!~t.indexOf(a);a=e(a))Object.getOwnPropertyNames(a).forEach((t=>s[t]=()=>o[t]));return s.default=()=>o,i.d(r,s),r},i.d=(t,e)=>{for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i.d(r,{component:()=>p});const t=coreApis.componentApis.define,e=coreApis.componentApis.styledComponent,o=/@(\d+)[Ww](_(\d+)[Hh])?/,n=["#certify-img1","#certify-img2"],s=[".bili-avatar-img"],a=[".logo-img"],c=[".article-detail .article-content img"],l=(t,e)=>{const o=document.createNodeIterator(t,NodeFilter.SHOW_ELEMENT);let n=o.nextNode();for(;n;)e(n),n=o.nextNode()},d=async(t,e)=>{const{attributes:r}=await Promise.resolve().then(i.t.bind(i,104,23)),c=(i,r)=>{const c=i(t);if(null===c)return;if(n.some((e=>t.matches(e))))return;if(c.includes(","))return;const l=c.match(o);if(!l)return;const[,d,,u]=l,f=parseInt(t.getAttribute("data-resolution-width")||"0");if(parseInt(d)>=f&&0!==f)return;null===t.getAttribute("width")&&null===t.getAttribute("height")&&void 0!==u&&(a.some((e=>t.matches(e)))?(t.setAttribute("height",u),t.setAttribute("width",d)):s.some((e=>t.matches(e)))?t.setAttribute("height",u):t.setAttribute("width",d));const p=(t,e)=>t===1/0||e===1/0?c.replace(o,"@"):void 0===e?c.replace(o,`@${t}w`):c.replace(o,`@${t}w_${e}h`);if(void 0!==u){const o=e.getWidth(parseInt(d),t),n=e.getHeight(parseInt(u),t);t.setAttribute("data-resolution-width",o.toString()),r(t,p(o,n))}else{const o=e.getWidth(parseInt(d),t);t.setAttribute("data-resolution-width",o.toString()),r(t,p(o))}};r(t,(()=>{c((t=>t.getAttribute("src")),((t,e)=>t.setAttribute("src",e))),c((t=>t.getAttribute("srcset")),((t,e)=>t.setAttribute("srcset",e))),c((t=>t.style.backgroundImage),((t,e)=>t.style.backgroundImage=e))}))},u=(0,e.styledComponentEntry)((()=>Promise.resolve().then(i.t.bind(i,186,23))),(async t=>{let{settings:e}=t;const{allMutations:o}=await Promise.resolve().then(i.t.bind(i,104,23)),n="auto"===e.options.scale?window.devicePixelRatio<=2?1:window.devicePixelRatio/2:parseFloat(e.options.scale);if(1===n)return;const r={getWidth:(t,o)=>e.options.originalImageInArticles&&c.some((t=>o.matches(t)))?1/0:Math.round(n*t),getHeight:(t,o)=>e.options.originalImageInArticles&&c.some((t=>o.matches(t)))?1/0:Math.round(n*t)};l(document.body,(t=>d(t,r))),o((t=>{t.forEach((t=>t.addedNodes.forEach((t=>{t instanceof HTMLElement&&(d(t,r),"IMG"!==t.nodeName.toUpperCase()&&l(t,(t=>d(t,r))))}))))}))})),f=(0,t.defineOptionsMetadata)({scale:{displayName:"缩放级别",defaultValue:"auto"},originalImageInArticles:{displayName:"在专栏中请求原图",defaultValue:!1}}),p=(0,t.defineComponentMetadata)({name:"imageResolution",displayName:"高分辨率图片",tags:[componentsTags.utils],enabledByDefault:window.devicePixelRatio>1,entry:u,options:f,commitHash:"ce4ee6223b703bc41b39851cc7b4327f6ab775bf",coreVersion:"2.10.0",description:(()=>{const t=i(288);return{...Object.fromEntries(t.keys().map((e=>[e.match(/index\.(.+)\.md$/)[1],t(e)]))),"zh-CN":()=>Promise.resolve().then(i.t.bind(i,903,17)).then((t=>t.default))}})()})})(),r=r.component})()));