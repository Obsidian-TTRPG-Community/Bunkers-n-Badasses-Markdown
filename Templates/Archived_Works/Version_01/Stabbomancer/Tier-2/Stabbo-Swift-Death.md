---
alias: ["Stabbomancer Swift Death"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# Swift Death

When you *Move*, your next *Attack* gains __+`= this.supgrade + this.slevel`__ Damage.

__+__ *`= this.supgrade + this.slevel`* to *Traverse* __Checks.__

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`