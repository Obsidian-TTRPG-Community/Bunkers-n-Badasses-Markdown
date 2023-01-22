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
            'Unarmed': '&#xe1100;',
            'Valora': '&#xe1101;',
            'Pangoblin': '&#xe1102;',
            'BONK': '&#xe1103;',
            'Kleave': '&#xe1104;',
            'Swift': '&#xe1105;',
            'unlit-bomb': '&#xe1106;',
            'Plasma': '&#xe1107;',
            'Cult-of-the-Vault-Potion-It-Radiates-Money': '&#xe1108;',
            'Cult-of-the-Marcus-Potion-Cooler': '&#xe1109;',
            'Cult-of-the-Dragon-Potion': '&#xe110a;',
            'Handsome-Potion': '&#xe110b;',
            'A-Harmless-Potion': '&#xe110c;',
            'Cure-Hangover-Potion': '&#xe110d;',
            'Moxxi-Potion': '&#xe110e;',
            'TinaPotion': '&#xe110f;',
            'armor': '&#xe1110;',
            'health': '&#xe1111;',
            'heartbeat': '&#xe1112;',
            'heart': '&#xe1113;',
            'shield': '&#xe1114;',
            'magic-swirl': '&#xe1115;',
            'Barrel': '&#xe1116;',
            'skull-burn': '&#xe1117;',
            'skull': '&#xe1118;',
            'Incendiary': '&#xe1119;',
            'Incendiaradiation': '&#xe111a;',
            'Radiation': '&#xe111b;',
            'Shock': '&#xe111c;',
            'Corroshock': '&#xe111d;',
            'Corrosion': '&#xe111e;',
            'Cryo': '&#xe111f;',
            'ExplosivCryo': '&#xe1120;',
            'Explosive': '&#xe1121;',
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
                if (/font/.test(classes)) {
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
