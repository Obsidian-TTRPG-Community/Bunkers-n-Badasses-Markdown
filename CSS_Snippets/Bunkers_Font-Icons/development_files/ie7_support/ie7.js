/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Bunkers\'">' + entity + '</span>' + html;
	}
	var icons = {
		'fontUnarmedicon': '&#xe1100;',
		'fontValoraicon': '&#xe1101;',
		'fontPangoblinicon': '&#xe1102;',
		'fontBONKicon': '&#xe1103;',
		'fontKleaveicon': '&#xe1104;',
		'fontSwifticon': '&#xe1105;',
		'fontunlit-bombicon': '&#xe1106;',
		'fontPlasmaicon': '&#xe1107;',
		'fontCult-of-the-Vault-Potion-It-Radiates-Moneyicon': '&#xe1108;',
		'fontCult-of-the-Marcus-Potion-Coolericon': '&#xe1109;',
		'fontCult-of-the-Dragon-Potionicon': '&#xe110a;',
		'fontHandsome-Potionicon': '&#xe110b;',
		'fontA-Harmless-Potionicon': '&#xe110c;',
		'fontCure-Hangover-Potionicon': '&#xe110d;',
		'fontMoxxi-Potionicon': '&#xe110e;',
		'fontTinaPotionicon': '&#xe110f;',
		'fontarmoricon': '&#xe1110;',
		'fonthealthicon': '&#xe1111;',
		'fontheartbeaticon': '&#xe1112;',
		'fonthearticon': '&#xe1113;',
		'fontshieldicon': '&#xe1114;',
		'fontmagic-swirlicon': '&#xe1115;',
		'fontBarrelicon': '&#xe1116;',
		'fontskull-burnicon': '&#xe1117;',
		'fontskullicon': '&#xe1118;',
		'fontIncendiaryicon': '&#xe1119;',
		'fontIncendiaradiationicon': '&#xe111a;',
		'fontRadiationicon': '&#xe111b;',
		'fontShockicon': '&#xe111c;',
		'fontCorroshockicon': '&#xe111d;',
		'fontCorrosionicon': '&#xe111e;',
		'fontCryoicon': '&#xe111f;',
		'fontExplosivCryoicon': '&#xe1120;',
		'fontExplosiveicon': '&#xe1121;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/font[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
