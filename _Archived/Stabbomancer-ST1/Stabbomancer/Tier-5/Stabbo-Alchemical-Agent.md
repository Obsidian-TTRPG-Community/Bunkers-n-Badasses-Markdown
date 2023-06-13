---
aliases: ["Stabbomancer Alchemical Agent"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 1
supgrade: 0
title: Alchemical Agent
---

# Alchemical Agent
Each *Melee* **Attack** gains **+** `=this.slevel` *Melee* Die of a random *Element*.

| `dice: 1d6` | Element    | 1d6 | Element   |
| ----------- | ---------- | --- | --------- |
| 1           | Incendiary | 4   | Cryo      |
| 2           | Shock      | 5   | Radiation |
| 3           | Corrosive  | 6   | Explosive          |

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress style='margin: auto' value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
