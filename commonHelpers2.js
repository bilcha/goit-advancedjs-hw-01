import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as o,l as r}from"./assets/vendor-78be7656.js";const l=document.querySelector("iframe"),e=new o(l);e.on("play",function(){console.log("played the video!")});e.on("timeupdate",r(i,1e3,{trailing:!1}));function i(t){localStorage.setItem("videoplayer-current-time",t.seconds)}e.setCurrentTime(localStorage.getItem("videoplayer-current-time")||0);e.getVideoTitle().then(function(t){console.log("title:",t)});
//# sourceMappingURL=commonHelpers2.js.map