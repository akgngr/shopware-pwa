(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1044:function(t,e,r){var content=r(1218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("b98fb974",content,!0,{sourceMap:!1})},1217:function(t,e,r){"use strict";r(1044)},1218:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".display-none{display:none}@media(min-width:1024px){.search-page{margin:0 auto;max-width:1272px;padding:0 var(--spacer-base)}}.search-page .sf-loader{min-height:50vh}.search-page__warning{min-height:30vh;padding-top:20vh}@media(min-width:1024px){.search-page__main{flex:1;padding:var(--spacer-lg) 0 0 0}}.search-page__heading{margin:var(--spacer-xl) auto;text-align:center}",""]),n.locals={},t.exports=n},1389:function(t,e,r){"use strict";r.r(e);var n,l=r(1),c=(r(16),r(84),r(24),r(851)),o=r(4),d=r(0),f=r(959),v=r(953),m={name:"SearchResultsPage",watchQuery:function(t,e){return t.query!==e.query},components:{SfLoader:c.a,SwProductListing:f.a,SwProductListingFilters:v.a},asyncData:(n=Object(l.a)(regeneratorRuntime.mark((function t(e){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.query,c=Object(d.c)(),Object(o.d)(c,r),t.next=5,c.run(Object(l.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(o.t)({listingType:"productSearchListing"}),r=e.initSearch,t.prev=1,t.next=4,r(n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.error("[search] Problem with initial search",t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])}))));case 5:return c.stop(),t.abrupt("return",{});case 7:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),setup:function(t,e){e.root;var r=Object(o.t)({listingType:"productSearchListing"}),n=r.getElements,l=r.loading,c=r.getCurrentFilters;return{getSearchTerm:Object(d.b)((function(){var t;return null===(t=c.value)||void 0===t?void 0:t.search})),getElements:n,loading:l}}},_=m,h=(r(1217),r(2)),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search-page"},[t.getSearchTerm||t.loading?r("SfLoader",{attrs:{loading:t.loading}},[t.getElements?r("div",{staticClass:"search-page__main"},[r("h3",{staticClass:"search-page__heading"},[t._v("\n        "+t._s(this.$t("search results for"))+"\n        "),r("strong",[t._v(t._s(t.getSearchTerm))]),t._v(":\n      ")]),t._v(" "),r("SwProductListingFilters",{attrs:{listingType:"productSearchListing"}}),t._v(" "),r("SwProductListing",{attrs:{listingType:"productSearchListing"}})],1):t._e()]):r("h3",{staticClass:"search-page__warning"},[t._v("\n    "+t._s(this.$t("You didn't provide any term to be found"))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},882:function(t,e,r){var content=r(920);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("3c722956",content,!0,{sourceMap:!1})},886:function(t,e,r){var map={"./color.vue":[1120,172],"./content.vue":[1121,130],"./entity.vue":[820,173],"./fabric.vue":[1122,131],"./fallback.vue":[903],"./length.vue":[1123,132],"./manufacturer.vue":[1124,133],"./max.vue":[1125,174],"./media.vue":[1126,175],"./price.vue":[1127,0,122],"./range.vue":[910,0,140],"./rating.vue":[1128,68],"./select.vue":[1129,134],"./shipping-free.vue":[1130,71],"./size.vue":[1131,135],"./text.vue":[1132,136],"./textile.vue":[1133,137],"./tone.vue":[1134,138],"./width.vue":[1135,139]};function n(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],n=e[0];return Promise.all(e.slice(1).map(r.e)).then((function(){return r(n)}))}n.keys=function(){return Object.keys(map)},n.id=886,t.exports=n},887:function(t,e,r){var content=r(924);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("e4e7dc30",content,!0,{sourceMap:!1})},888:function(t,e,r){var content=r(926);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("21bd7f25",content,!0,{sourceMap:!1})},889:function(t,e,r){var content=r(928);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("671f643a",content,!0,{sourceMap:!1})},903:function(t,e,r){"use strict";r.r(e);r(6),r(26),r(28),r(37);var n=r(1365),l=r(804),c=r(223),o={components:{SfAlert:l.a},name:"NoFilterFound",props:{filter:{type:Object,default:function(){return{}}}},computed:{filterLabel:function(){return this.filter.label},filterCode:function(){return Object(c.d)(this.filter.label)},displayTypeCode:function(){var t;return null===(t=this.filter)||void 0===t?void 0:t.displayType}}},d=r(2),f=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("SfAlert",{attrs:{type:"danger"},scopedSlots:t._u([{key:"message",fn:function(){return[r("span",{staticClass:"sf-alert__message"},[t._v("\n      "+t._s(t.$t("Filter"))+" "+t._s(t.$t("for property"))+"\n      "),r("b",[t._v("\n        "+t._s(t.filterLabel)+"\n      ")]),t._v("\n      "+t._s(t.$t("is not implemented! Please add new filter to"))+"\n      `src/components/listing/types/"),r("b",[t._v(t._s(t.filterCode))]),t._v(".vue` or `src/components/listing/types/"),r("b",[t._v(t._s(t.displayTypeCode))]),t._v(".vue` as generic one for type "),r("b",[t._v(t._s(t.displayTypeCode))])])]},proxy:!0}])})}),[],!1,null,null,null).exports,v={name:"SwFallbackPropertyFilter",components:{SfFilter:n.a},props:{filter:{type:Object,default:function(){return{}}},selectedEntityFilters:{type:Array|Object,default:function(){return[]}},selectedFilters:{type:Array|Object,default:function(){return[]}},currentFilters:{type:Object,default:function(){return{}}}},computed:{getComponent:function(){var t=this;try{return function(){return{component:r(886)("./".concat(t.filter.displayType,".vue")),error:f}}}catch(t){console.error("SwProductListingFilter:getComponent",t)}},filterCode:function(){return Object(c.d)(this.filter.label.toLowerCase())},selectedValues:function(){return this.currentFilters.properties||[]},selected:function(){return this.selectedFilters[this.filter.code]}},methods:{toggleFilterValue:function(t){this.$emit("toggle-filter-value",t)}}},m=(r(923),Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.getComponent?r("div",[r(t.getComponent,{key:t.filter.code,tag:"component",attrs:{filter:t.filter,"current-filters":t.currentFilters,"selected-values":t.selectedValues,selected:t.selected},on:{"toggle-filter-value":t.toggleFilterValue}})],1):t._e()}),[],!1,null,"3ff196b9",null));e.default=m.exports},919:function(t,e,r){"use strict";r(882)},920:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".display-none[data-v-398f6960]{display:none}.cms-element-product-listing[data-v-398f6960],.load-more[data-v-398f6960]{display:flex;justify-content:center}.cms-element-product-listing[data-v-398f6960]{min-height:var(--spacer-xl);position:relative}.cms-element-product-listing__loader[data-v-398f6960]{--loader-overlay-background:transparent;height:38px;left:50%;margin-top:var(--spacer-sm);position:absolute;top:50%;transform:translate(-50%,-50%);width:38px;z-index:2}.cms-element-product-listing__wrapper[data-v-398f6960]{display:flex;flex-direction:column;width:100%}@media screen and (min-width:1024px){.cms-element-product-listing__wrapper[data-v-398f6960]{padding:0 var(--spacer-sm)}}.cms-element-product-listing__list[data-v-398f6960]{display:flex;flex-flow:row wrap;margin-top:var(--spacer-sm);transition:filter .1s ease-in;width:100%}.cms-element-product-listing__list--blur[data-v-398f6960]{filter:blur(10px)}[data-v-398f6960] .cms-element-product-listing__product-card{--product-card-padding:var(--spacer-xs);flex:1 0 50%;padding:var(--spacer-xs)}@media screen and (min-width:480px){[data-v-398f6960] .cms-element-product-listing__product-card{flex:1 0 33%;padding:var(--spacer-xs)}}@media screen and (min-width:600px){[data-v-398f6960] .cms-element-product-listing__product-card{flex:1 0 33%;padding:var(--spacer-xs)}}@media screen and (min-width:768px){[data-v-398f6960] .cms-element-product-listing__product-card{flex:1 0 25%;padding:var(--spacer-xs)}}@media screen and (min-width:900px){[data-v-398f6960] .cms-element-product-listing__product-card{flex:1 0 25%;padding:var(--spacer-xs)}}@media screen and (min-width:1024px){[data-v-398f6960] .cms-element-product-listing__product-card{flex:1 0 25%;padding:var(--spacer-xs)}}@media screen and (min-width:1200px){[data-v-398f6960] .cms-element-product-listing__product-card{flex:1 0 20%;padding:var(--spacer-base)}}.cms-element-product-listing__product-card-horizontal[data-v-398f6960]{flex:0 0 100%}@media screen and (min-width:900px){.cms-element-product-listing__product-card-horizontal[data-v-398f6960]{margin:var(--spacer-sm) 0}}@media(max-width:1023px){.cms-element-product-listing__product-card-horizontal[data-v-398f6960]  .sf-image{--image-width:5.3125rem;--image-height:auto}}.cms-element-product-listing__pagination[data-v-398f6960]{margin:auto}@media screen and (min-width:900px){.cms-element-product-listing__pagination[data-v-398f6960]{display:flex;justify-content:center;margin-top:var(--spacer-base)}}.cms-element-product-listing__pagination button.first[data-v-398f6960]:nth-of-type(2){display:none}.cms-element-product-listing__pagination__number[data-v-398f6960]{cursor:pointer;margin:0 5px}.cms-element-product-listing__pagination .next-disabled[data-v-398f6960]{display:none}.cms-element-product-listing__slide-enter[data-v-398f6960]{opacity:0;transform:scale(.5)}.cms-element-product-listing__slide-enter-active[data-v-398f6960]{transition:all .2s ease;transition-delay:calc(.1s*var(--index))}@media(max-width:1024px){.section[data-v-398f6960]{padding-left:var(--spacer-base);padding-right:var(--spacer-base)}}[data-v-398f6960] .sf-product-card{max-width:50%!important}[data-v-398f6960] .sf-product-card{overflow:auto}@media screen and (min-width:480px){[data-v-398f6960] .sf-product-card{max-width:33%!important}}@media screen and (min-width:600px){[data-v-398f6960] .sf-product-card{max-width:33%!important}}@media screen and (min-width:768px){[data-v-398f6960] .sf-product-card{max-width:25%!important}}@media screen and (min-width:900px){[data-v-398f6960] .sf-product-card{max-width:25%!important}}@media screen and (min-width:1024px){[data-v-398f6960] .sf-product-card{max-width:25%!important}}@media screen and (min-width:1200px){[data-v-398f6960] .sf-product-card{max-width:20%!important}}",""]),n.locals={},t.exports=n},923:function(t,e,r){"use strict";r(887)},924:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".display-none[data-v-3ff196b9]{display:none}.filters__title[data-v-3ff196b9]{text-align:left}.filters__title[data-v-3ff196b9]:first-child{margin:0 0 var(--spacer-base) 0}.filters__item[data-v-3ff196b9]{padding:var(--spacer-2xs) 0}.filters__item--color[data-v-3ff196b9]{margin:var(--spacer-xs) var(--spacer-xs) var(--spacer-xs) 0;width:auto}.filters__buttons[data-v-3ff196b9]{margin:var(--spacer-base) 0 calc(var(--spacer-base)*3) 0}@media(min-width:1024px){.filters__buttons[data-v-3ff196b9]{margin:var(--spacer-xl) 0 0 0}}.filters__button-clear[data-v-3ff196b9]{background-color:var(--c-light);color:#a3a5ad;margin-top:10px}",""]),n.locals={},t.exports=n},925:function(t,e,r){"use strict";r(888)},926:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".display-none[data-v-42976a0e]{display:none}.filters__title[data-v-42976a0e]{text-align:left}.filters__title[data-v-42976a0e]:first-child{margin:0 0 var(--spacer-base) 0}.filters__item[data-v-42976a0e]{padding:var(--spacer-2xs) 0}.filters__item--color[data-v-42976a0e]{margin:var(--spacer-xs) var(--spacer-xs) var(--spacer-xs) 0;width:auto}.filters__buttons[data-v-42976a0e]{margin:var(--spacer-base) 0 calc(var(--spacer-base)*3) 0}@media(min-width:1024px){.filters__buttons[data-v-42976a0e]{margin:var(--spacer-xl) 0 0 0}}.filters__button-clear[data-v-42976a0e]{background-color:var(--c-light);color:#a3a5ad;margin-top:10px}",""]),n.locals={},t.exports=n},927:function(t,e,r){"use strict";r(889)},928:function(t,e,r){var n=r(9)((function(i){return i[1]}));n.push([t.i,".display-none[data-v-b0ccc378]{display:none}.navbar[data-v-b0ccc378]{border-bottom:1px solid var(--c-light);display:flex;position:relative}@media(min-width:1024px){.navbar[data-v-b0ccc378]{border-top:1px solid var(--c-light);margin-top:20px}}.navbar__aside[data-v-b0ccc378]{border-right:1px solid var(--c-light);flex:0 0 15%;padding:var(--spacer-base) var(--spacer-xl)}.navbar__aside[data-v-b0ccc378],.navbar__main[data-v-b0ccc378]{align-items:center;display:flex}.navbar__main[data-v-b0ccc378]{flex:1;font-size:var(--font-size--sm);padding:var(--spacer-sm)}@media(min-width:1024px){.navbar__main[data-v-b0ccc378]{padding:var(--spacer-base) 0}}.navbar__title[data-v-b0ccc378]{font-size:var(--font-size--lg);line-height:2.23;padding:0}.navbar__filters-button[data-v-b0ccc378]{--button-font-size:var(--font-size--base);--button-text-decoration:none;--button-color:var(--c-link);--button-font-weight:var(--font-weight--normal);align-items:center;display:flex;margin:0 var(--spacer-xl)}@media(max-width:1023px){.navbar__filters-button[data-v-b0ccc378]{--button-font-weight:var(--font-weight--medium);margin:0;order:2}}.navbar__filters-button svg[data-v-b0ccc378]{fill:var(--c-text-muted);transition:fill .15s ease}.navbar__label[data-v-b0ccc378]{color:var(--c-text-muted);font-family:var(--font-family--secondary);font-size:var(--font-size--base);font-weight:var(--font-weight--normal)}@media(min-width:1024px){.navbar__label[data-v-b0ccc378]{color:var(--c-link);margin:0 var(--spacer-2xs) 0 0}}.navbar__sort[data-v-b0ccc378]{align-items:center;display:flex;margin-left:var(--spacer-xl);margin-right:auto}.navbar__counter[data-v-b0ccc378]{margin:auto}@media(min-width:1024px){.navbar__counter[data-v-b0ccc378]{margin-right:20px}}.navbar__view[data-v-b0ccc378]{align-items:center;color:var(--c-link);display:flex;font-family:var(--font-family--secondary);font-size:var(--font-size--base);font-weight:var(--font-weight--normal);margin:0 var(--spacer-xl)}.navbar__view-icon[data-v-b0ccc378]{margin:11px}@media(max-width:1023px){.navbar__view[data-v-b0ccc378]{color:var(--c-text-muted);margin:0;order:-1}}.sort-by[data-v-b0ccc378]{--select-width:150px;--select-padding:0;--select-height:auto;--select-selected-padding:0 var(--spacer-lg) 0 var(--spacer-2xs);--select-margin:0;--select-option-font-size:var(--font-size-sm);--select-error-message-height:0}.sort-by[data-v-b0ccc378]  .sf-select__dropdown{font-family:var(--font-family--secondary);font-size:var(--font-size-base);font-weight:var(--font-weight--light);margin:2px 0 0;padding:4px}.sort-by[data-v-b0ccc378]  .sf-select__placeholder{--select-option-font-size:var(--font-size-sm)}.filters__filter[data-v-b0ccc378]{padding:1rem 0}.filters-sidebar[data-v-b0ccc378]{--sidebar-z-index:4;--overlay-z-index:4}",""]),n.locals={},t.exports=n},953:function(t,e,r){"use strict";var n=r(1),l=(r(24),r(16),r(84),r(39)),c=r(800),o=r(1365),d=r(122),f=r(418),v=r(3),m=r(4),_=r(68),h=(r(6),r(26),r(28),r(37),r(903)),x=r(223),w={name:"SwProductListingFilter",components:{SfFilter:o.a},props:{filter:{type:Object,default:function(){return{}}},selectedEntityFilters:{type:Array|Object,default:function(){return[]}},selectedFilters:{type:Array|Object,default:function(){return[]}},currentFilters:{type:Object,default:function(){return{}}}},computed:{getComponent:function(){var t=this;try{return function(){return{component:r(886)("./".concat(t.filterCode,".vue")),error:h.default}}}catch(t){console.error("SwProductListingFilter:getComponent",t)}},filterCode:function(){return Object(x.d)(this.filter.label.toLowerCase())},selectedValues:function(){return this.selectedFilters||[]},selected:function(){return this.selectedFilters[this.filter.code]}},methods:{toggleFilterValue:function(t){this.$emit("toggle-filter-value",t)}}},y=(r(925),r(2)),S=Object(y.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.getComponent?r("div",[r(t.getComponent,{key:t.filter.code,tag:"component",attrs:{filter:t.filter,"current-filters":t.currentFilters,"selected-values":t.selectedValues,selected:t.selected},on:{"toggle-filter-value":t.toggleFilterValue}})],1):t._e()}),[],!1,null,"42976a0e",null).exports,C=r(17),F={name:"SwProductListingFilters",components:{SwButton:_.default,SfIcon:l.a,SfSelect:c.a,SfFilter:o.a,SfHeading:d.a,SfSidebar:f.a,SwProductListingFilter:S},props:{listingType:{type:String,default:"categoryListing"}},setup:function(t,e){e.root;var r=Object(m.t)({listingType:t.listingType}),n=r.getCurrentSortingOrder,l=r.changeCurrentSortingOrder,c=r.getSortingOrders,o=r.getAvailableFilters,d=r.getCurrentListing,f=r.search,_=r.getCurrentFilters,h=r.getTotal,x=Object(m.E)({stateName:"PRODUCT_LISTING_STATE"}),w=x.isOpen,y=x.switchState,S=Object(v.u)(!1);Object(v.p)((function(){S.value=!0}));var F=Object(v.u)({});return{search:f,isListView:w,switchToListView:y,getAvailableFilters:o,getSortingOrders:c,currentSortingOrder:Object(v.a)({get:function(){return n.value},set:function(t){return l(t)}}),initSidebarFilters:function(){F.value=JSON.parse(JSON.stringify(_.value))||{}},sidebarSelectedFilters:F,getTotal:h,getCurrentFilters:_,isMounted:S,getTranslatedProperty:C.B,getCurrentListing:d}},data:function(){return{isFilterSidebarOpen:!1}},methods:{toggleFilterValue:function(filter){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.sidebarSelectedFilters=Object(C.F)(t.sidebarSelectedFilters,filter),t.search(t.sidebarSelectedFilters);case 2:case"end":return e.stop()}}),e)})))()},clearAllFilters:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.closeFiltersSidebar(),t.search({query:t.getCurrentFilters&&t.getCurrentFilters.search});case 2:case"end":return e.stop()}}),e)})))()},openFiltersSidebar:function(){this.isFilterSidebarOpen=!0,this.initSidebarFilters()},closeFiltersSidebar:function(){this.isFilterSidebarOpen=!1}}},O=(r(927),Object(y.a)(F,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cms-element-category-navigation-sidebar-filter sw-navbar navbar section"},[r("div",{staticClass:"sw-navbar navbar__main"},[r("SwButton",{directives:[{name:"show",rawName:"v-show",value:t.getAvailableFilters.length,expression:"getAvailableFilters.length"}],staticClass:"sf-button--text navbar__filters-button",on:{click:t.openFiltersSidebar}},[r("SfIcon",{staticStyle:{"margin-right":"10px"},attrs:{size:"14px",icon:"filter"}}),t._v(t._s(t.$t("Filters"))+"\n    ")],1),t._v(" "),t.isMounted&&t.getSortingOrders.length?r("div",{staticClass:"navbar__sort desktop-only"},[r("span",{staticClass:"navbar__label"},[t._v(t._s(t.$t("Sort by"))+":")]),t._v(" "),r("SfSelect",{staticClass:"sort-by",model:{value:t.currentSortingOrder,callback:function(e){t.currentSortingOrder=e},expression:"currentSortingOrder"}},t._l(t.getSortingOrders,(function(option){return r("SfSelectOption",{key:option.key,staticClass:"sort-by__option",attrs:{value:option.key}},[t._v(t._s(t.$t(t.getTranslatedProperty(option,"label"))))])})),1)],1):t._e(),t._v(" "),r("div",{staticClass:"navbar__counter"},[r("span",{staticClass:"navbar__label desktop-only"},[t._v(t._s(t.$t("Products found"))+":")]),t._v(" "),r("strong",{staticClass:"desktop-only"},[t._v(t._s(t.getTotal))]),t._v(" "),r("span",{staticClass:"navbar__label smartphone-only"},[t._v(t._s(t.getTotal)+" "+t._s(t.$t("Items"))+":")])]),t._v(" "),r("div",{staticClass:"navbar__view"},[r("span",{staticClass:"navbar__view-label desktop-only"},[t._v(t._s(t.$t("View")))]),t._v(" "),r("SwButton",{staticClass:"sf-button--pure",attrs:{"aria-label":"Change to grid view","aria-pressed":!t.isListView.toString()},on:{click:function(e){return t.switchToListView(!1)}}},[r("SfIcon",{staticClass:"navbar__view-icon",attrs:{color:t.isListView?"#BEBFC4":"#1D1F22",icon:"tiles",size:"12px"}})],1),t._v(" "),r("SwButton",{staticClass:"sf-button--pure",attrs:{"aria-label":"Change to list view","aria-pressed":t.isListView.toString()},on:{click:function(e){return t.switchToListView(!0)}}},[r("SfIcon",{staticClass:"navbar__view-icon",attrs:{color:t.isListView?"#1D1F22":"#BEBFC4",icon:"list",size:"12px"}})],1)],1),t._v(" "),r("SfSidebar",{staticClass:"filters-sidebar",attrs:{title:t.$t("Filters"),position:"left",visible:t.isFilterSidebarOpen},on:{close:t.closeFiltersSidebar},scopedSlots:t._u([{key:"content-bottom",fn:function(){return[r("div",{staticClass:"filters__buttons"},[r("SwButton",{staticClass:"sf-button--full-width filters__button-clear",on:{click:function(e){return t.clearAllFilters()}}},[t._v(t._s(t.$t("Clear all")))])],1)]},proxy:!0}])},[r("div",{staticClass:"filters"},t._l(t.getAvailableFilters,(function(filter){return r("SwProductListingFilter",{key:filter.name,staticClass:"filters__filter",attrs:{filter:filter,"current-filters":t.sidebarSelectedFilters,"selected-filters":t.sidebarSelectedFilters[filter.code],"selected-entity-filters":{}},on:{"toggle-filter-value":t.toggleFilterValue}})})),1)])],1)])}),[],!1,null,"b0ccc378",null));e.a=O.exports},959:function(t,e,r){"use strict";var n=r(1),l=(r(24),r(6),r(26),r(28),r(1117)),c=r(122),o=r(851),d=r(4),f=r(3),v=r(67),m={name:"SwProductListing",components:{SwProductCardHorizontal:function(){return Promise.all([r.e(105),r.e(127)]).then(r.bind(null,1403))},SwProductCard:function(){return Promise.all([r.e(1),r.e(126)]).then(r.bind(null,850))},SfPagination:l.a,SfHeading:c.a,SfLoader:o.a,SwButton:function(){return Promise.resolve().then(r.bind(null,68))},SwPluginSlot:v.a},props:{initialListing:{type:Object,default:null},listingType:{type:String,default:"categoryListing"}},setup:function(t,e){e.root;var r=Object(d.t)({listingType:t.listingType}),l=r.getElements,c=r.setInitialListing,o=r.getCurrentPage,v=r.changeCurrentPage,m=r.getTotalPagesCount,_=r.loading,h=r.loadMore,x=r.loadingMore;t.initialListing&&(c(t.initialListing),Object(f.y)((function(){return t.initialListing}),(function(){var e=t.initialListing||[];c(e)})));var w=Object(d.E)({stateName:"PRODUCT_LISTING_STATE"}).isOpen,y=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e>m.value)){t.next=2;break}return t.abrupt("return");case 2:return window.scrollTo(0,0),t.next=5,v(e);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{changePage:y,getTotalPagesCount:m,loading:_,isListView:w,getElements:l,getCurrentPage:o,loadMore:h,loadingMore:x}}},_=m,h=(r(919),r(2)),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cms-element-product-listing"},[r("SfLoader",{staticClass:"cms-element-product-listing__loader",attrs:{loading:t.loading}}),t._v(" "),t.getElements.length?r("div",{staticClass:"cms-element-product-listing__wrapper"},[r("SwPluginSlot",{attrs:{name:"product-listing","slot-context":t.getElements}},[r("div",{staticClass:"cms-element-product-listing__list",class:{"cms-element-product-listing__list--blur":t.loading},attrs:{tag:"div",appear:"",name:"cms-element-product-listing__slide"}},[t.isListView?t._l(t.getElements,(function(t,i){return r("SwProductCardHorizontal",{key:i+t.id,staticClass:"cms-element-product-listing__product-card-horizontal",style:{"--index":i},attrs:{product:t}})})):t._l(t.getElements,(function(t,i){return r("SwProductCard",{key:i+t.id,staticClass:"cms-element-product-listing__product-card",style:{"--index":i},attrs:{product:t}})})),t._v(" "),r("div",{key:"holder",staticClass:"cms-element-product-listing__place-holder"})],2)]),t._v(" "),r("SwPluginSlot",{attrs:{name:"product-listing-pagination"}},[t.getCurrentPage&&!t.isListView?r("SfPagination",{staticClass:"cms-element-product-listing__pagination",attrs:{current:t.getCurrentPage,total:t.getTotalPagesCount,visible:5,pageParamName:"p"},on:{click:function(e){t.changePage(e)}},scopedSlots:t._u([{key:"prev",fn:function(e){var n=e.go,l=e.prev;return[r("span",{directives:[{name:"show",rawName:"v-show",value:t.getCurrentPage>1,expression:"getCurrentPage > 1"}],staticClass:"cms-element-product-listing__pagination__number",on:{click:function(t){return n(l)}}},[t._v("\n            <\n          ")])]}},{key:"number",fn:function(e){var n=e.page;return[r("button",{staticClass:"sf-button--pure sf-pagination__item sf-button",class:{current:t.getCurrentPage===n,first:1==n},on:{click:function(e){return t.changePage(n)}}},[t._v("\n            "+t._s(n)+"\n          ")])]}},{key:"next",fn:function(e){var n=e.go,l=e.next;return[r("span",{staticClass:"cms-element-product-listing__pagination__number",class:{"next-disabled":t.getCurrentPage===t.getTotalPagesCount},on:{click:function(t){return n(l)}}},[t._v("\n            >\n          ")])]}}],null,!1,2216823216)}):t.getCurrentPage<t.getTotalPagesCount?r("div",{staticClass:"load-more"},[r("SwButton",{staticClass:"sf-button--outline",attrs:{disabled:t.loadingMore},on:{click:t.loadMore}},[t._v("\n          "+t._s(t.$t("load more"))+"...\n        ")])],1):t._e()],1)],1):t.loading||t.getElements.length?t._e():r("SfHeading",{attrs:{title:t.$t("No products found"),description:t.$t("let us look for them")}})],1)}),[],!1,null,"398f6960",null);e.a=component.exports}}]);