---
alias: ["Stabbomancer Elusive"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 1
supgrade: 1
---
# Elusive

`$= const output = dv.current().slevel === 1 ? "Gain *Extra Movement* each turn." : "No *Extra Movement* each turn."; output`

__+__ *`$= const value = dv.current().slevel === 0 ? 0 : 2; value;`*  __SPD.__

__`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + " Skill Level" + (value === 1 ? "" : "s");output`__