// ==UserScript==
// @name        disable lj ads
// @namespace   lj
// @include     http://livejournal.com/*
// @include     https://livejournal.com/*
// @include     http://*.livejournal.com/*
// @include     https://*.livejournal.com/*
// @version     1.0.0
// @grant       none
// ==/UserScript==

(function () {
    var css = ".allbanners, .b-discoverytimes-wrapper, .entryunit--feedpromo-entry, .entryunit--feedpromo," +
        ".recommended-entries, .ljsale, .shade-wrapper " +
        "{display:none !important;}";

    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        var node = document.createElement("style");
        node.type = "text/css";
        node.appendChild(document.createTextNode(css));
        heads[0].appendChild(node);
    }
})();
