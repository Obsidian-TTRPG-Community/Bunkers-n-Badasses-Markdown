---
alias: ["Stabbomancer Shadow Step"]
cssclass: 
slevel: 0
slevelmax: 1
supgrade: 0
title: Shadow Step
---

# Shadow Step
When you **kill** a Target, your next *Melee* **Attack** gains *`=this.slevel`* **Crit** Dice.

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress style='margin: auto' value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`