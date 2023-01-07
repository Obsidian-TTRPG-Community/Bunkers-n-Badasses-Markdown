# Skill Trees Readme

![Stabbomancer Skill Tree](Character-Sheets/Stabbomancer/Stabbo-Skill-Tree.png)

## Required Obsidian Core Plugins

- Obsidian Canvas

## Required Obsidian Community Plugins

- [Dataview](https://blacksmithgu.github.io/obsidian-dataview/)

## Optional Obsidian Community Plugins

- Any metadata editing plugin like Metaedit.
- [Database Folder](https://blacksmithgu.github.io/obsidian-dataview/) would be very awesome here as well.
- Any Folder Note plugin

## Currently Available Functionality

Stabbomancer Skill Tree in Canvas. Class courtesy of [Scout's BnB DLC3](https://docs.google.com/document/d/1MLOgrWwcLNTnP9PuXrKiLImy7SUh4hXO8arVUAlmdp0/edit)

## How to Install

1. Take one of the named folders in the Character-Sheets folder, such as "Stabbomancer", and all of its contents, and download them into your vault.
2. From there, open the file Stabbo-Skill-Tree to view the skill tree.

## How to edit the Skill Tree to Update Skill Level Points

1. Click on a card until it allows you to edit text
2. Change the value of the card's `slevel` number from 0 to 1, or 1, to 2, or 2, to 3, until you reach your desired skill level points.
3. Click away from the card.
4. The card's text should auto-refresh and reflect the updated stats the character now gets.
5. Sometimes Obsidian's cache lags depending upon what other plugins you have installed. If so, you may have to close the canvas note and re-open it.

## The Dataview Functions Used

### YAML Keys

`slevel:` This is the current skill point level
`slevelmax:` This is the max skill point level for that talent
`slevelupgrade:` This is a flexible key I use to help me do calculations.

### The Functions

These are the most common functions used.

`= this.supgrade + this.slevel`
This is used most commonly for the skills that go up once per Skill Level.

`$= const output = dv.current().slevel === 3 ? "Gain **One** *Extra* Melee Attack each turn." : "**No** *Extra Attack* Each Turn."; output`
This is used to change the text displayed depending on how many numbers are in the slevel key. In this case, if s.level is 3, then the text will change to indicate that the player can now gain one extra melee attack per turn. Else, no extra attacks.

`$= const value = Math.round((dv.current().slevel / dv.current().slevelmax) * 3); const output = "<progress style='margin: auto' value='" + value + "' max='3'></progress>"+ "\n" + "<i>" + value + "</i>" + "<b>" + " Skill Level" + "</b>" + (value === 1 ? "" : "<b>" + "s" + "</b>");output`
This is used at the end of every talent to reflect how many skill points are selected and create a progress bar. Some variations of these have a max of 1 to reflect the 1 skill point.

## Changlog

1. 1.0 - Release of Stabbomancer Canvas Skill Tree, with full "automated" functionality of updating stats based on value of slevel. Buttons will come later after a fix is completed in another plugin.
