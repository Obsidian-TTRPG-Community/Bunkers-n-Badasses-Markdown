---
ac: 
cr: 4
hp: 100
name: Constructor Bot
modifier: 1
aliases: [Constructor Bot]
description: 
obsidianUIMode: preview
permalink: 
publish: false
statblock: true
statblock-link: "#^statblock"
---

> [!statblock-bnb] Constructor Bot
> *Pride of Hyperion, Creator of Things, Robot.*
> ---
> | 4 | 4 Squares | **Health**: 100<br />**Shield**: 50<br />**Armor**: 50<br />**Traits**: Repair. |
> | ----------- | -------- | ----- |
>
> **Weapon**: N/A
> **Special**: At the start of the fight, and for every three turns, the Badass Constructor Bot can digistruct 2 Loaders and 1 Surveyor to fight alongside it, up to a maximum of 6 Loaders and 2 Surveyors at a time.
> Once per encounter, Constructor Bot can use its mobile factory to repair itself or any of its allies by `dice: 2d20` of their maximum health.
> ---
> ## Actions
> ***Stomp***
> Constructor Bot stomps on a target within 2 squares, dealing `dice: 2d6+4` damage.
>
> ***Ventral Blast***
> The Constructor Bot activates its exhaust vent, releasing a fog of steam its ventral region. It targets a 3-square area, dealing `dice: 2d8+4` damage to all enemies within the area. The blast has a chance to disrupt enemy visibility, reducing their accuracy by 2 for 2 turns.
>
> ***Disruptive Pulse***
> The Constructor Bot emits a powerful Disruptive Pulse, targeting all creatures within 3 squares. The pulse deals `dice: 1d8+4` damage to each target, and has a `dice: 1d100` percent change to temporarily disable their disable their action skill for one turn.
>
>
> ### Mayhem
> ***Plasma Vent***
> The Badass Constructor Bot activates its plasma vent, releasing a scorching blast of plasma from its ventral region. It targets a 3-square area, dealing `dice: 4d8+8` plasma damage to all enemies within the area. The blast has a chance to disrupt enemy systems, reducing their accuracy by 4 for 2 turns.
>
> ***Repair Mode***
> Constructor Bot enters Repair Mode, restoring 20% of its health per turn for the next `dice: 1d4` turns.
>
> ***Assembly Line***
> Constructor Bot digistructs a wave of 4 Loaders, which will fight alongside it until destroyed. Each Loader has `dice: 2d20` health.
^statblock

%%
```statblock
columns: 1
layout: Basic BnB Bestiary Layout
source: Bunkers-Machines
Name: "Constructor Bot"
Type: "Robot."

TitleOfMob: 
FlavorText: 
TypeOfBoss: 

BadassRank: "4"
MovementType: "move 4"
Health: "100"
Shield: "50"
Armor: "50"
Traits: "Repair."
Weapon: "Repurposed Loaders"

Special: "At the start of the fight, and for every three turns, the Constructor Bot can digistruct 1 Loader and 1 Surveyor to fight alongside it, up to a maximum of 4 at a time."
SuperSpecial: "Once per encounter, Constructor Bot can use its mobile factory to repair itself or any of its allies by 20 (2d20) of their maximum health."

Actions:
- name: Stomp
  desc: "Constructor Bot stomps on a target within 2 squares, dealing 10 (2d6+4) damage."
- name: Ventral Blast
  desc: "The Constructor Bot activates its exhaust vent, releasing a fog of steam its ventral region. It targets a 3-square area, dealing 12 (2d8+4) damage to all enemies within the area. The blast has a chance to disrupt enemy visibility, reducing their accuracy by 2 for 2 turns."
- name: Disruptive Pulse
  desc: "The Constructor Bot emits a powerful Disruptive Pulse, targeting all creatures within 3 squares. The pulse deals 8 (1d8+4) damage to each target, and has a 50 (1d100) percent change to temporarily disable their disable their action skill for one turn."

Mayhem: 
- name: Repair Mode
  desc: "Constructor Bot enters Repair Mode, restoring 10% of its health per turn for the next 2 (1d4) turns."
- name: Assembly Line
  desc: "Constructor Bot digistructs a wave of 4 Loaders, which will fight alongside it until destroyed. Each Loader has 20 (2d20) health."
ImageBig: ""
```
%%


> [!reference]-
> **Tags**:: #Bestiary/Robots/Constructors #Worldbuilding/Multiverse/Borderlands
