---
alias: ["Stabbomancer Sneak Attack"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# Sneak Attack

__+__ *`= this.supgrade + this.slevel`* *Crit* __Damage.__

__+__ *``$= const value = dv.current().slevel === 0 ? 0 : 1; value;``* __DMG.__

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`