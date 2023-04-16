---
alias: ["Stabbomancer Elusive"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 1
supgrade: 1
title: Elusive
---

# Elusive
`$= const output = dv.current().slevel === 1 ? "Gain *Extra Movement* each turn." : "No *Extra Movement* each turn."; output`

**+** *`$= const value = dv.current().slevel === 0 ? 0 : 2; value;`*  **SPD.**

**`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1); const output = "<progress value='" + value + "' max='1'></progress>"+ "\n" + "<i>" + value + "</i>" + " Skill Level" + (value === 1 ? "" : "s");output`**

`$=const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 1);output`