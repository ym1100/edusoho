webpackJsonp([3],{P8if:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Dd8w"),a=s.n(i),n=s("jW8y"),r=s("gMS5"),o=s("NYxO"),c=s("Du/2"),u={components:{Directory:n.a,DetailHead:r.a},computed:a()({},Object(o.mapState)("course",{details:function(e){return e.details}}),Object(o.mapState)({isLoading:function(e){return e.isLoading}})),beforeRouteLeave:function(e,t,s){this.$store.commit("course/"+c.i,{sourceType:"img"}),s()}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail try"},[this.isLoading?t("e-loading"):this._e(),this._v(" "),t("detail-head",{attrs:{courseSet:this.details.courseSet}}),this._v(" "),t("directory",{attrs:{hiddeTitle:!0,courseItems:this.details.courseItems}})],1)},staticRenderFns:[]},d=s("VU/8")(u,l,!1,null,null,null);t.default=d.exports},gMS5:function(e,t,s){"use strict";var i=s("//Fk"),a=s.n(i),n=s("Xxa5"),r=s.n(n),o=(s("eqfM"),s("/QYm")),c=s("exGp"),u=s.n(c),l=s("Dd8w"),d=s.n(l),h=s("PirY"),p=s.n(h),_=s("NYxO"),v=s("gyMJ"),y={data:function(){return{isEncryptionPlus:!1}},props:{courseSet:{type:Object,default:{}}},computed:d()({},Object(_.mapState)("course",{sourceType:function(e){return e.sourceType},selectedPlanId:function(e){return e.selectedPlanId},taskId:function(e){return e.taskId},details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},user:function(e){return e.user}})),watch:{taskId:{immediate:!0,handler:function(e,t){["video","audio"].includes(this.sourceType)&&(window.scrollTo(0,0),this.initPlayer())}}},methods:{getParams:function(){return!this.joinStatus&&Number(this.details.tryLookable)?{query:{courseId:this.selectedPlanId,taskId:this.taskId},params:{preview:1}}:{query:{courseId:this.selectedPlanId,taskId:this.taskId}}},initPlayer:function(){var e=this;return u()(r.a.mark(function t(){var s,i,a;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$refs.video&&(e.$refs.video.innerHTML=""),t.next=3,v.a.getMedia(e.getParams());case 3:if(s=t.sent,e.isEncryptionPlus=s.media.isEncryptionPlus,!s.media.isEncryptionPlus){t.next=8;break}return Object(o.a)("该浏览器不支持云视频播放，请下载App"),t.abrupt("return");case 8:i=s.media,a={id:"course-detail__head--video",user:e.user,playlist:i.url,autoplay:!0},e.$store.commit("UPDATE_LOADING_STATUS",!0),e.loadPlayerSDK().then(function(t){e.$store.commit("UPDATE_LOADING_STATUS",!1);new t(a)});case 12:case"end":return t.stop()}},t,e)}))()},loadPlayerSDK:function(){if(!window.VideoPlayerSDK){var e="//service-cdn.qiqiuyun.net/js-sdk/video-player/sdk-v1.js?v="+Date.now()/1e3/60;return new a.a(function(t,s){p()(e,function(e){e&&s(e),t(window.VideoPlayerSDK)})})}return a.a.resolve(window.VideoPlayerSDK)}}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"course-detail__head"},[t("div",{directives:[{name:"show",rawName:"v-show",value:"img"===this.sourceType||this.isEncryptionPlus,expression:"sourceType === 'img' || isEncryptionPlus"}],staticClass:"course-detail__head--img"},[t("img",{attrs:{src:this.courseSet.cover.large,alt:""}})]),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:["video","audio"].includes(this.sourceType)&&!this.isEncryptionPlus,expression:"['video', 'audio'].includes(sourceType) && !isEncryptionPlus"}],ref:"video",attrs:{id:"course-detail__head--video"}})])},staticRenderFns:[]},m=s("VU/8")(y,f,!1,null,null,null);t.a=m.exports},jW8y:function(e,t,s){"use strict";s("eqfM");var i=s("/QYm"),a=s("Dd8w"),n=s.n(a),r=s("NYxO"),o=s("Du/2"),c=s("1JqO"),u=(s("gyMJ"),{mixins:[c.a],props:{hiddeTitle:{type:Boolean,default:!1}},computed:n()({},Object(r.mapState)("course",{details:function(e){return e.details},joinStatus:function(e){return e.joinStatus},courseLessons:function(e){return e.courseLessons},selectedPlanId:function(e){return e.selectedPlanId}}),Object(r.mapState)(["courseSettings"])),data:function(){return{directoryArray:[],chapters:[],tasks:[],unit:[],unitShow:{}}},watch:{selectedPlanId:{immediate:!0,handler:function(e){var t=this;if(this.courseLessons.length){var s=0,i=0,a=0;this.directoryArray=this.courseLessons.map(function(e){return s++,t.$set(e,"show",!0),"chapter"===e.type&&(a++,s=0),"unit"===e.type&&(i=s-1),"lesson"===e.type&&t.$set(e,"show",Math.max(a-1,0)+"-"+i),e}),this.getTasks(this.directoryArray)}}}},methods:n()({},Object(r.mapMutations)("course",{setSourceType:o.i}),{lessonToggle:function(e,t){var s=e+"-"+t;this.$set(this.unitShow,s,!this.unitShow[s])},filterNumber:function(e,t,s){return s?"1"===e.isOptional?"选修":"":"1"===e.isOptional?"选修":t+1},getTasks:function(e){var t=this,s=[];this.chapters=[],this.tasks=[],this.unit=[],e.forEach(function(e){"chapter"!==e.type?("unit"===e.type&&(t.$set(t.unitShow,t.chapters.length-1+"-"+s.length,!0),t.unit.push(e)),s.push(e)):(s.length>0?(t.tasks.push([].concat(s)),s=[]):t.chapters.length>0&&t.tasks.push([]),t.chapters.push(e)),"lesson"==e.type&&e.tasks.forEach(function(s){e.status=t.getCurrentStatus(s)})}),this.unit.length||this.$set(this.unitShow,"0-0",!0),"chapter"!==e[e.length-1].type&&this.tasks.push(s),"chapter"!==e[0].type&&this.chapters.unshift({show:!0})},getCurrentStatus:function(e){return Number(this.details.tryLookable)&&"video"===e.type&&e.activity.mediaStorage?"is-tryLook":Number(e.isFree)?"is-free":""},filterTaskStatus:function(e){return this.details.member||"is-tryLook"!==e.status?this.details.member||"is-free"!==e.status?"":"免费":"试看"},lessonCellClick:function(e,t){var s=this.details;if(!s.allowAnonymousPreview&&this.$route.push({name:"login",query:{redirect:this.redirect}}),!this.joinStatus&&Number(s.tryLookable)&&["is-tryLook","is-free"].includes(t.status))switch(e.type){case"video":case"audio":this.$router.push({name:"course_try"}),this.setSourceType({sourceType:e.type,taskId:e.id});break;case"doc":case"text":case"ppt":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type}});break;default:return Object(i.a)("请先加入课程")}else this.joinStatus?this.showTypeDetail(e):Object(i.a)("请先加入课程")},showTypeDetail:function(e){if("published"===e.status)switch(e.type){case"video":"self"===e.mediaSource?this.setSourceType({sourceType:"video",taskId:e.id}):Object(i.a)("暂不支持此类型");break;case"audio":this.setSourceType({sourceType:"audio",taskId:e.id});break;case"text":case"ppt":case"doc":this.$router.push({name:"course_web",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type}});break;case"live":var t=new Date,s=new Date(1e3*e.endTime),a=(new Date(1e3*e.startTime),!1);if(t>s){if("videoGenerated"==e.activity.replayStatus)return void("self"===e.mediaSource?this.setSourceType({sourceType:"video",taskId:e.id}):Object(i.a)("暂不支持此类型"));if("ungenerated"==e.activity.replayStatus)return void Object(i.a)("暂无回放");a=!0}this.$router.push({name:"live",query:{courseId:this.selectedPlanId,taskId:e.id,type:e.type,title:e.title,replay:a}});break;default:Object(i.a)("暂不支持此类型")}else Object(i.a)("敬请期待")}})}),l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("e-panel",{staticClass:"directory",attrs:{title:"课程目录","hidde-title":e.hiddeTitle}},[0==e.courseLessons.length?s("div",{staticClass:"empty"},[e._v("暂无学习任务")]):s("div",{staticClass:"directory-list"},e._l(e.chapters,function(t,i){return s("div",{staticClass:"directory-list__item"},["chapter"===t.type?s("div",{staticClass:"directory-list__item-chapter",on:{click:function(e){t.show=!t.show}}},[s("span",{staticClass:"text-overflow"},[e._v("第"+e._s(t.number)+e._s(e.courseSettings.chapter_name)+"："+e._s(t.title))]),e._v(" "),s("i",{class:[t.show?"icon-packup":"icon-unfold"]})]):e._e(),e._v(" "),e._l(e.tasks[i],function(a,n){return s("div",{class:["directory-list__item-unit",{"unit-show":t.show}]},["unit"===a.type?s("div",{staticClass:"lesson-cell__unit"},[s("span",{staticClass:"lesson-cell__unit-title text-overflow"},[e._v("第"+e._s(a.number)+e._s(e.courseSettings.part_name)+"："+e._s(a.title))]),e._v(" "),s("i",{class:[e.unitShow[i+"-"+n]?"icon-packup":"icon-unfold"],on:{click:function(t){e.lessonToggle(i,n)}}})]):e._e(),e._v(" "),"lesson"===a.type?s("div",{staticClass:"lesson-cell__hour text-overflow",class:{"lesson-show":e.unitShow[a.show]}},[a.tasks.length>1?s("div",[s("div",{staticClass:"lesson-cell__lesson text-overflow"},[s("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18"}),e._v(" "),s("span",[e._v("课时"+e._s(a.number)+"："+e._s(a.title))])]),e._v(" "),e._l(a.tasks,function(t,i){return s("div",{class:["box","show-box"]},[s("div",{staticClass:"lesson-cell"},[s("span",{staticClass:"lesson-cell__number"},[e._v(e._s(e.filterNumber(t,i)))]),e._v(" "),s("div",{staticClass:"lesson-cell__content",on:{click:function(s){e.lessonCellClick(t,a)}}},[s("span",[e._v(e._s(t.title))]),e._v(" "),s("span",[e._v(e._s(e._f("taskType")(t))+e._s(e._f("filterTask")(t)))])]),e._v(" "),s("div",{class:["lesson-cell__status",e.details.member?"":a.status]},[e._v("\n                  "+e._s(e.filterTaskStatus(a))+"\n                ")])])])})],2):e._e(),e._v(" "),1===a.tasks.length?s("div",[s("div",{staticClass:"lesson-cell__lesson text-overflow"},[s("i",{staticClass:"h5-icon h5-icon-dot color-primary text-18"}),e._v(" "),s("span",[e._v("课时"+e._s(a.number)+"："+e._s(a.tasks[0].title))]),e._v(" "),s("div",{staticClass:"lesson-cell"},[s("span",{staticClass:"lesson-cell__number"},[e._v(e._s(e.filterNumber(a.tasks[0],0,!0)))]),e._v(" "),s("div",{staticClass:"lesson-cell__content ml3",on:{click:function(t){e.lessonCellClick(a.tasks[0],a)}}},[s("span",[e._v(e._s(e._f("taskType")(a.tasks[0]))+e._s(e._f("filterTask")(a.tasks[0])))])]),e._v(" "),s("div",{class:["lesson-cell__status",e.details.member?"":a.status]},[e._v("\n                  "+e._s(e.filterTaskStatus(a))+"\n                ")])])])]):e._e()]):e._e()])})],2)}))])},staticRenderFns:[]},d=s("VU/8")(u,l,!1,null,null,null);t.a=d.exports}});