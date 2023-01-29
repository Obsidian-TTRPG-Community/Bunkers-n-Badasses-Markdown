---
alias: ["Stabbomancer Executioner's Blade"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 1
supgrade: 0
title: "Executioner's Blade"
---

# Executioner's Blade
When you *Crit*, roll `dice: 1d20`(1d20).

On a **16** *+*, deal **+** *`=this.slevel`* *Melee* Die of *Bonus* **Damage**.

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress style='margin: auto' value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`