---
aliases: ["Encounters: Enemies"]
cover: 
created: 1319-02-07
description: 
image: 
permalink: 
publish: false
tags: [BnB/Bunkermaster/Enemies]
updated: 2023-06-02
---

## Enemies

Every good story needs to provide some obstacles for its heroes. Enemies are the walking, talking, face-stabbing obstacles of Bunkers & Badasses. They exist to challenge your players and force them to adapt; they exist to beat your players down, so they can pick themselves back up. 

Don't be afraid to make these Enemies as brutal and unforgiving as possible: it'll make your players feel that much better when they end up vanquishing them.

>[!statblock-BnB] Anatomy of an Enemy Stat Block
> **NAME**  
> Name of the specific Enemy. Example: Bandit.
>
> **ENEMY TYPES** 
> **Example**: Cultist.
>
> **BADASS RANK (BR)**  
> Each Enemy will have a Badass Rank which will determine Battle Order. This also influences Loot Pile Generation.
>
> **MOVEMENT**  
> The number of squares they can move in a turn. Some Actions grant Extra Movement, which means they can move again, up to the squares listed.
> 
> **HEALTH**  
> The Health value of the Enemy. This can either be a specific number or a set of dice that are rolled when the Enemy is spawned into an encounter.
>
> **SHIELD/ARMOR**  
> Some Enemies have Shields and some have Armor. They work exactly the same: both deplete before Health is impacted. The only difference is that Shields are susceptible to Shock, while Armor is susceptible to Corrosive. Enemy Shields do not Recharge.
>
> **WEAPONS**  
> This indicates the weapon an Enemy is using.
> 
> **TRAITS**  
> This clarifies body composition (such as Flesh or Armored) which indicates which Elements they are most susceptible to. If an Enemy is Large, that will be listed here as well, which means they take up 4 map squares (2 x 2).
>
> **SPECIAL RULES**  
> Any extra information and modifiers to any stats or abilities will be listed here.
>
> **ACTIONS**  
> Each turn, Enemies take 1 Action chosen by the BM. These will mostly be Attacking, moving closer, or taking Cover.
>
> **MAYHEM ACTIONS**  
> When the BM spends Mayhem on Enemy Actions, all Enemies will get a chance to perform their Mayhem Actions. These are beefier Actions that include strong Attacks and special abilities that may only trigger if certain conditions are met.

## Fantasy Statblocks

```statblock
layout: Basic BnB Bestiary Layout
dice: true
source: BnB-Sourcebook
Name: Bandit
Type: Cultist.
BadassRank: 3
MovementType: move 4
Health: 20
Shield: 
Armor: 
Traits: Flesh.
Weapon: Throwing Knives
Special: If there is only one Bandit left (no other Enemies), the Bandit will attempt to flee back to their safe house or hut or trash bin. On the turn they attempt to flee, they gain Extra Movement.
Actions:
- name: Knife Throw
  desc: "Bandit throws 2 knives, dealing  4 (2d4) damage per knife."
- name: Take Cover
  desc: "Bandit attempts to find Cover behind an adjacent structure to stop being wounded."
Mayhem: 
- name: Blind Fire
  desc: "If Bandit is in Cover, they throw blindly twice, reducing their Attack Roll by 2. Deals 5 (2d4+1) Damage per knife if they Hit."
- name: Lob
  desc: "If Bandit is in Cover, they will toss a grenade at a target, dealing 5 (1d8+3) Damage to all adjacent targets."
```
