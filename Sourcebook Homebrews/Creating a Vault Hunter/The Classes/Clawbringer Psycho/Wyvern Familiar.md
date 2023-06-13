---
aliases: ["Wyvern Familiar"]
cover: 
created: 1319-02-07
description: 
image: 
permalink: bnb/scout/dlc-3/feat/wyvern-familiar
publish: true
tags: []
updated: 2023-06-02
---

````ad-statblock-bnb
Wyvern Familiar
**Details**:: You gain a Wyvern Familiar that deals `dice: 1d6` Incendiary Damage to any Target it flies past. If it dies, it respawns at the end of the Encounter.
**Source**:: [Scout's B&B DLC 3: Into the Wonderlands](https://docs.google.com/document/d/1MLOgrWwcLNTnP9PuXrKiLImy7SUh4hXO8arVUAlmdp0/edit)
**Tags**:: #BnB/Homebrew/Scout/DLC3 #BnB/Familiar #BnB/Homebrew/Feats/Psycho
**Tree**:: [[Clawbringer Psycho|Clawbring Psycho]]
---
```statblock
columns: 1
layout: Basic BnB Familiar Layout
Token: 
Name: Wyvern Familiar
Type: "Dragon Familiar."
Health: "10"
Regen: "10"
Shield: "0"
Charge: "0"
Armor: "0"
Repair: "0"
Traits:
MovementType: flight 5 teleport 2
Weapon: "__Breath Weapon__ +6"
Special: "If Wyvern Familiar dies, it respawns at the end of the Encounter."
Actions:
  - name: "Incendiary Breath"
    desc: "When the Wyvern flies by a target, it deals 3 (1d6+0) incendiary damage and 0 (1d0+0) shock damage to it."
Skills:
  - name: "Lay on Hands 0/3"
    desc: "Wyvern Familiar gains +5 Health Regen."
  - name: "Oath of Fire 0/3"
    desc: "Wyvern Familiar gains +2 Incendiary Damage per Skill Level."
  - name: "Path of Thunder 0/3"
    desc: "Wyvern Familiar gains +2 Shock Damage per Skill Level."
  - name: "Friend to Flame 0/3"
    desc: "Wyvern Familiar gains 2d6 (1d6) Damage per Skill Level."
  - name: "Explosive Return 0/3"
    desc: "When your Wyvern Familiar dies, it explodes, dealing 2d6 (2d6) Incendiary and Shock Damage per Skill Level to all adjacent Targets. The first time it does this each Encounter, it respawns immediately next to you."

Image: [[baby-wyvern.png]]
```
````

## Codeblock

````yaml
```statblock
columns: 1
layout: Basic BnB Familiar Layout
Token: 
Name: Wyvern Familiar
Type: "Dragon Familiar."
Health: "20"
Regen: "0"
Shield: "0"
Charge: "0"
Armor: "0"
Repair: "0"
Traits:
MovementType: flight 5
Weapon: "__Breath Weapon__"
Special: "If Wyvern Familiar dies, it respawns at the end of the Encounter."
Actions:
  - name: "Incendiary Breath"
    desc: "When the Wyvern flies by a target, it deals 1d6 (1d6) incendiary damage and 1d0 (0d0) shock damage to it."
Skills:
  - name: "Lay on Hands 0/3"
    desc: "Wyvern Familiar gains +5 Health Regen."
  - name: "Oath of Fire 0/3"
    desc: "Wyvern Familiar gains +2 Incendiary Damage per Skill Level."
  - name: "Path of Thunder 0/3"
    desc: "Wyvern Familiar gains +2 Shock Damage per Skill Level."
  - name: "Friend to Flame 0/3"
    desc: "Wyvern Familiar gains 1d6 (1d6) Damage per Skill Level."
  - name: "Explosive Return 0/3"
    desc: "When your Wyvern Familiar dies, it explodes, dealing 2d6 (2d6) Incendiary and Shock Damage per Skill Level to all adjacent Targets. The first time it does this each Encounter, it respawns immediately next to you."

Image: [[baby-wyvern.png]]
```
````
