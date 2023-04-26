---
aliases: ["Stabbomancer Pinpoint Strike"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 1
supgrade: 0
title: Pinpoint Strike
---

# Pinpoint Strike
Your first *Melee* **Attack** each Encounter is a Natural **20**.

**+** *`=this.slevel`* **ACC**.

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress style='margin: auto' value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
