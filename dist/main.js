(()=>{"use strict";var e,n,t,r,o={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),c=t(643),s=o()((function(e){return e[1]})),d=i()(c);s.push([e.id,"* {\n  margin: 0;\n  padding: 0;  \n}\n\nbody {\n  background: url("+d+");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.content {\n  width: 1200px;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center;\n}\n\n.header {\n  margin-top: 25%;\n  font-size: 80px;\n  font-weight: 900;\n  color: coral;\n}\n\n.home-p {\n  background-color: bisque;\n  opacity: 0.8;\n  width: 60%;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 20px;\n  font-size: 22px;\n  border-radius: 5px;\n  margin-top: 40px;\n  line-height: 2;\n}\n\n.navbar {  \n  background-color: bisque;\n  opacity: 0.7;\n  padding-right: 300px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.nav-item {\n  margin-right: 30px;\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.nav-item:hover {\n  border-bottom: 5px solid coral;\n  cursor: pointer;  \n}\n",""]);const u=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],s=n.base?c[0]+n.base:c[0],d=t[s]||0,u="".concat(s," ").concat(d);t[s]=d+1;var l=i(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:u,updater:h(p,n),references:1}),r.push(u)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var d,u=(d=[],function(e,n){return d[e]=n,d.filter(Boolean).join("\n")});function l(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,n){var t,r,o;if(n.singleton){var a=m++;t=f||(f=s(n)),r=l.bind(null,t,a,!1),o=l.bind(null,t,a,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var s=c(e,n),d=0;d<t.length;d++){var u=i(t[d]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=s}}}},643:(e,n,t)=>{e.exports=t.p+"ffa7adb2c7bd06f8d024.jpg"},157:(e,n,t)=>{e.exports=t.p+"b2907889cfd94a5172bc.jpg"}},a={};function i(e){if(a[e])return a[e].exports;var n=a[e]={id:e,exports:{}};return o[e](n,n.exports,i),n.exports}i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),e=i(157),n=i(379),t=i.n(n),r=i(426),t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{(()=>{const n=document.querySelector(".content"),t=document.createElement("h1");t.classList.add("header"),t.innerHTML="Welcome to MuzzArt Restaurant";const r=document.createElement("p");r.classList.add("home-p"),r.innerHTML="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, deleniti dolores!\n  Veritatis aliquid doloremque libero corrupti illo incidunt magnam reprehenderit architecto.\n  Quo, vitae quos quam dolorum expedita rerum accusantium veritatis?";const o=new Image;o.src=e,o.classList.add("coverImg"),n.appendChild(t),n.appendChild(r)})(),(()=>{const e=document.createElement("div");e.classList.add("navbar");const n=document.createElement("nav");n.classList.add("nav-item","home-nav"),n.innerHTML="Home";const t=document.createElement("nav");t.classList.add("nav-item","menu-nav"),t.innerHTML="Menu";const r=document.createElement("nav");r.classList.add("nav-item","contact-nav"),r.innerHTML="Contact Us",e.appendChild(n),e.appendChild(t),e.appendChild(r);const o=document.querySelector(".content");document.querySelector("body").insertBefore(e,o)})()}))})();