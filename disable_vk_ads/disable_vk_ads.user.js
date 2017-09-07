// ==UserScript==
// @name        disable vk ads
// @namespace   vk
// @include     https://vk.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function() {
var css = "#ads_left, _ads_promoted_post_data_w { display:none !important }";

var heads = document.getElementsByTagName("head");
if (heads.length > 0) {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	heads[0].appendChild(node);
}
})();