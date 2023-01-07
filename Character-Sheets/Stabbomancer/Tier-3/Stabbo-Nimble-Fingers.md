---
alias: ["Stabbomancer Nimble Fingers"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# Nimble Fingers

When you deal *Melee* __Damage__, for *`= this.supgrade + this.slevel`* Turn(s), your *Gun* __Attacks__ gain __+__ *1* __Hit__ and your *Grenades* gain __+__ *1* __Damage__ Dice.

__+__ *`= this.supgrade + this.slevel`* to *Sneak* __Checks.__

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`