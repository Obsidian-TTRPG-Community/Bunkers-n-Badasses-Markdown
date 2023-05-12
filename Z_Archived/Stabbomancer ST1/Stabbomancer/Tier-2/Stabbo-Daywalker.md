---
aliases: ["Stabbomancer Daywalker"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
title: Daywalker
---

# Daywalker
When you deal *Melee* **Damage**, gain **+** *`= this.supgrade + this.slevel`d4* **Health**.

**+** *15* **Shield** *Capacity.*

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
