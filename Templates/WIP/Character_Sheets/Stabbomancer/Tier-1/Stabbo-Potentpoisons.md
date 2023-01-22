---
alias: ["Stabbomancer Potent Poisons"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# Potent Poisons

__+__ *`= this.supgrade + this.slevel`* to *Elemental* __Damage.__

__+__ *`= this.supgrade + this.slevel`* to *Interact* __Checks.__

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
