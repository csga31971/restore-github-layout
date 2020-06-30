// ==UserScript==
// @name         restore github layout
// @version      1.0
// @author       AltMirrorBell
// @description  what the fuck is this update
// @match        *://github.com/*
// @inject-into content
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector(".repohead h1").style.left = "21.5%";
    if(document.querySelector(".fork-flag")){
        document.querySelector(".fork-flag").style.marginLeft = "350px";
    }
    document.querySelector(".UnderlineNav").style.margin = "0 auto";
    document.querySelector(".UnderlineNav").style.width = "66.5%";
    document.querySelector(".pagehead-actions").style.right = "15.4%";
    document.querySelector("li.d-flex").style.visibility = "visible";
    document.querySelector(".js-responsive-underlinenav-overflow").style.visibility = "hidden";
})();
