(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1116:function(e,t,l){"use strict";l.r(t);l(63);var r=l(3),o=(l(34),l(29),l(37),l(6),l(54),l(14),l(55),l(20)),n=(l(60),l(935),l(35),l(906)),c=l(225),d=l(27);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"SfGallery",components:{SfImage:c.a,SfButton:d.a},props:{images:{type:Array,default:function(){return[]}},imageWidth:{type:[Number,String],default:null},imageHeight:{type:[Number,String],default:null},thumbWidth:{type:[Number,String],default:null},thumbHeight:{type:[Number,String],default:null},current:{type:Number,default:1},sliderOptions:{type:Object,default:function(){return{type:"slider",autoplay:!1,rewind:!1,gap:0}}},outsideZoom:{type:Boolean,default:!1},enableZoom:{type:Boolean,default:!1},imageTag:{type:String,default:"img"},nuxtImgConfig:{type:Object,default:function(){return{}}},thumbImageTag:{type:String,default:"img"},thumbNuxtImgConfig:{type:Object,default:function(){return{}}}},data:function(){return{positionStatic:{},eventHover:{},glide:null,activeIndex:this.current-1,style:"",pictureSelected:this.images[0]||{alt:"",zoom:"",big:{url:""},desktop:"",placeholder:""},isZoomStarted:!1}},computed:{mapPictures:function(){return this.images.map((function(e){return{mobile:e.desktop,desktop:e.big}}))},updatedSliderOptions:function(){return f(f({},this.sliderOptions),{},{startAt:this.activeIndex})},definedPicture:function(){var e,t,l=this.pictureSelected,r=l.zoom,o=l.big,n=l.desktop,c=r||o||n;return c&&(c.alt=null===(e=this.pictureSelected)||void 0===e?void 0:e.alt),c&&(c.placeholder=null===(t=this.pictureSelected)||void 0===t?void 0:t.placeholder),c||""}},mounted:function(){var e=this;this.$nextTick((function(){if(!(e.images.length<1)){var t=new n.a(e.$refs.glide,e.updatedSliderOptions);t.on("run",(function(){e.go(t.index)})),t.mount(),e.glide=t}}))},updated:function(){var e=this;this.glide&&this.$nextTick((function(){e.glide.mount()}))},beforeDestroy:function(){this.glide&&this.glide.destroy()},methods:{positionObject:function(e){return this.$refs.sfGalleryBigImage?this.outsideZoom?this.$refs.glide.getBoundingClientRect():this.$refs.sfGalleryBigImage[e].$el.getBoundingClientRect():""},go:function(e){this.pictureSelected=this.images[e],this.glide&&(this.activeIndex=e,this.$emit("click",e+1),this.glide&&this.glide.go("=".concat(e)))},startZoom:function(){this.enableZoom&&(this.isZoomStarted=!0)},moveZoom:function(e,t){this.enableZoom&&(this.eventHover=e,this.outsideZoom?(this.positionStatic=this.positionObject(t),this.$refs.imgZoom.$el.children[0].style.cssText="top: 0; transform: scale(2);",this.$refs.imgZoom.$el.children[0].style.transformOrigin="".concat(e.clientX-this.positionStatic.x,"px ").concat(e.clientY-this.positionStatic.y,"px")):(this.positionStatic=this.positionObject(t),this.$refs.sfGalleryBigImage[t].$el.children[0].style.cssText="top: 0; transform: scale(2);",this.$refs.sfGalleryBigImage[t].$el.children[0].style.transformOrigin="".concat(e.clientX-this.positionStatic.x,"px ").concat(e.clientY-this.positionStatic.y,"px")))},removeZoom:function(e){if(this.enableZoom){if(this.isZoomStarted=!1,this.outsideZoom)return;this.$refs.sfGalleryBigImage[e].$el.children[0].style.transform="scale(1)"}}}},y=(l(936),l(2)),v=Object(y.a)(h,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"sf-gallery"},[l("div",{staticClass:"sf-gallery__stage"},[l("div",{ref:"glide",staticClass:"glide"},[l("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[l("ul",{staticClass:"glide__slides"},e._l(e.images,(function(picture,t){return l("li",{key:"slide-"+t,staticClass:"glide__slide",on:{mouseover:function(t){return e.startZoom(picture)},mousemove:function(l){return e.moveZoom(l,t)},mouseout:function(l){return e.removeZoom(t)}}},[e._t("big-image",(function(){return[l("SfImage",{ref:"sfGalleryBigImage",refInFor:!0,staticClass:"sf-gallery__big-image",class:{"sf-gallery__big-image--has-zoom":e.enableZoom},attrs:{src:picture.desktop.url,alt:picture.alt,placeholder:picture.placeholder,width:e.imageWidth,height:e.imageHeight,"image-tag":e.imageTag,"nuxt-img-config":e.nuxtImgConfig},on:{click:function(l){return e.$emit("click:stage",{picture:picture,index:t})}}})]}),null,{enableZoom:e.enableZoom,picture:picture,index:t,imageWidth:e.imageWidth,imageHeight:e.imageHeight,imageTag:e.imageTag,nuxtImgConfig:e.nuxtImgConfig})],2)})),0)])]),e._v(" "),l("transition",{attrs:{name:"sf-fade"}},[l("div",{ref:"outSide",class:{"display-none":!e.outsideZoom||!e.isZoomStarted||!e.outsideZoom&&!e.enableZoom},style:{width:e.imageWidth+"px",height:e.imageHeight+"px"}},[e._t("outside-zoom",(function(){return[l("SfImage",{ref:"imgZoom",staticClass:"sf-gallery__zoom",attrs:{src:e.definedPicture.url,width:e.imageWidth,height:e.imageHeight,lazy:!1,alt:e.definedPicture.alt,placeholder:e.definedPicture.placeholder,"image-tag":e.imageTag,"nuxt-img-config":e.nuxtImgConfig}})]}),null,{definedPicture:e.definedPicture,imageWidth:e.imageWidth,imageHeight:e.imageHeight,imageTag:e.imageTag,nuxtImgConfig:e.nuxtImgConfig})],2)])],1),e._v(" "),l("div",{staticClass:"sf-gallery__thumbs"},[e._t("thumbs",(function(){return e._l(e.images,(function(image,t){return l("SfButton",{key:"img-"+t,staticClass:"sf-button--pure sf-gallery__item",class:{"sf-gallery__item--selected":t===e.activeIndex},attrs:{"aria-label":"Image "+t},on:{click:function(l){return e.go(t)}}},[l("SfImage",{staticClass:"sf-gallery__thumb",attrs:{src:image.mobile.url,alt:image.alt,placeholder:image.placeholder,width:e.thumbWidth,height:e.thumbHeight,"image-tag":e.thumbImageTag,"nuxt-img-config":e.thumbNuxtImgConfig}})],1)}))}),null,{images:e.images,active:e.activeIndex,go:e.go})],2)])}),[],!1,null,null,null).exports,_=l(17),x=l(221),w=l(227),O={name:"SwProductGallery",components:{SfGallery:v},props:{content:{type:Object,default:function(){return{}}}},setup:function(e){var t=Object(r.g)("cms-page");return{product:Object(r.a)((function(){var l,r,o;return(null==t||null===(l=t.value)||void 0===l?void 0:l.product)||{media:null===(r=e.content)||void 0===r||null===(o=r.data)||void 0===o?void 0:o.sliderItems}}))}},computed:{mediaGallery:function(){var e,t,l,r,o,n,c=(null===(e=this.$refs.imageRef)||void 0===e||null===(t=e.$el)||void 0===t||null===(l=t.getBoundingClientRect())||void 0===l?void 0:l.width)||400,d=(null===(r=this.$refs.imageRef)||void 0===r||null===(o=r.$el)||void 0===o||null===(n=o.getBoundingClientRect())||void 0===n?void 0:n.height)||600;return Object(_.o)({product:this.product}).map((function(element){var e,t,l,r;return{desktop:{url:Object(x.a)(null===(e=element.desktop)||void 0===e?void 0:e.url,{width:c,height:d})},mobile:{url:Object(x.a)(null===(t=element.mobile)||void 0===t?void 0:t.url,{width:c,height:d})},icon:{url:Object(x.a)(null===(l=element.icon)||void 0===l?void 0:l.url,{width:c,height:d})},zoom:{url:Object(x.a)(null===(r=element.desktop)||void 0===r?void 0:r.url,{width:c,height:d}),placeholder:Object(w.a)("100%","100%")},alt:element.alt||"gallery image",placeholder:Object(w.a)("100%","100%")}}))}}},S=(l(938),Object(y.a)(O,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{ref:"imageRef",staticClass:"sw-product-gallery gallery"},[e.mediaGallery.length>0?l("div",{staticClass:"gallery__mobile"},[e._t("mobile-mobile",(function(){return[l("SfGallery",{staticClass:"gallery-mobile",attrs:{images:e.mediaGallery,current:1,"thumb-width":"160","thumb-height":"160","image-width":"400","image-height":"600"}})]}),null,e.mediaGallery)],2):e._e()])}),[],!1,null,"2339dde2",null));t.default=S.exports},896:function(e,t,l){var content=l(937);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(10).default)("ca2234b4",content,!0,{sourceMap:!1})},897:function(e,t,l){var content=l(939);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(10).default)("6239c90f",content,!0,{sourceMap:!1})},935:function(e,t,l){"use strict";var r=l(11),o=l(423);r({target:"String",proto:!0,forced:l(424)("big")},{big:function(){return o(this,"big","","")}})},936:function(e,t,l){"use strict";l(896)},937:function(e,t,l){var r=l(9)((function(i){return i[1]}));r.push([e.i,".display-none{display:none}.sf-gallery{--image-width:var(--gallery-image-width,100%);--image-height:var(--gallery-image-height,31.25rem);display:flex;flex-direction:column;flex-direction:var(--gallery-flex-direction,column)}@media(min-width:1024px){.sf-gallery{--gallery-image-width:26.375rem;--gallery-image-height:41.5rem}}.sf-gallery__thumbs{--image-width:var(--gallery-thumbs-image-width,10rem);--image-height:var(--gallery-thumbs-image-height,10rem);display:flex;display:var(--gallery-thumbs-display,flex);flex:var(--gallery-thumbs-flex);flex-direction:var(--gallery-thumbs-flex-direction);margin:var(--gallery-thumbs-margin,var(--spacer-xs) 0 0 0);order:var(--gallery-thumbs-order);overflow:auto}.sf-gallery__thumbs::-webkit-scrollbar{width:0}.sf-gallery__item{cursor:pointer;cursor:var(--gallery-item-cursor,pointer);display:flex;flex:0 0 10rem;flex:0 0 var(--gallery-thumb-width,10rem);margin:var(--gallery-item-margin,0 var(--spacer-xs) 0 0);opacity:.5;opacity:var(--gallery-item-opacity,.5);transition:opacity .15s ease-in-out;transition:var(--gallery-item-transition,opacity .15s ease-in-out)}.sf-gallery__item:last-child{--gallery-item-margin:0}.sf-gallery__item--selected{--gallery-item-opacity:1;--gallery-item-cursor:default}.sf-gallery__stage{flex:1;max-width:26.375rem;max-width:var(--gallery-stage-width,26.375rem);position:relative}.sf-gallery__zoom{left:125%;overflow:hidden;position:absolute;top:0}.sf-gallery .glide__slide{flex:1}.sf-gallery .glide__slides{margin:0}@media(min-width:1024px){.sf-gallery{--gallery-flex-direction:row;--gallery-thumbs-flex:0 0 var(--gallery-thumb-width,10rem);--gallery-thumbs-flex-direction:column;--gallery-thumbs-order:-1;--gallery-thumbs-margin:0 var(--spacer-xs) 0 0;--gallery-item-margin:0 0 var(--spacer-xs) 0}.sf-gallery__item:last-child{--gallery-item-margin:0}}",""]),r.locals={},e.exports=r},938:function(e,t,l){"use strict";l(897)},939:function(e,t,l){var r=l(9)((function(i){return i[1]}));r.push([e.i,".display-none[data-v-2339dde2]{display:none}.gallery__mobile[data-v-2339dde2]  .glide__slide{min-width:100px}.gallery__mobile[data-v-2339dde2]  .sf-gallery__thumbs{width:100%}",""]),r.locals={},e.exports=r}}]);