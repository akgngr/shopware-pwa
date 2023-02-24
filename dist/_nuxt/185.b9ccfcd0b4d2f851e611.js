/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{957:function(e,t,n){"use strict";n.r(t);n(60);var o=n(7);String.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)});var r=/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,d=/t=(\d+)[ms]?(\d+)?s?/;function l(e){var t=e.replace(r,"$1");if(t.includes(";")){var n=t.split(";");if(n[1].includes("%"))t=("http://youtube.com"+decodeURIComponent(n[1])).replace(r,"$1");else t=n[0]}else t.includes("#")&&(t=t.split("#")[0]);return t}function c(e){void 0===e&&(e="");var t=e.match(d);if(!t)return 0;var n=t[0],o=t[1],r=t[2];return void 0!==r?(r=parseInt(r,10),o=parseInt(o,10)):n.includes("m")?(o=parseInt(o,10),r=0):(r=parseInt(o,10),o=0),r+60*o}var y={scripts:[],events:{},run:function(){var e=this;this.scripts.forEach((function(t){t(e.YT)})),this.scripts=[]},register:function(e){var t=this;this.YT?this.Vue.nextTick((function(){e(t.YT)})):this.scripts.push(e)}},v=0,f={name:"YoutubeEmbed",props:{playerHeight:{type:[String,Number],default:"360"},playerWidth:{type:[String,Number],default:"640"},playerVars:{type:Object,default:function(){return{autoplay:0,time:0}}},videoId:{type:String},mute:{type:Boolean,default:!1},host:{type:String,default:"https://www.youtube.com"}},render:function(e){return e("div",[e("div",{attrs:{id:this.elementId}})])},template:'<div><div :id="elementId"></div></div>',watch:{playerWidth:"setSize",playerHeight:"setSize",videoId:"update",mute:"setMute"},data:function(){return{elementId:"youtube-player-"+(v+=1),player:{}}},methods:{setSize:function(){this.player.setSize(this.playerWidth,this.playerHeight)},setMute:function(e){e?this.player.mute():this.player.unMute()},update:function(e){var t=(this.playerVars.autoplay?"load":"cue")+"VideoById";this.player.hasOwnProperty(t)?this.player[t](e):setTimeout(function(){this.update(e)}.bind(this),100)}},mounted:function(){var e=this;y.register((function(t){var n=e,o=n.playerHeight,r=n.playerWidth,d=n.playerVars,l=n.videoId,c=n.host;e.player=new t.Player(e.elementId,{height:o,width:r,playerVars:d,videoId:l,host:c,events:{onReady:function(t){e.setMute(e.mute),e.$emit("ready",t)},onStateChange:function(t){-1!==t.data&&e.$emit(y.events[t.data],t)},onError:function(t){e.$emit("error",t)}}})}))},beforeDestroy:function(){null!==this.player&&this.player.destroy&&this.player.destroy(),delete this.player}},h={install:function(e,t){void 0===t&&(t={}),y.Vue=e,f.ready=f.mounted;var n=t.global;void 0===n&&(n=!0);var o=t.componentId;if(void 0===o&&(o="youtube"),n&&e.component(o,f),e.prototype.$youtube={getIdFromURL:l,getTimeFromURL:c},"undefined"!=typeof window&&"undefined"!=typeof document){var r=document.createElement("script");r.src="https://www.youtube.com/player_api";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(r,d),window.onYouTubeIframeAPIReady=function(){y.YT=YT;var e=YT.PlayerState;y.events[e.ENDED]="ended",y.events[e.PLAYING]="playing",y.events[e.PAUSED]="paused",y.events[e.BUFFERING]="buffering",y.events[e.CUED]="cued",y.Vue.nextTick((function(){y.run()}))}}}};o.a.use(h);var m={components:{},name:"CmsElementVideoYoutube",props:{content:{type:Object,default:function(){return{config:{videoID:{value:""},loop:{value:!1},start:{value:0},end:{value:0},autoPlay:{value:!1},displayMode:{value:"standard"},showControls:{value:!0},advancedPrivacyMode:{value:!1}},id:null}}}},computed:{videoId:function(){return this.content.config.videoID.value},slotId:function(){return this.content.id},playInLoop:function(){return!!this.content.config.loop.value},startAt:function(){return Number(this.content.config.start.value)},endAt:function(){return Number(this.content.config.end.value)},autoPlay:function(){return!!this.content.config.autoPlay.value},displayMode:function(){return this.content.config.displayMode.value},showControls:function(){return!!this.content.config.showControls.value},advancedPrivacyMode:function(){return!!this.content.config.advancedPrivacyMode.value}}},w=n(2),component=Object(w.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cms-element-video-youtube"},[n("youtube",{attrs:{id:e.slotId,"video-id":e.videoId,"player-vars":{start:e.startAt,end:e.endAt,autoPlay:e.autoPlay,loop:e.playInLoop}}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);