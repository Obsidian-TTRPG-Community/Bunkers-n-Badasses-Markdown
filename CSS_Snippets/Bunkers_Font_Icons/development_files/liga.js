/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'tik1': '&#x39f9;',
            'tè': '&#x39f9;',
            'ngok6': '&#x34f5;',
            'è': '&#x34f5;',
            'seon5 teon5': '&#x76fe;',
            'dùn': '&#x76fe;',
            'yè': '&#x4936;',
            'jyut6': '&#x925e;',
            'yuè': '&#x925e;',
            'jiàn': '&#x5292;',
            'baau3': '&#x7206;',
            'bào': '&#x7206;',
            'se2': '&#x497e;',
            'xiě': '&#x497e;',
            'gwok3': '&#x6901;',
            'guǒ': '&#x6901;',
            'faan3': '&#x8d29;',
            'fàn': '&#x8d29;',
            'ci1': '&#x87ad;',
            'chī': '&#x87ad;',
            'taan2': '&#x5766;',
            'tǎn': '&#x5766;',
            'duk6': '&#x6bd2;',
            'dú': '&#x6bd2;',
            'zau2': '&#x9152;',
            'jiǔ': '&#x9152;',
            'jim6': '&#x8276;',
            'yàn': '&#x8276;',
            'din1': '&#x766b;',
            'diān': '&#x766b;',
            'hoi2': '&#x93a7;',
            'kǎi': '&#x93a7;',
            'jué': '&#x4807;',
            'syu6': '&#x5fc4;',
            'xin': '&#x5fc4;',
            'fat6': '&#x3579;',
            'fá': '&#x3579;',
            'ziu1': '&#x7126;',
            'jiāo': '&#x7126;',
            'gun3': '&#x3ba1;',
            'guàn': '&#x3ba1;',
            'mou4': '&#x3dfb;',
            'wú': '&#x3dfb;',
            'jan1': '&#x712e;',
            'xìn': '&#x712e;',
            'din6': '&#x96fb;',
            'diàn': '&#x96fb;',
            'dam1 tam2': '&#x43d9;',
            'xiù': '&#x93e5;',
            'soeng1': '&#x51b0;',
            'shuāng': '&#x51b0;',
            'gwaat3 gwat3 kut3 wun6 wut6': '&#x971c;',
            'huò': '&#x971c;',
            'leoi4': '&#x4a13;',
            'léi': '&#x4a13;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
