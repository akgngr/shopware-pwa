(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{1059:function(t,e,n){var content=n(1250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7f0e23dd",content,!0,{sourceMap:!1})},1125:function(t,e,n){"use strict";n.r(e);n(6),n(26),n(28),n(22),n(37);var r={"shipping-free":function(){return n.e(71).then(n.bind(null,1130))},rating:function(){return n.e(68).then(n.bind(null,1128))}},l={props:{filter:{type:Object,default:function(){return{}}},selected:{type:Object,default:function(){return{}}},selectedValues:{type:Array|Object,default:function(){return[]}}},computed:{getComponent:function(){if(this.filter.name&&r[this.filter.name])try{return r[this.filter.name]}catch(t){console.error("SwProductListingFilter:getComponent",t)}},max:function(){return this.selected.max}},methods:{selectMax:function(t){this.$emit("toggle-filter-value",t)}}},o=(n(1249),n(2)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter__max"},[n(t.getComponent,{key:t.filter.code,tag:"component",attrs:{filter:t.filter,max:t.max},on:{"toggle-select":t.selectMax}})],1)}),[],!1,null,"1afb99a8",null);e.default=component.exports},1249:function(t,e,n){"use strict";n(1059)},1250:function(t,e,n){var r=n(9)((function(i){return i[1]}));r.push([t.i,".filter__max[data-v-1afb99a8]{display:flex;flex:1 1}",""]),r.locals={},t.exports=r}}]);