!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).vanillaDevice={})}(this,function(e){"use strict";function o(){return window.innerWidth}function i(){return window.innerHeight}function t(){return/(?:Android)/.test(b)}function n(){return/(?:Firefox)/.test(b)}function r(){return/(?:iPad|PlayBook)/.test(b)||t()&&!/(?:Mobile)/.test(b)||n()&&/(?:Tablet)/.test(b)}function u(){return/(?:iPhone)/.test(b)&&!r()}function c(){return/MicroMessenger/.test(b)}function s(){return!u()&&!t()}function a(){return/iphone/gi.test(window.navigator.userAgent)&&g&&3===g&&375===o()&&812===i()}function l(){return/iphone/gi.test(window.navigator.userAgent)&&g&&3===g&&414===o()&&896===i()}function d(){return 1<g?.5:1}function f(){return 1<g?.65:1}function m(){return a()||l()}function w(){return 0<=window.location.href.indexOf("_os_ios_")}function v(){return 0<=window.location.href.indexOf("_os_android_")}function _(){return w()||v()||window.cordova||!1}function h(){return _()?m()?43:20:0}function p(){return(_()||c())&&m()?25:0}var b=navigator.userAgent,g=window.devicePixelRatio||1,x="__device-style-ele__";function y(){var e="\n    :root {\n      --safe-top:"+h()+"px; --safe-bottom:"+p()+"px; --hair:"+d()+"px;--line:"+f()+"px; --iw:"+o()+"px; --ih:"+i()+"px;\n    }\n  ",t=document.getElementById(x);if(t)t.textContent=e;else{var n=document.createElement("style");n.textContent=e,n.id=x,document.head.append(n)}}var T=null;window.addEventListener("resize",function(){T&&(clearTimeout(T),T=null),setTimeout(y,30)}),y();e.hair=d,e.ih=i,e.isAndroid=t,e.isChrome=function(){return/(?:Chrome|CriOS)/.test(b)},e.isExtraLarge=function(){return 1<g?o()<=640:o()<=1280},e.isFireFox=n,e.isIPhoneX=a,e.isIPhoneXMax=l,e.isIos=u,e.isLarge=function(){return 1<g?o()<=512:o()<=1024},e.isLow=function(){return!1},e.isMiddle=function(){return 1<g?o()<=375:o()<=750},e.isNative=_,e.isNativeAndroid=v,e.isNativeIOS=w,e.isNeedIPhoneSafe=m,e.isPc=s,e.isSmall=function(){return 1<g?o()<=320:o()<=640},e.isTablet=r,e.isWechat=c,e.iw=o,e.line=f,e.safeBottom=p,e.safeTop=h,e.setCanNotScalePage=function(){if(!s()&&!window.__setCanNotScale){window.__setCanNotScale=!0;var e=document.createElement("style");e.textContent="\n    * {\n      -moz-user-select:none; -webkit-user-select:none; -ms-user-select:none; user-select:none; \n      touch-action: manipulation;\n    }\n    .can-user-select, input, textarea {\n      -moz-user-select:auto; -webkit-user-select:auto;-ms-user-select:auto; user-select:auto;\n    }\n  ";var t=document.createElement("meta");t.setAttribute("name","viewport"),t.setAttribute("content","width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui, viewport-fit=cover"),document.head.append(e,t),document.addEventListener("gesturestart",function(e){e.preventDefault()})}},e.setFocusTouchScroll=function(t){window.__setBodyCanNotTouchScroll?(window.__setBodyCanNotTouchScroll=!0,t&&(t.__mobile_scroll||(t.__mobile_scroll=!0,t.addEventListener("touchstart",function(){if(t.__can_scroll=t.scrollHeight>t.clientHeight,t.__can_scroll){var e=t.scrollTop;0===e?t.scrollTop=1:e+t.offsetHeight===t.scrollHeight&&(t.scrollTop=t.scrollHeight-t.offsetHeight-1)}}),t.addEventListener("touchmove",function(e){t.__can_scroll?e.stopPropagation():e.preventDefault()})))):document.addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1})},e.setKeyboardAutoScrollBack=function(){if(!s()&&!window.__setKeyboardAutoScrollBack){window.__setKeyboardAutoScrollBack=!0;var t,n=0,o=0,i=null,r=function(e){t&&t.blur&&t.blur()};document.body.addEventListener("focusin",function(e){i&&(clearTimeout(i),i=null),t=e.target,n=document.body.scrollTop,o=window.scrollY,i=setTimeout(function(){document.body.addEventListener("touchend",r)},60)}),document.body.addEventListener("focusout",function(){document.body.scrollTop=n,window.scrollTo(0,o),t=!1,document.body.removeEventListener("touchend",r)})}},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.js.map
