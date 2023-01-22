---
alias: ["Stabbomancer Fast Mouth"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# Follow-Up

When you deal *Gun* __Damage__, the next *Melee* __Attack__ before the end of your next Turn gets __+__ *`= this.supgrade + this.slevel`* __Damage__.

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`