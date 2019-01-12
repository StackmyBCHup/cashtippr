!function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(2),n=o(3),r=o(4),s=o(5),a=o(6),c=o(7),p=function(){function t(e,o){var p=this;this.tooltips=new i.Tooltips(this),this.window=e,this.$=o,this.config=this.window.cashtipprCfg||{},this.config.consentCookieName=t.CONSENT_COOKIE_NAME,this.config.confirmCookiesMsg=t.CONFIRM_COOKIES_MSG,this.config.confirmCookiesBtn=t.CONFIRM_COOKIES_BTN,this.webHelpers=new n.WebHelpers(this.window,this.$,this.config),this.badger=new c.BadgerWallet(this,this.webHelpers,!0),this.qr=new a.QrCode(this,this.webHelpers),this.blurryImage=new r.BlurryImage(this),this.shout=new s.Shout(this),this.$(this.window.document).ready(function(t){p.tooltips.initToolTips(),p.webHelpers.checkCookieConsent()})}return t.toSatoshis=function(t){return Math.floor(1e8*t)},t.prototype.getConfig=function(){return this.config},t.prototype.getWebHelpers=function(){return this.webHelpers},t.CONSENT_COOKIE_NAME="ct-ck",t.CONFIRM_COOKIES_MSG="#ct-cookieMsg",t.CONFIRM_COOKIES_BTN="#ct-confirmCookies",t}();e.CashTippr=p},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=new(o(0).CashTippr)(window,jQuery);window.cashtippr=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.cashtippr=t}return t.prototype.initToolTips=function(){var t,e=this.cashtippr.window,o=this.cashtippr.$,i=this,n={debug:!1},r=0,s=!1,a=function(t,e){void 0===e&&(e=!1),e=e||!1;var i="pointerdown.tsfTT touchstart.tsfTT click.tsfTT",n=o(t);e?(n.off("mousemove mouseleave mouseout ct-tooltip-update"),o(document.body).off(i)):(n.on({mousemove:p,mouseleave:u,mouseout:u}),o(document.body).off(i).on(i,l)),n.on("ct-tooltip-update",c)},c=function(t){if(t.target.classList.contains("ct-tooltip-item")){var e=t.target.querySelector(".ct-tooltip-text");e instanceof Element&&(e.innerHTML=t.target.dataset.desc)}},p=function(t){var e=o(t.target),i=e.find(".ct-tooltip"),n=i.find(".ct-tooltip-arrow"),r=i.data("overflow"),s=i.data("overflowDir");if(r=parseInt(r,10),r=isNaN(r)?0:-Math.round(r))n.css(s,r+"px");else{var a=t.originalEvent&&t.originalEvent.pageX||t.pageX,c=e.closest(".ct-tooltip-wrap"),p=a-c.offset().left-8,u=i.find(".ct-tooltip-text-wrap"),l=u.outerWidth(!0),d=i.data("adjust"),f=i.data("adjustDir"),h=l-16-7;if(d=parseInt(d,10),d=isNaN(d)?0:Math.round(d))if(p+=d="left"===f?-d:d,h-d>c.outerWidth(!0))h=u.find(".ct-tooltip-text").outerWidth(!0)-16-7;p<=7?n.css("left","7px"):p>=h?n.css("left",h+"px"):n.css("left",p+"px")}},u=function(t){var e;s||(o(t.target).find(".ct-tooltip").remove(),e=t.target,a(e,!0))},l=function(t){s=!0,clearTimeout(r),r=setTimeout(function(){s=!1},250);var e,i=o(t.target);if(i.hasClass("ct-tooltip-item")&&(e=i.find(".ct-tooltip")),!e){var n=i.children(".ct-tooltip-item");n.length&&(e=n.find(".ct-tooltip"))}e&&e.length?o(".ct-tooltip").not(e).remove():o(".ct-tooltip").remove()},d=function(t){if(!s){var e=!1;switch(t.type){case"mouseenter":break;case"pointerdown":case"touchstart":e=!0}if(t.target.classList.contains("ct-tooltip-item"))e&&l(t),function(t){var e=o(t.target),i=t.target.dataset.desc;if(i&&0===e.find("div").length){t.target.title="";var n=o('<div class="ct-tooltip"><span class="ct-tooltip-text-wrap"><span class="ct-tooltip-text">'+i+'</span></span><div class="ct-tooltip-arrow"></div></div>');e.append(n);var r=e.closest(".ct-tooltip-boundary");r=r.length&&r||o(document.body);var s=e.outerHeight()+9,a=n.offset().top-s;r.offset().top-(r.prop("scrolltop")||0)>a?(n.addClass("ct-tooltip-down"),n.css("top",s+"px")):n.css("bottom",s+"px");var c=e.closest(".ct-tooltip-wrap"),p=n.find(".ct-tooltip-text-wrap"),u=p.find(".ct-tooltip-text"),l=c.width(),d=p.outerWidth(!0),f=u.outerWidth(!0),h=p.offset().left,g=h+f,w=r.offset().left-(r.prop("scrollLeft")||0),m=w+r.outerWidth();if(h<w)(v=w-h+12)<-(b=parseInt(p.css("flex-basis"),10))&&(v=-b),n.css("left",v+"px"),n.data("overflow",v),n.data("overflowDir","left");else if(g>m){var v,b;(v=m-g-l-12)<-(b=parseInt(p.css("flex-basis"),10))&&(v=-b),n.css("left",v+"px"),n.data("overflow",v),n.data("overflowDir","left")}else if(l<42)n.css("left","-15px"),n.data("overflow",-15),n.data("overflowDir","left");else if(l>d){var y=(t.originalEvent&&t.originalEvent.pageX||t.pageX)-c.offset().left-d/2,C=y+d;y<0?y=0:C>l&&(y=l-f),n.css("left",y+"px"),n.data("adjust",y),n.data("adjustDir","left")}}}(t),p(t),a(t.target);else{var i=t.target.querySelector(".ct-tooltip-item:hover"),r=new o.Event(t.type);r.pageX=t.originalEvent&&t.originalEvent.pageX||t.pageX,i?(n.debug&&console.log("Tooltip event warning: delegation"),o(i).trigger(r)):(n.debug&&console.log("Tooltip event warning: bubbling"),o(t.target).closest(".ct-tooltip-wrap").find(".ct-tooltip-item:hover").trigger(r))}t.stopPropagation()}},f=function(){var t=o(".ct-tooltip-wrap");t.off("mouseenter pointerdown touchstart"),t.on("mouseenter pointerdown touchstart",".ct-tooltip-item",d)};f(),o(e).on("ct-reset-tooltips",f),t=o("#wpcontent"),i.addTooltipBoundary(t)},t.prototype.addTooltipBoundary=function(t){jQuery(t).addClass("ct-tooltip-boundary")},t.prototype._triggerTooltipReset=function(){jQuery(window).trigger("ct-reset-tooltips")},t.prototype._triggerTooltipUpdate=function(t){jQuery(t).trigger("ct-tooltip-update")},t}();e.Tooltips=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,o){this.window=t,this.$=e,this.config=o}return t.prototype.getBrowserLang=function(){return this.window.navigator.language.substr(0,2).toLowerCase()},t.prototype.getCookie=function(t){var e,o,i,n=this.window.document.cookie.split(";");for(e=0;e<n.length;e++)if(o=n[e].substr(0,n[e].indexOf("=")),i=n[e].substr(n[e].indexOf("=")+1),(o=o.replace(/^\s+|\s+$/g,""))==t)return decodeURI(i);return null},t.prototype.setCookie=function(t,e,o){var i=new Date;i=new Date(i.getTime()+864e5*(o||this.config.cookieLifeDays)),this.window.document.cookie=t+"="+e+"; expires="+i.toUTCString()+"; path="+this.config.cookiePath},t.prototype.removeCookie=function(t){this.window.document.cookie=t+"=; expires=Thu, 02 Jan 1970 00:00:00 UTC; path="+this.config.cookiePath},t.prototype.checkCookieConsent=function(){var t=this;this.$(this.config.confirmCookiesBtn).click(function(){t.confirmCookies()}),null!==this.getCookie(this.config.consentCookieName)&&this.$(this.config.confirmCookiesMsg).remove()},t.prototype.fromBase64=function(t){return"function"!=typeof this.window.atob?(this.window.console.error("Base64 decoding is not supported in your browser"),""):this.window.atob(t)},t.prototype.toBase64=function(t){return"function"!=typeof this.window.btoa?(this.window.console.error("Base64 encoding is not supported in your browser"),""):this.window.btoa(t)},t.prototype.translate=function(t,e,o){if(void 0===o&&(o=!1),"string"!=typeof t)try{t=t.toString()}catch(e){return this.log("Text to translate is not a string"),t}for(var i=0,n=0;-1!==(i=t.indexOf("{",i));)if(i>0&&"\\"===t.charAt(i-1))i++;else{if(-1===(n=t.indexOf("}",i))){this.log("Can not find end position while translating HTML");break}var r=t.substring(i+1,n),s=null;if("tr:"===r.substring(0,3)){var a=r.substring(3);s=this.tr(a)}else if("object"==typeof e){var c=e[r];void 0!==c&&(s="boolean"==typeof o&&o?c:this.escapeOutput(c))}if(null!==s){var p=new RegExp("\\{"+r+"\\}","g");t=t.replace(p,s)}else if(null!==r.match("[A-Za-z0-9_]+")){this.log("No translation found for place holder: "+r);p=new RegExp("\\{"+r+"\\}","g");t=t.replace(p,"MISSING: "+this.escapeOutput(r))}else i+=r.length}return t=t.replace(/\\\\\\{/,"{")},t.prototype.escapeOutput=function(t,e){return void 0===e&&(e=!0),"string"!=typeof t?t:(t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),void 0!==e&&!0!==e||(t=t.replace(/\r?\n/g,"<br>")),t)},t.prototype.escapeRegex=function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},t.prototype.tr=function(t){return t},t.prototype.log=function(t){"object"==typeof this.window.console&&"function"==typeof this.window.console.log&&this.window.console.log(arguments)},t.prototype.isAppleIOS=function(){return/iPad|iPhone|iPod/.test(this.window.navigator.userAgent)&&!this.window.MSStream},t.prototype.confirmCookies=function(){this.$(this.config.confirmCookiesMsg).remove(),this.setCookie(this.config.consentCookieName,"1",this.config.cookieLifeDays)},t.prototype.getApi=function(t,e,o,i){"function"==typeof e?(o=e,e=null):void 0===e&&(e=null);var n=t;return 0!==n.toLowerCase().indexOf("http")&&(n=this.config.siteUrl+n),this.$.get(n,e,function(t,e,i){o(t,e,i)},i)},t}();e.WebHelpers=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){return function(t){this.cashtippr=t}}();e.BlurryImage=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){var e=this;this.scheduleUpdateTimerID=0,this.cashtippr=t,this.cashtippr.$(this.cashtippr.window.document).ready(function(t){0!==e.cashtippr.$(".ct-message").length&&(e.updateRemainingChars(),e.addEventListeners())}),this.cashtippr.$(this.cashtippr.window.document).ready(function(t){e.addConfirmDeleteMessages()})}return t.prototype.onPayment=function(t){this.cashtippr.$("#"+t.domID).parent().parent().submit()},t.prototype.updateRemainingChars=function(){var t=this,e=this.cashtippr.$(".ct-message").parent().parent();this.cashtippr.$.each(e,function(e,o){var i=t.cashtippr.$(o),n=i.find(".ct-message").val(),r=parseInt(i.find(".ct-max-chars").val())-n.length;i.find(".ct-chars-left").text(r),r<0?(i.find(".ct-chars-left").css("color","red"),i.find(".ct-shout").prop("disabled",!0),i.find(".ct-button").fadeOut("slow")):(i.find(".ct-chars-left").css("color",""),0===n.length?(i.find(".ct-shout").prop("disabled",!0),i.find(".ct-button").fadeOut("slow")):(i.find(".ct-shout").prop("disabled",!1),i.find(".ct-button").fadeIn("slow")))})},t.prototype.addEventListeners=function(){var t=this;this.cashtippr.$(".ct-message").keyup(function(e){t.scheduleCharsUpdate()}),this.cashtippr.$(".ct-message").change(function(e){t.scheduleCharsUpdate()})},t.prototype.addConfirmDeleteMessages=function(){var t=this;this.cashtippr.$(".ct-delete-shout-link").on("click",function(e){var o=t.cashtippr.$("#ct-delete-shout-confirm").text();if(!0!==t.cashtippr.window.confirm(o))return e.preventDefault(),!1})},t.prototype.scheduleCharsUpdate=function(){var t=this;0!==this.scheduleUpdateTimerID&&clearTimeout(this.scheduleUpdateTimerID),this.scheduleUpdateTimerID=setTimeout(function(){t.updateRemainingChars()},50)},t}();e.Shout=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var o=this;this.cashtippr=t,this.webHelpers=e,this.cashtippr.$(this.cashtippr.window.document).ready(function(t){o.cashtippr.$(".ct-qrcode-btn").click(function(t){o.showQrDialog(t.target)})})}return t.prototype.showQrDialog=function(t){var e=this,o=this.cashtippr.$(t).parent().parent().parent(),i=o.attr("id").replace(/^ct-btn-wrap-/,""),n=o.parent(),r=0;0!==n.find("input[name='amount']").length&&(r=n.find("input[name='amount']").val());var s={txid:i,am:r},a=this.webHelpers.translate(this.cashtippr.$("#ct-modal-qrcode-dialog-tpl").html(),{dialog_class:"dialog-"+i});this.cashtippr.$("body").append(a),this.webHelpers.getApi("/wp-json/cashtippr/v1/qrcode",s,function(t){if(e.cashtippr.$(".ct-loading").remove(),!0===t.error)return e.cashtippr.window.console.error("Error starting QR code tip"),void e.cashtippr.window.console.error(t.errorMsg);e.cashtippr.$(".ct-qr-code").fadeIn("slow").attr("src",t.data[0])}),this.cashtippr.$(".ct-close-dialog").click(function(t){e.cashtippr.$(".dialog-"+i).remove()}),this.cashtippr.$(".ct-copy-field").click(function(t){var o=e.cashtippr.$(t.target).parent().find("input[type='text']");o.select();try{e.cashtippr.window.document.execCommand("copy")}catch(t){}o.select()}),this.cashtippr.$("#ct-qrcode-form input[type='text']").click(function(t){e.cashtippr.$(t.target).select()}),!0===this.webHelpers.isAppleIOS()&&this.cashtippr.$("#ct-qrcode-form .ct-copy-field").addClass("hidden")},t}();e.QrCode=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),n=function(){function t(t,e,o){void 0===o&&(o=!1);var i=this;this.cashtippr=t,this.webHelpers=e,this.globalCallbacks=o,!0===this.globalCallbacks&&setTimeout(function(){i.cashtippr.window.onBadgerPayment=i.onBadgerPayment,i.cashtippr.window.onBadgerClientPayment=i.sendPaymentReceived},0),this.cashtippr.$(this.cashtippr.window.document).ready(function(t){i.cashtippr.$(".ct-input-amount").keyup(function(t){i.updateButtonAmount(t.target)}),i.cashtippr.$(".ct-input-amount").change(function(t){i.updateButtonAmount(t.target)})})}return t.prototype.onBadgerPayment=function(t){var e=this;if("string"==typeof t.buttonData&&0!==t.buttonData.length&&"{"!==t.buttonData[0]&&(t.buttonDataObj=JSON.parse(this.cashtippr.getWebHelpers().fromBase64(t.buttonData))||{}),void 0===t.domID&&(t.domID="ct-btn-wrap-"+t.buttonId),!0===this.cashtippr.getConfig().show_search_engines)return t.buttonDataObj&&0===t.buttonDataObj.days?(this.cashtippr.$("#ct-hidden-"+t.buttonId).fadeIn("slow"),this.cashtippr.$("#ct-button-text-"+t.buttonId+", #ct-image-blurry-"+t.buttonId).fadeOut("slow"),!0===t.buttonDataObj.postHide&&this.cashtippr.$(".ct-more").fadeOut("slow")):(this.cashtippr.$(".ct-hidden-text").fadeIn("slow"),this.cashtippr.$(".ct-more, .ct-button-text, .ct-image-blurry").fadeOut("slow")),this.cashtippr.window.onBadgerClientPayment.call(this.cashtippr.badger,t,function(o){t.buttonDataObj&&!0===t.buttonDataObj.shout&&e.cashtippr.shout.onPayment(t)}),void("function"==typeof this.cashtippr.window.onCashtipprPayment&&this.cashtippr.window.onCashtipprPayment.call(this.cashtippr.window,{badger:t}));this.cashtippr.window.onBadgerClientPayment.call(this.cashtippr.badger,t,function(o){t.buttonDataObj&&!0===t.buttonDataObj.shout?e.cashtippr.shout.onPayment(t):e.cashtippr.window.location.reload(!0)})},t.prototype.sendPaymentReceived=function(t,e){var o={txid:t.buttonId,am:t.amount};this.webHelpers.getApi("/wp-json/cashtippr/v1/mb-client",o,function(t){e&&e(t)})},t.prototype.updateButtonAmount=function(t){var e=this.cashtippr.$(t).parent().parent(),o=e.find(".badger-button");if(o){var n=parseFloat(this.cashtippr.$(t).val());if(0!==n&&n!==Number.NaN){var r=this.cashtippr.getConfig().display_currency,s=i.CashTippr.toSatoshis(n/this.cashtippr.getConfig().rate[r]);o.attr("data-satoshis",s),o.find(".ct-btn-display-amount").text(n)}}else this.cashtippr.window.console.error("Unable to find Badger button",e)},t}();e.BadgerWallet=n}]);
//# sourceMappingURL=bundle.js.map