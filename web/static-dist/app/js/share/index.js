webpackJsonp(["app/js/share/index"],[function(e,a){"use strict";function i(e,a){if(0==$(".weixin-share-modal").length){$("body").append(s(a));var i=$(".weixin-share-modal");i.on("show.bs.modal",function(){i.find(".weixin-share-qrcode").empty(),i.find(".weixin-share-loading").show(),i.find(".weixin-share-qrcode").html('<img src="'+e.data("qrcodeUrl")+'">'),i.find(".weixin-share-qrcode img").load(function(){i.find(".weixin-share-loading").hide()})})}$(".weixin-share-modal").modal("show")}function s(e){var a="";return a+='<div class="modal fade weixin-share-modal" tabindex="-1" role="dialog" aria-hidden="true">',a+='  <div class="modal-dialog modal-sm">',a+='    <div class="modal-content">',a+='      <div class="modal-header">',a+='        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>',a+='        <h4 class="modal-title">'+Translator.trans("share.share_to_wechat_circle_of_friends_hint")+"</h4>",a+="      </div>",a+='      <div class="modal-body">',a+='        <p class="weixin-share-loading" style="text-align:center;">'+Translator.trans("share.qr_code_load_hint")+"</p>",a+='        <p class="weixin-share-qrcode text-center"></p>',a+='        <p class="text-muted text-center"><small>'+Translator.trans("share.wechat_share_usage_hint")+"</small></p>",a+="      </div>",a+="    </div>",a+="  </div>",a+="</div>"}function n(e){var a={};return a.url=e.url,a.title=e.message,""!=e.picture&&(e.picture.indexOf("://")!=-1?a.pic=e.picture:a.pic=document.domain+e.picture),"http://service.weibo.com/share/share.php?"+o(a)}function r(e){var a={};return a.url=e.url,a.title=e.title,a.summary=e.summary,a.desc=e.message,""!=e.picture&&(a.pics=e.picture),"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+o(a)}function t(e){var a={};return a.url=e.url,a.title=e.title,a.summary=e.summary,a.desc=e.message,""!=e.picture&&(a.pics=e.picture),"http://connect.qq.com/widget/shareqq/index.html?"+o(a)}function o(e){var a=[];for(var i in e)a.push(i+"="+encodeURIComponent(e[i]||""));return a.join("&")}$("body").on("click",".js-social-share",function(){var e=$(this),a=e.data("share"),s=e.parents(".js-social-share-params").data(),o="";switch($(".point-share-url").length>0&&$.post($(".point-share-url").val(),function(){}),a){case"weibo":o=n(s),window.open(o);break;case"qzone":o=r(s),window.open(o);break;case"qq":o=t(s),window.open(o);break;case"weixin":i(e,s)}})}]);