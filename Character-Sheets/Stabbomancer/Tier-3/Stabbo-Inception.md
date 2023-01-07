---
alias: ["Stabbomancer Inception"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
slevelmax: 3
supgrade: 0
---
# Inception

Increase the *duration* of __[[Ghost-Blade|Ghost Blade]]__ by *`= this.supgrade + this.slevel`*.

__+__ *`= this.supgrade + this.slevel`* to *Search* __Checks.__

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`