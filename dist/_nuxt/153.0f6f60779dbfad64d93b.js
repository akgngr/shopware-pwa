(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1085:function(t,e,n){var content=n(1302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("67701fb7",content,!0,{sourceMap:!1})},1301:function(t,e,n){"use strict";n(1085)},1302:function(t,e,n){var c=n(9)((function(i){return i[1]}));c.push([t.i,".display-none[data-v-713ef05d]{display:none}[data-v-713ef05d].cms-block-image-three-cover{display:grid;grid-template-rows:repeat(3,340px);margin:var(--spacer-sm)}[data-v-713ef05d].cms-block-image-three-cover__image img{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;width:100%}@media(min-width:1024px){[data-v-713ef05d].cms-block-image-three-cover{grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(1,auto);margin:var(--spacer-sm) 0}}",""]),c.locals={},t.exports=c},812:function(t,e,n){"use strict";var c=n(811),o=n(815),r=n(17),l=n(3),m={name:"CmsGenericElement",components:{SwPluginSlot:n(67).a},props:{content:{type:Object,default:function(){return{}}}},setup:function(t,e){var content=t.content;Object(c.a)(e);var n=Object(r.e)(content),m=n.cssClasses,f=n.layoutStyles,d=Object(l.a)((function(){return m})),v=Object(l.a)((function(){return f}));return{getComponent:Object(l.a)((function(){return Object(o.b)(content)})),cmsClass:d,cmsStyles:v}}},f=n(2),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SwPluginSlot",{attrs:{name:"cms-generic-element","slot-context":t.content}},[n(t.getComponent,{tag:"component",class:t.cmsClass,style:t.cmsStyles,attrs:{content:t.content}})],1)}),[],!1,null,"0e3d21ab",null);e.a=component.exports},982:function(t,e,n){"use strict";n.r(e);n(91),n(6);var c={name:"CmsBlockImageThreeCover",components:{CmsGenericElement:n(812).a},props:{content:{type:Object,default:function(){return{}}}},computed:{getSlots:function(){return this.content.slots||[]},getLeftContent:function(){return this.getSlots.find((function(t){return"left"===t.slot}))},getCenterContent:function(){return this.getSlots.find((function(t){return"center"===t.slot}))},getRightContent:function(){return this.getSlots.find((function(t){return"right"===t.slot}))}}},o=(n(1301),n(2)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"cms-block-image-three-cover"},[n("CmsGenericElement",{staticClass:"cms-block-image-three-cover__image",attrs:{content:t.getLeftContent}}),t._v(" "),n("CmsGenericElement",{staticClass:"cms-block-image-three-cover__image",attrs:{content:t.getCenterContent}}),t._v(" "),n("CmsGenericElement",{staticClass:"cms-block-image-three-cover__image",attrs:{content:t.getRightContent}})],1)}),[],!1,null,"713ef05d",null);e.default=component.exports}}]);