(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{1001:function(e,t,n){"use strict";var o=n(811),c=n(815),r=n(17),d=n(3),l={name:"CmsGenericBlock",components:{SwPluginSlot:n(67).a},props:{content:{type:Object,default:function(){return{}}}},setup:function(e,t){var content=e.content;Object(o.a)(t);var n=Object(r.e)(content),l=n.cssClasses,f=n.layoutStyles,m=Object(d.a)((function(){return l})),w=Object(d.a)((function(){return f}));return{getComponent:Object(d.a)((function(){return Object(c.a)(content)})),cmsClass:m,cmsStyles:w}}},f=n(2),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SwPluginSlot",{attrs:{name:"cms-generic-block","slot-context":e.content}},[n(e.getComponent,{tag:"component",class:e.cmsClass,style:e.cmsStyles,attrs:{content:e.content}})],1)}),[],!1,null,"5d2c5fc6",null);t.a=component.exports},1068:function(e,t,n){var content=n(1268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("46c6eefb",content,!0,{sourceMap:!1})},1267:function(e,t,n){"use strict";n(1068)},1268:function(e,t,n){var o=n(9)((function(i){return i[1]}));o.push([e.i,".display-none[data-v-3fb79846]{display:none}.sw-sidebar-section[data-v-3fb79846]{display:flex;flex-direction:column}@media(min-width:1024px){.sw-sidebar-section[data-v-3fb79846]{flex-direction:row}.sw-sidebar-section--boxed[data-v-3fb79846]{margin:0 auto;max-width:var(--boxed-mode-max-width)}}.sw-sidebar-section__sidebar[data-v-3fb79846]{display:flex;flex-direction:column;margin:20px 0 0}@media(min-width:1024px){.sw-sidebar-section__sidebar[data-v-3fb79846]{border:solid var(--c-light);border-width:0 1px 0 0;margin-left:var(--spacer-base)}.sw-sidebar-section__sidebar--boxed[data-v-3fb79846]{margin-left:inherit}}.sw-sidebar-section__main[data-v-3fb79846]{display:flex;flex-direction:column;width:100%}@media(min-width:1024px){.sw-sidebar-section__main>div[data-v-3fb79846]{max-width:inherit}}",""]),o.locals={},e.exports=o},966:function(e,t,n){"use strict";n.r(t);n(37),n(6);var o={components:{CmsGenericBlock:n(1001).a},name:"CmsSectionSidebar",props:{content:{type:Object,default:function(){return{}}}},computed:{getBlocks:function(){return this.content.blocks||[]},getSidebarBlocks:function(){return this.getBlocks.filter((function(e){return"sidebar"===e.sectionPosition}))},getMainBlocks:function(){return this.getBlocks.filter((function(e){return"main"===e.sectionPosition}))},isSizingModeBoxed:function(){return"boxed"===this.content.sizingMode}}},c=(n(1267),n(2)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sw-sidebar-section",class:{"sw-sidebar-section--boxed":e.isSizingModeBoxed}},[e.getSidebarBlocks.length?n("div",{staticClass:"sw-sidebar-section__sidebar",class:{"sw-sidebar-section__sidebar--boxed":e.isSizingModeBoxed}},e._l(e.getSidebarBlocks,(function(e){return n("CmsGenericBlock",{key:e.id,attrs:{content:e}})})),1):e._e(),e._v(" "),n("div",{staticClass:"sw-sidebar-section__main"},e._l(e.getMainBlocks,(function(e){return n("CmsGenericBlock",{key:e.id,attrs:{content:e}})})),1)])}),[],!1,null,"3fb79846",null);t.default=component.exports}}]);