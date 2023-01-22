---
alias: ["Stabbomancer Now You See Me"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 1
supgrade: 0
---
# Now You See Me

When you activate __Ghost Blade__, *Cloak* until you __Attack__, throw a __Grenade__, or __Ghost Blade__ ends.

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress style='margin: auto' value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`