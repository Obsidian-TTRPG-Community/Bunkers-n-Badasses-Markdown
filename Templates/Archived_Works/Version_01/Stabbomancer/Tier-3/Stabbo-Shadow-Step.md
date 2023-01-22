---
alias: ["Stabbomancer Shadow Step"]
cssclass: 
slevel: 0
slevelmax: 1
supgrade: 0
---
# Shadow Step

When you __kill__ a Target, your next *Melee* __Attack__ gains *`=this.slevel`* __Crit__ Dice.

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress style='margin: auto' value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`