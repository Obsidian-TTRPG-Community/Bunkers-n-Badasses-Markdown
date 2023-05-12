---
aliases: ["Stabbomancer Haste"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
title: Haste
---

# Haste
**+** *`= this.supgrade + this.slevel`* to **Movement.**

`$= const output = dv.current().slevel === 3 ? "Gain **One** *Extra* Melee Attack each turn." : "**No** *Extra Attack* Each Turn."; output`

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
