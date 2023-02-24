(window.webpackJsonp=window.webpackJsonp||[]).push([[69,125],{811:function(e,r,t){"use strict";function c(e){if(null==e)throw new TypeError("Cannot destructure "+e)}t.d(r,"a",(function(){return c}))},823:function(e,r,t){"use strict";t.d(r,"a",(function(){return y})),t.d(r,"b",(function(){return _})),t.d(r,"c",(function(){return w})),t.d(r,"d",(function(){return z})),t.d(r,"e",(function(){return M}));var c=t(0);function o(e){return"function"==typeof e}function n(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}function l(e){return o(e.$validator)?Object.assign({},e):{$validator:e}}function d(e){return"object"==typeof e?e.$valid:e}function h(e){return e.$validator||e}function f(e,r){if(!n(e))throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided '+typeof e);if(!n(r)&&!o(r))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=l(r);return t.$params=Object.assign({},t.$params||{},e),t}function x(e,r){if(!o(e)&&"string"!=typeof Object(c.w)(e))throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided '+typeof e);if(!n(r)&&!o(r))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=l(r);return t.$message=e,t}const v=e=>{if(e=Object(c.w)(e),Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"==typeof e){for(let r in e)return!0;return!1}return!!String(e).length},k=e=>(e=Object(c.w)(e),Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length);function m(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return e=>(e=Object(c.w)(e),!v(e)||r.every((r=>r.test(e))))}c.w,m(/^[a-zA-Z]*$/),m(/^[a-zA-Z0-9]*$/),m(/^\d*(\.\d+)?$/);var y={$validator:m(/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i),$message:"Value is not a valid email address",$params:{type:"email"}};function _(e){return{$validator:(r=e,e=>!v(e)||k(e)>=Object(c.w)(r)),$message:e=>{let{$params:r}=e;return`This field should be at least ${r.min} characters long`},$params:{min:e,type:"minLength"}};var r}var w={$validator:function(e){return"string"==typeof e&&(e=e.trim()),v(e)},$message:"Value is required",$params:{type:"required"}};const $=(e,r)=>!e||v("string"==typeof r?r.trim():r);function z(e){return{$validator:(r=e,function(e,t){if("function"!=typeof r)return $(Object(c.w)(r),e);const o=r.call(this,e,t);return $(o,e)}),$message:"The value is required",$params:{type:"requiredIf",prop:e}};var r}function j(e){return r=>Object(c.w)(r)===Object(c.w)(e)}function M(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"other";return{$validator:j(e),$message:e=>`The value must be equal to the ${r} value`,$params:{equalTo:e,otherName:r,type:"sameAs"}}}m(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i);m(/(^[0-9]*$)|(^-[0-9]+$)/),m(/^[-]?\d*(\.\d+)?$/)},833:function(e,r,t){var content=t(845);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(10).default)("c8d0932c",content,!0,{sourceMap:!1})},844:function(e,r,t){"use strict";t(833)},845:function(e,r,t){var c=t(9)((function(i){return i[1]}));c.push([e.i,'.display-none{display:none}.sf-checkbox{--icon-size:1.25rem}.sf-checkbox__container{align-items:center;cursor:pointer;cursor:var(--checkbox-cursor,pointer);display:flex;padding:var(--checkbox-padding);position:relative;width:var(--checkbox-container-width)}.sf-checkbox__checkmark{align-items:center;background:transparent;background:var(--checkbox-background,transparent);border:var(--checkbox-border,var(--checkbox-border-style,solid) var(--checkbox-border-color,var(--c-link)));border-radius:var(--checkbox-border-radius);border-width:1px;border-width:var(--checkbox-border-width,1px);box-sizing:border-box;display:flex;display:var(--checkbox-display,flex);height:1.5rem;height:var(--checkbox-size,1.5rem);justify-content:center;order:var(--checkbox-order);transition:background .15s linear,border-color .15s linear;width:1.5rem;width:var(--checkbox-size,1.5rem)}.has-error .sf-checkbox__checkmark{--checkbox-border-color:var(--c-danger)}.sf-checkbox__checkmark:hover{--checkbox-border-color:var(--c-black)}.has-error .sf-checkbox__checkmark:hover{--checkbox-border-color:var(--c-danger)}.is-disabled .sf-checkbox__checkmark,.is-disabled .sf-checkbox__checkmark:hover{--checkbox-border-color:var(--c-text-disabled)}.is-disabled .sf-checkbox__checkmark.is-active{--checkbox-background:var(--c-text-disabled)}.has-error .sf-checkbox__checkmark.is-active{--checkbox-border-color:var(--c-danger);--checkbox-background:var(--c-danger)}.sf-checkbox__label{color:var(--checkbox-label-color,var(--c-link));flex:1;font:var(--checkbox-font,var(--checkbox-font-weight,var(--font-weight--normal)) var(--checkbox-font-size,var(--font-size--base))/1.6 var(--checkbox-font-family,var(--font-family--primary)));font:var(--checkbox-font,var(--checkbox-font-weight,var(--font-weight--normal)) var(--checkbox-font-size,var(--font-size--base))/var(--checkbox-font-line-height,1.6) var(--checkbox-font-family,var(--font-family--primary)));margin:var(--checkbox-label-margin,0 0 0 var(--spacer-xs));transition:color .15s linear}.sf-checkbox__label:hover{--checkbox-label-color:var(--c-black)}.sf-checkbox--is-disabled .sf-checkbox__label:hover{--checkbox-label-color:var(--c-text-disabled)}.sf-checkbox.is-active{--checkbox-border-color:var(--c-primary);--checkbox-background:var(--c-primary)}.sf-checkbox.is-active.has-error{--checkbox-label-color:var(--c-text);--checkbox-border-color:var(--c-danger);--checkbox-background:var(--c-danger);--checkbox-message-color:var(--c-danger)}.sf-checkbox.is-active.is-disabled{--checkbox-border-color:var(--c-text-disabled);--checkbox-background:var(--c-text-disabled)}.sf-checkbox.is-required{--checkbox-message-color:var(--c-text)}.sf-checkbox.is-required.has-error{--checkbox-message-color:var(--c-danger)}.sf-checkbox.is-disabled{--checkbox-label-color:var(--c-text-disabled);--checkbox-border-color:var(--c-text-disabled)}.sf-checkbox__message{color:var(--checkbox-message-color,var(--c-danger));font:var(--checkbox-message-font,var(--checkbox-message-font-weight,var(--font-weight--normal)) var(--checkbox-message-font-size,var(--font-size--xs))/1.2 var(--checkbox-message-font-family,var(--font-family--secondary)));font:var(--checkbox-message-font,var(--checkbox-message-font-weight,var(--font-weight--normal)) var(--checkbox-message-font-size,var(--font-size--xs))/var(--checkbox-message-font-line-height,1.2) var(--checkbox-message-font-family,var(--font-family--secondary)));margin:var(--checkbox-message-margin,var(--spacer-2xs) 0 0 0)}.sf-checkbox__message .sf-checkbox__message--info{color:var(--checkbox-message-color,var(--c-primary))}.sf-checkbox input{height:1px;left:-1000%;opacity:0;position:absolute;width:1px}.sf-checkbox input[style*="outline: none"]:focus+.sf-checkbox__checkmark{outline:none}.sf-checkbox input:focus+.sf-checkbox__checkmark{outline-color:-webkit-focus-ring-color;outline-style:auto}',""]),c.locals={},e.exports=c},867:function(e,r,t){"use strict";var c=t(77),o=(t(38),t(62),t(16),t(40),t(22),t(37),t(6),t(39)),n={name:"SfCheckbox",directives:{focus:t(794).a},components:{SfIcon:o.a},model:{prop:"selected",event:"change"},props:{name:{type:String,default:""},value:{type:[String,Boolean],default:""},label:{type:String,default:""},hintMessage:{type:String,default:"Required."},required:{type:Boolean,default:!1},infoMessage:{type:String,default:""},errorMessage:{type:String,default:"This field is not correct."},valid:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},selected:{type:[Array,Boolean],default:function(){return[]}}},computed:{isChecked:function(){return"boolean"==typeof this.selected?this.selected:this.selected.includes(this.value)},computedMessageSlotName:function(){return this.messagesHandler("show-error-message","show-info-message",this.required?"show-hint-message":"")},computedMessage:function(){return this.messagesHandler(this.errorMessage,this.infoMessage,this.required?this.hintMessage:"")},computedMessageClass:function(){return this.messagesHandler("sf-checkbox__message--error","sf-checkbox__message--info",this.required?"sf-checkbox__message--hint":"")},nameWithoutWhitespace:function(){return this.name.replace(/\s/g,"")}},methods:{inputHandler:function(){var e=this;if("boolean"==typeof this.selected)this.$emit("change",!this.selected);else{var r=Object(c.a)(this.selected);r.includes(this.value)?r=r.filter((function(r){return r!==e.value})):r.push(this.value),this.$emit("change",r)}},messagesHandler:function(e,r,t){return this.errorMessage&&!this.valid?e:this.infoMessage&&this.valid?r:this.hintMessage?t:""}}},l=(t(844),t(2)),component=Object(l.a)(n,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"sf-checkbox",class:{"is-active":e.isChecked,"is-disabled":e.disabled,"has-error":!e.valid,"is-required":e.required},attrs:{"data-testid":e.name}},[t("label",{staticClass:"sf-checkbox__container"},[t("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"sf-checkbox__input",attrs:{type:"checkbox",name:e.name,disabled:e.disabled,"aria-invalid":!e.valid,"aria-required":e.required,"aria-describedby":e.errorMessage?e.nameWithoutWhitespace+"-error":null},domProps:{value:e.value,checked:e.isChecked},on:{change:e.inputHandler}}),e._v(" "),e._t("checkmark",(function(){return[t("span",{staticClass:"sf-checkbox__checkmark",class:{"sf-checkbox__checkmark is-active":e.isChecked}},[t("SfIcon",{class:{"display-none":!e.isChecked},attrs:{icon:"check",color:"white"}})],1)]}),null,{isChecked:e.isChecked,disabled:e.disabled}),e._v(" "),e._t("label",(function(){return[t("span",{staticClass:"sf-checkbox__label",class:{"display-none":!e.label}},[e._v(e._s(e.label))])]}),null,{label:e.label,isChecked:e.isChecked,disabled:e.disabled})],2),e._v(" "),t("div",{staticClass:"sf-checkbox__message"},[t("transition",{attrs:{name:"sf-fade"}},[e.disabled?e._e():e._t(e.computedMessageSlotName,(function(){return[t("div",{class:e.computedMessageClass,attrs:{id:e.nameWithoutWhitespace+"-error","aria-live":"assertive"}},[e._v("\n          "+e._s(e.computedMessage)+"\n        ")])]}),null,{computedMessage:e.computedMessage})],2)],1)])}),[],!1,null,null,null);r.a=component.exports}}]);