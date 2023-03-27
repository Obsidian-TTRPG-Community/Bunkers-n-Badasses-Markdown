---
alias: ["Stabbomancer Fast Mouth"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
title: Fast Mouth
---

# Fast Mouth
**+** *`= this.supgrade + this.slevel`* to **Initiative.**

**+** *`= this.supgrade + this.slevel`* to *Talk* **Checks.**

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
