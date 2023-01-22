---
alias: ["Stabbomancer A Thousand Cuts"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# A Thousand Cuts

When you deal *Melee* or *Crit* __Damage__ to a __Target__, they take __+__ `$= const value = dv.current().slevel === 0 ? 0 : dv.current().slevel * 2; const output = "*" + value + "*"; output;` *Bonus* __Damage__ for *`= this.supgrade + this.slevel`* Turn(s) from all sources.

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`