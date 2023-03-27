---
alias: ["Stabbomancer Knife in the Dark"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
title: Knife in the Dark
---

# Knife in the Dark
**Ghost Blade** gains **+** *`=this.slevel + this.supgrade`* **Crit** Dice.

**+** *1* **MST.**

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress style='margin: auto' value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`