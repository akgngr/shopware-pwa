(window.webpackJsonp=window.webpackJsonp||[]).push([[132,173],{1123:function(e,t,l){"use strict";l.r(t);var n={components:{Entity:l(820).default}},r=l(2),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("entity",e._g(e._b({},"entity",Object.assign({},e.$props,e.$attrs),!1),e.$listeners))}),[],!1,null,null,null);t.default=component.exports},814:function(e,t,l){var content=l(825);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(10).default)("2a66220c",content,!0,{sourceMap:!1})},820:function(e,t,l){"use strict";l.r(t);l(37),l(6);var n=l(122),r=l(867),c=l(17),o={components:{SfHeading:n.a,SfCheckbox:r.a},name:"SwEntityFilter",props:{filter:{type:Object,default:function(){return{}}},selectedValues:{type:Array|Object,default:function(){return[]}}},setup:function(){return{getTranslatedProperty:c.B}},computed:{getOptions:function(){return this.filter.entities||this.filter.options||[]}}},f=(l(824),l(2)),component=Object(f.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.getOptions.length?l("div",{class:{"filters__filter--color":"color"===e.filter.name}},[l("SfHeading",{staticClass:"filters__title",attrs:{level:4,title:e.$t(e.filter.label)}}),e._v(" "),e._l(e.getOptions,(function(option){return l("SfCheckbox",{key:option.id,staticClass:"sf-filter",class:{"is-active":e.selectedValues&&e.selectedValues.includes(option.id),"is-color":!1},attrs:{name:e.getTranslatedProperty(option,"name"),selected:e.selectedValues&&e.selectedValues.includes(option.id)},on:{change:function(t){return e.$emit("toggle-filter-value",Object.assign({},e.filter,{value:option.id}))}},scopedSlots:e._u([{key:"label",fn:function(){return[l("div",{staticClass:"sf-filter__label"},[e._v("\n        "+e._s(e.getTranslatedProperty(option,"name"))+"\n      ")])]},proxy:!0}],null,!0)})}))],2):e._e()}),[],!1,null,"aa04c0a2",null);t.default=component.exports},824:function(e,t,l){"use strict";l(814)},825:function(e,t,l){var n=l(9)((function(i){return i[1]}));n.push([e.i,".display-none[data-v-aa04c0a2]{display:none}[data-v-aa04c0a2].sf-heading{--heading-text-align:left}.filters__filter--color[data-v-aa04c0a2]{display:flex;flex-wrap:wrap}.filters__label[data-v-aa04c0a2]{margin-left:.8rem}.filters .sf-filter[data-v-aa04c0a2]{margin:5px;width:auto}",""]),n.locals={},e.exports=n}}]);