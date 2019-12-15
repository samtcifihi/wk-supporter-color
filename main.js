// ==UserScript==
// @name        WK Supporter Color
// @namespace   samtcifihi
// @description Change WK Community Supporter Colors
// @version     r1
// @include     https://community.wanikani.com/*
// @copyright   2019+, samtcifihi
// @license     MIT; http://opensource.org/licenses/MIT
// @run-at      document-end
// @grant       none
// ==/UserScript==

wksupportcolor = {};

(function(gobj) {

    var css;
    css =
        '.avatar-flair[class*="level-60"]:after {'+
        '  width: 100%;'+
        '  color: rgb(223,170,11);'+
        '  background: linear-gradient(45deg, rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);'+
        '  border: 1px solid rgba(242,215,12,.5);'+
        '  border-radius: 50%;'+
        '  height: 100%;'+
        '  box-sizing: border-box;'+
        '  line-height: 1.9em;'+
        '  margin: 0;'+
        '}'+
        '.avatars .avatar-flair[class*="level-60"]:after {'+
        '  line-height: 1.5em;'+
        '}';

    // Insert CSS
    $('head').append('<style type="text/css">'+css+'</style>');

}(wksupportcolor));
