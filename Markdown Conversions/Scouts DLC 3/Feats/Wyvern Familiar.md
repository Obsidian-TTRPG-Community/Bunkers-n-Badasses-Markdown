---
aliases: ["Wyvern Familiar"]
cover: 
created: 2023-05-09
description: 
image: 
permalink: bnb/scout/dlc-3/feat/wyvern-familiar
publish: true
tags: [BnB/Homebrew/Feats/Psycho]
updated: 2023-05-11
---

> [!skill] Wyvern Familiar
> **Requires**: [[Clawbringer]]
> Details:: You gain a Wyvern Familiar that deals `dice: 1d6` Incendiary Damage to any Target it flies past. If it dies, it respawns at the end of the Encounter.
> Source:: [Scout's B&B DLC 3: Into the Wonderlands](https://docs.google.com/document/d/1MLOgrWwcLNTnP9PuXrKiLImy7SUh4hXO8arVUAlmdp0/edit)

## Statblock


```statblock
layout: BunkersFamiliar
Name: Wyvern Familiar
Type: Dragon
Health: 20
Health-Regen: "+0"
movement:
MovementType: flight 5
Weapon: "__Breath Weapon__"
Special: "If Wyvern Familiar dies, it respawns at the end of the Encounter."
Actions:
  - name: "Incendiary Breath"
    desc: "When the Wyvern flies by a target, it deals 1d6 (1d6) incendiary damage and 0d0 (0d0) shock damage to it."
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

ImageBig: [[baby-wyvern.png]]
```

### Codeblock

````yaml
```statblock
layout: BunkersFamiliar
Name: Wyvern Familiar
Type: Dragon
Health: 20
Health-Regen: "+0"
MovementType: flight 5
Weapon: "__Breath Weapon__"
Special: "If Wyvern Familiar dies, it respawns at the end of the Encounter."
Actions:
  - name: "Incendiary Breath"
    desc: "When the Wyvern flies by a target, it deals 1d6 (1d6) incendiary damage and 0d0 (0d0) shock damage to it."
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

ImageBig: [[baby-wyvern.png]]
```
````

> [!inline-meta]- Metadata
> sourceurl:: [Scout's B&B DLC 3: Into the Wonderlands](https://docs.google.com/document/d/1MLOgrWwcLNTnP9PuXrKiLImy7SUh4hXO8arVUAlmdp0/edit)
> **tags**::
