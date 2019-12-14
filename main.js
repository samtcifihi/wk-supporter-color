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

wkgoldburn = {};

(function(gobj) {

    var css;
    if (window.location.hostname === 'community.wanikani.com') {
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
    } else {
        css =
            'body ul.single-character-grid li.character-item.burned,'+
            'body ul.multi-character-grid li.character-item.burned {'+
            '  background-color: #fbc042;'+
            '  background-image:-moz-linear-gradient(top, #fbc550, #faac05);'+
            '  background-image:-o-linear-gradient(top, #fbc550, #faac05);'+
            '  background-image: linear-gradient(to bottom, #fbc550, #faac05);'+
            '  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#FFFBC550, endColorstr=#FFFAAC05, GradientType=0);'+
            '  border-top:1px solid #fbc550;'+
            '  border-left:1px solid #fbc550;'+
            '}'+

            'body ul.single-character-grid li.character-item.burned span.character,'+
            'body ul.single-character-grid li.character-item.burned ul>li,'+
            'body ul.multi-character-grid li.character-item.burned span.character,'+
            'body ul.multi-character-grid li.character-item.burned ul>li,'+
            'body ul.alt-character-list span.burned span {'+
            '  opacity: 0.9;'+
            '  filter:alpha(opacity=90)'+
            '}'+

            'body .legend.level-list span.burned{'+
            '  background-color: #fbc042;'+
            '}'+

            'body .dashboard section.srs-progress ul li:last-child,'+
            'body ul.alt-character-list span.burned {'+
            '  background-color:#fbc042;'+
            '  background-image:-moz-linear-gradient(-45deg, #fbc550, #faac05);'+
            '  background-image:-webkit-linear-gradient(-45deg, #fbc550, #faac05);'+
            '  background-image:-o-linear-gradient(-45deg, #fbc550, #faac05);'+
            '  background-image:linear-gradient(-45deg, #fbc550, #faac05);'+
            '}'+

            'body .lattice-single-character .burned-lattice,'+
            'body .lattice-multi-character .burned-lattice {'+
            '  background-color:#faac05;'+
            '}'+

            'ul.multi-character-grid li.character-item ul>li {font-size:1.3em !important;}'+

            'body .burned-lattice {'+
            '  background-color:#faac05;'+
            '}'+
            'body #timeline .arrows .bur {fill:#fbc042;}'+
            'body #timeline .bars .bur {fill:#fbc042;}'+
            ''+
            '';
    }

    // Insert CSS
    $('head').append('<style type="text/css">'+css+'</style>');

}(wkgoldburn));
