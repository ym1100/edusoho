webpackJsonp([18],{pEIs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Xxa5"),n=a.n(i),s=a("//Fk"),r=a.n(s),u=(a("eqfM"),a("/QYm")),o=a("exGp"),d=a.n(o),c=a("Dd8w"),m=a.n(c),l=a("PirY"),v=a.n(l),p=a("gyMJ"),f=a("NYxO"),h=a("Du/2"),w={data:function(){return{media:""}},computed:m()({},Object(f.mapState)("course",{details:function(e){return e.details},joinStatus:function(e){return e.joinStatus}}),Object(f.mapState)({isLoading:function(e){return e.isLoading}})),mounted:function(){var e=this;return d()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.getMedia(e.getParams()).catch(function(e){return Object(u.a)(e.message),r.a.reject(e)});case 2:a=t.sent,["ppt","doc"].includes(e.media)?e.initPlayer(a):(e.$refs.text.innerHTML=a.media.content,e.setNavbarTitle(a.media.title));case 4:case"end":return t.stop()}},t,e)}))()},methods:m()({},Object(f.mapMutations)({setNavbarTitle:h.g}),{getParams:function(){var e=this.$route.query,t=e.courseId,a=e.taskId,i=e.type,n=!this.joinStatus&&Number(this.details.tryLookable||!0);return this.media=i,n?{query:{courseId:t,taskId:a},params:{preview:1}}:{query:{courseId:t,taskId:a}}},initPlayer:function(e){var t=e.media,a="//service-cdn.qiqiuyun.net/js-sdk/sdk-v1.js?v="+Date.now()/1e3/60;v()(a,function(a){if(a)throw a;new window.QiQiuYun.Player({id:"player",resNo:t.resId,token:t.token,source:{type:e.mediaType,args:t}})})}})},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"web-view"},[this.isLoading?t("e-loading"):this._e(),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"text"!==this.media,expression:"media !== 'text'"}],attrs:{id:"player"}}),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:"text"===this.media,expression:"media === 'text'"}],ref:"text",staticClass:"media-text"})],1)},staticRenderFns:[]},y=a("VU/8")(w,x,!1,null,null,null);t.default=y.exports}});