---
alias: ["Stabbomancer Daywalker"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# Daywalker

When you deal *Melee* __Damage__, gain __+__ *`= this.supgrade + this.slevel`d4* __Health__.

__+__ *15* __Shield__ *Capacity.*

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
