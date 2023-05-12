---
aliases: ["Stabbomancer Contagion"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
title: Contagion
---

# Contagion
Your *Elemental* **Damage** gains **+** *`= this.supgrade + this.slevel`* *Splash* **Damage**

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
