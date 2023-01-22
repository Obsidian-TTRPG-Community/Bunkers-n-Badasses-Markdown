---
alias: ["Stabbomancer Knife in the Dark"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# Knife in the Dark

__Ghost Blade__ gains __+__ *`=this.slevel + this.supgrade`* __Crit__ Dice.

__+__ *1* __MST.__

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress style='margin: auto' value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`