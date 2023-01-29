---
alias: ["Stabbomancer Executioner's Blade"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
title: "Executioner's Blade"
---

# Executioner's Blade
> `$=const slevel = dv.current().slevel; dv.span(slevel);` / 1

When you Crit, roll `dice: 1d20`(1d20). On a **16** *+*, deal **+** `$=const slevel = dv.current().slevel; dv.span(slevel);` MeleeDie of *Bonus* Damage.

```dataviewjs
const {createButton} = app.plugins.plugins["buttons"];
const update = this.app.plugins.plugins["metaedit"].api.update;

// Creating Decrease button
if (dv.current().slevel === 1){
    createButton({
        app,
        el: this.container,
        args: {name: "-1 SL"}, 
        clickOverride: {click: update, params: ['slevel', 0, dv.current().file.path]}
    })
} else if (dv.current().slevel === 0){
    createButton({
        app,
        el: this.container,
        args: {name: "Min"}, 
        clickOverride: {
            click: function(){},
            params: []
        }
    });
}
// Creating Increase Button
if (dv.current().slevel === 0){
    createButton({
        app,
        el: this.container,
        args: {name: "Unlock Skill"}, 
        clickOverride: {click: update, params: ['slevel', 1, dv.current().file.path]}
    })
} else if (dv.current().slevel === 1){
    createButton({
        app,
        el: this.container,
        args: {name: "Max"}, 
        clickOverride: {
            click: function(){},
            params: []
        }
    });
}
```