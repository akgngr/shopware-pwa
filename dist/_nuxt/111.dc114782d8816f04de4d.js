(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1002:function(t,e,n){"use strict";var r={name:"SwLink",components:{SfLink:n(71).a},props:{link:{required:!0,type:String},target:{default:"_blank",type:String}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("SfLink",{attrs:{link:t.link,target:t.target}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},1081:function(t,e,n){var content=n(1294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("0534671e",content,!0,{sourceMap:!1})},1082:function(t,e,n){var content=n(1296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("4d786962",content,!0,{sourceMap:!1})},1083:function(t,e,n){var content=n(1298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("1a30274a",content,!0,{sourceMap:!1})},1293:function(t,e,n){"use strict";n(1081)},1294:function(t,e,n){var r=n(9)((function(i){return i[1]}));r.push([t.i,".display-none[data-v-fce2e82e]{display:none}.cms-element-image[data-v-fce2e82e]{--image-width:100%;width:100%}",""]),r.locals={},t.exports=r},1295:function(t,e,n){"use strict";n(1082)},1296:function(t,e,n){var r=n(9)((function(i){return i[1]}));r.push([t.i,".display-none{display:none}.cms-element-text{padding:var(--spacer-xl)}@media(min-width:1024px){.cms-element-text{margin:0 auto;max-width:var(--boxed-mode-max-width)}}",""]),r.locals={},t.exports=r},1297:function(t,e,n){"use strict";n(1083)},1298:function(t,e,n){var r=n(9)((function(i){return i[1]}));r.push([t.i,".display-none[data-v-1fac5348]{display:none}.cms-block-image-text-gallery__container[data-v-1fac5348]{display:flex;flex-wrap:wrap}@media(max-width:1023px){.cms-block-image-text-gallery__container[data-v-1fac5348]{display:contents}}@media(min-width:1024px){.cms-block-image-text-gallery__container[data-v-1fac5348]{margin-left:7rem;margin-right:7rem}}.cms-block-image-text-gallery__container__column[data-v-1fac5348]{padding:var(--spacer-sm)}@media(min-width:1024px){.cms-block-image-text-gallery__container__column[data-v-1fac5348]{display:grid;flex-grow:1;flex:1 1 0}}.cms-block-image-text-gallery__container__column .cms-element-image[data-v-1fac5348]{--image-height:320px;--image-width:100%}.cms-block-image-text-gallery__container__column--text[data-v-1fac5348]{text-align:center}",""]),r.locals={},t.exports=r},948:function(t,e,n){!function(){var e,b={},n={};function r(t){return JSON.parse(JSON.stringify(t))}function o(t){var e,s,n=r(t.attrs),o=null===(e=t.attrs)||void 0===e?void 0:e.class,l=null===(s=t.attrs)||void 0===s?void 0:s.style;return delete n.style,delete n.class,{style:l,attrs:n,class:o}}e={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};var l,c=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g;l=function(t){var n,r=0,o=!0,a={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return t.replace(c,(function(l){if("="===l)return o=!0,void r++;o?0===r?((e[l]||"/"===t.charAt(t.length-2))&&(a.voidElement=!0),a.name=l):(a.attrs[n]=l.replace(/^['"]|['"]$/g,""),n=void 0):(n&&(a.attrs[n]=n),n=l),r++,o=!1})),a};var m=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,f=Object.create?Object.create(null):{};function d(t,e,n,r,a){var o=e.indexOf("<",r),l=e.slice(r,-1===o?void 0:o);/^\s*$/.test(l)&&(l=" "),(!a&&o>-1&&n+t.length>=0||" "!==l)&&t.push({type:"text",content:l})}function v(t,e){switch(e.type){case"text":return t+e.content;case"tag":return t+="<"+e.name+(e.attrs?function(t){var e=[];for(var n in t)e.push(n+'="'+t[n]+'"');return e.length?" "+e.join(" "):""}(e.attrs):"")+(e.voidElement?"/>":">"),e.voidElement?t:t+e.children.reduce(v,"")+"</"+e.name+">"}}function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t){return"object"===y(t)&&void 0!==t.type}function x(t,e){var n=r(t),o=e.extraComponentsMap?Object.keys(e.extraComponentsMap):[];return function(t,e){(function t(n,r,p,o){var l=this;if(e(n,r,p,o),Array.isArray(n))n.forEach((function(e,r){t.call(l,e,n,null,r)}));else if(h(n))for(var a=Object.keys(n),i=0;i<a.length;i++){var s=n[a[i]];if(Array.isArray(s))for(var c=0;c<s.length;c++)t.call(this,s[c],n,p,c);else h(s)&&t.call(this,s,n,p)}}).call(this,t,null)}(n,(function(t,n,p,r){for(var l=0;l<o.length;l++){var a=o[l];e.extraComponentsMap[a].conditions(t)&&(t.name=a)}})),n}function _(t){return function(t){if(Array.isArray(t))return q(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return q(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}n={parse:function(t,e){e||(e={}),e.components||(e.components=f);var n,r=[],a=-1,o=[],c={},p=!1;return t.replace(m,(function(m,f){if(p){if(m!=="</"+n.name+">")return;p=!1}var s,i="/"!==m.charAt(1),v=0===m.indexOf("\x3c!--"),y=f+m.length,g=t.charAt(y);i&&!v&&(a++,"tag"===(n=l(m)).type&&e.components[n.name]&&(n.type="component",p=!0),n.voidElement||p||!g||"<"===g||d(n.children,t,a,y,e.ignoreWhitespace),c[n.tagName]=n,0===a&&r.push(n),(s=o[a-1])&&s.children.push(n),o[a]=n),(v||!i||n.voidElement)&&(v||a--,!p&&"<"!==g&&g&&d(s=-1===a?r:o[a].children,t,a,y,e.ignoreWhitespace))})),!r.length&&t.length&&d(r,t,0,0,e.ignoreWhitespace),r},stringify:function(t){return t.reduce((function(t,e){return t+v("",e)}),"")}};var C={container:{type:"div"},extraComponentsMap:{},renderAnyway:!1,textTransformer:function(t){return t}};b.renderHtml=function(t,e,r,l){var c=Object.assign(C,e);return function(t,e,n,a){return n(e.container.type,a.data,_(function t(n,r,l,i,c){var m=this;if(Array.isArray(r)){var u=[];return r.forEach((function(e,a){u.push(t.call(m,n,e,r,null,a,n))})),u}if(h(r)){if("text"===r.type)return e.textTransformer(r.content);if("tag"===r.type){var f=[];return r.children.forEach((function(e,a){f.push(t.call(m,n,e,r,a))})),void 0!==e.extraComponentsMap[r.name]?e.extraComponentsMap[r.name].renderer.call(this,r,f,n,a):n(r.name,o(r),[].concat(f))}}}.call(this,n,t)))}(x(function(t){return n.parse(t)}(t),e),c,r,l)},b.getOptionsFromNode=o,t.exports=b}()},952:function(t,e,n){"use strict";n.r(e);n(91),n(6),n(16),n(40);var r=n(17),o=n(1002),l=n(141),c=n(221),m={name:"CmsElementImage",components:{SwImage:l.a,SwLink:o.a},props:{content:{type:Object,default:function(){return{}}}},computed:{alt:function(){return this.getMedia&&this.getMedia.alt||" "},getMedia:function(){return this.content&&this.content.data&&this.content.data.media},imagesUrl:function(){var t,e;return null!==(t=null===(e=this.getMedia)||void 0===e?void 0:e.thumbnails)&&void 0!==t?t:[]},imgUrl:function(){return Object(c.a)(this.getMedia&&this.getMedia.url)},lazyLoad:function(){return"lazy"},link:function(){return Object(r.f)(this.content)},title:function(){return this.getMedia&&this.getMedia.title},target:function(){return Object(r.g)(this.content)},minHeight:function(){var t,e,n,r;return(null===(t=this.content)||void 0===t||null===(e=t.config)||void 0===e||null===(n=e.minHeight)||void 0===n||null===(r=n.value)||void 0===r?void 0:r.replace("px",""))||"100"},minWidth:function(){var t,e,n,r;return(null===(t=this.content)||void 0===t||null===(e=t.config)||void 0===e||null===(n=e.minWidth)||void 0===n||null===(r=n.value)||void 0===r?void 0:r.replace("px",""))||"100"}}},f=(n(1293),n(2)),d=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.imagesUrl&&t.imagesUrl.length||t.imgUrl?n("div",[t.link?n("SwLink",{staticClass:"cms-element-image__link",attrs:{link:t.link,target:t.target}},[n("SwImage",{staticClass:"cms-element-image",attrs:{srcset:t.imagesUrl,src:t.imgUrl,title:t.title,alt:t.alt,loading:t.lazyLoad}})],1):n("SwImage",{staticClass:"cms-element-image",attrs:{srcset:t.imagesUrl,src:t.imgUrl,title:t.title,alt:t.alt,loading:t.lazyLoad,height:t.minHeight,width:t.minWidth}})],1):t._e()}),[],!1,null,"fce2e82e",null).exports,v=(n(34),n(29),n(37),n(54),n(14),n(55),n(77)),y=n(20),h=(n(22),n(143),n(71)),x=n(68),_=n(948);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"CmsElementText",functional:!0,props:{content:{type:Object,default:function(){return{}}}},render:function(t,e){var n,r,o={textTransformer:e.parent.$entitiesDecoder,extraComponentsMap:{link:{conditions:function(t){var e,n;return"tag"===t.type&&"a"===t.name&&!(null!==(e=t.attrs)&&void 0!==e&&null!==(n=e.class)&&void 0!==n&&n.match(/btn\s?/))},renderer:function(t,e,n){var r;return n(h.a,k(k({},Object(_.getOptionsFromNode)(t)),{},{props:{link:null===(r=t.attrs)||void 0===r?void 0:r.href}}),Object(v.a)(e))}},button:{conditions:function(t){var e,n;return"tag"===t.type&&"a"===t.name&&(null===(e=t.attrs)||void 0===e||null===(n=e.class)||void 0===n?void 0:n.match(/btn\s?/))},renderer:function(t,e,n){var r,o,l,c=null==t||null===(r=t.attrs)||void 0===r?void 0:r.class.replace("btn-secondary","color-secondary").replace("btn-primary","color-primary");return n(x.default,{class:c,attrs:{target:null===(o=t.attrs)||void 0===o?void 0:o.target},props:{link:null===(l=t.attrs)||void 0===l?void 0:l.href}},Object(v.a)(e))}}}},l=null===(n=e.props.content)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.content;return l&&Object(_.renderHtml)(l,o,t,e)||Object(_.renderHtml)("<div></div>",o,t,e)}},w=(n(1295),Object(f.a)(O,undefined,undefined,!1,null,null,null).exports),j=function(t,e){var image=t.find((function(slot){return slot.slot==="".concat(e,"-image")})),text=t.find((function(slot){return slot.slot==="".concat(e,"-text")})),n=image&&image.data,r=n.newTab;return{image:image,text:text,url:n.url,newTab:r}},S={name:"CmsBlockImageTextGallery",components:{CmsElementImage:d,CmsElementText:w},props:{content:{type:Object,default:function(){return{}}}},computed:{getBgColor:function(){return this.content.backgroundColor},getSlots:function(){return this.content.slots||[]},getLeftColumn:function(){return j(this.getSlots,"left")},getCenterColumn:function(){return j(this.getSlots,"center")},getRightColumn:function(){return j(this.getSlots,"right")}},methods:{onImageClick:function(t){t&&t.url&&(t.newTab?window.open(t.url):window.location.href=t.url)}}},E=(n(1297),Object(f.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"cms-block-image-text-gallery",style:{backgroundColor:t.getBgColor}},[n("div",{staticClass:"cms-block-image-text-gallery__container"},[n("div",{staticClass:"cms-block-image-text-gallery__container__column"},[n("CmsElementImage",{style:{cursor:t.getLeftColumn.url&&"pointer"},attrs:{content:t.getLeftColumn.image},nativeOn:{click:function(e){return t.onImageClick(t.getLeftColumn)}}}),t._v(" "),n("CmsElementText",{staticClass:"cms-block-image-text-gallery__container__column--text",attrs:{content:t.getLeftColumn.text}})],1),t._v(" "),n("div",{staticClass:"cms-block-image-text-gallery__container__column"},[n("CmsElementImage",{style:{cursor:t.getCenterColumn.url&&"pointer"},attrs:{content:t.getCenterColumn.image},nativeOn:{click:function(e){return t.onImageClick(t.getCenterColumn)}}}),t._v(" "),n("CmsElementText",{staticClass:"cms-block-image-text-gallery__container__column--text",attrs:{content:t.getCenterColumn.text}})],1),t._v(" "),n("div",{staticClass:"cms-block-image-text-gallery__container__column"},[n("CmsElementImage",{style:{cursor:t.getRightColumn.url&&"pointer"},attrs:{content:t.getRightColumn.image},nativeOn:{click:function(e){return t.onImageClick(t.getRightColumn)}}}),t._v(" "),n("CmsElementText",{staticClass:"cms-block-image-text-gallery__container__column--text",attrs:{content:t.getRightColumn.text}})],1)])])}),[],!1,null,"1fac5348",null));e.default=E.exports}}]);