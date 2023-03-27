---
alias: ["Stabbomancer Elusive"]
class: Assassin
cssclass: 
skilltree: Stabbomancer
slevel: 0
title: Elusive
---

# Elusive
> `$=const slevel = dv.current().slevel; dv.span(slevel);` / 1

`$= const output = dv.current().slevel === 1 ? "Gain Extra Movement each turn." : "No Extra Movement each turn."; output`

- `$= const value = dv.current().slevel === 0 ? 0 : 2; value;` SPD

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