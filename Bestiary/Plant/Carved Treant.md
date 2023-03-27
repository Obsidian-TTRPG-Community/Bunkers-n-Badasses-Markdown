---
ac: 0
alias: [Carved Treant]
cr: 11
hp: 100
modifier: 
statblock: inline
tags: BnB/Homebrew/Bestiary/Plant
title: "Carved Treant
---

## Statblock
```statblock
# Layout is needed to force the Bunkers Layout
layout: BunkersBestiary
# Source helps the Bestiary Organize the Entity
source: Bunkers-Plants
# Ensures Dice Rolls Turned on even if Off Elsewhere
dice: true
# Entity Stats
Name: Carved Treant
Type: "Treant."
# Boss/Subtitle Sttuff Below

TitleOfMob: 
FlavorText: 
TypeOfBoss: 

BadassRank: 11
# Use move, swim, fly, hover, leap, climb, or swim + number i.e., swim 3 fly 4 hover 5 move 1
MovementType: move 3
# Will automatically switch to N/A if Empty
Health: "70"
Shield: 
Armor: "30"
Traits: [[Wood]]. [[Large]]. 
Weapon: Branches.
Special:
SuperSpecial:
Actions:
- name: Ground Slam
  desc: "Carved Treant slams the ground with its trunk, dealing 12 (2d12) Damage to all adjacent targets."
- name: Orbs
  desc: "Carved Treant releases __8__ blue orbs that seek out targets within 3 squares, dealing 3 (1d6) Shock Damage each."
- name: Eat Branch
  desc: "___Requires Depleted Armor___. Carved Treant attempts to eat a nearby branch. If it does not receive 10 (1d20) damage by the start of its next turn, it will succeed and restore 10 (1d20) Shield Ward. It can still fight while chewing."
Mayhem: 
- name: Bramble
  desc: "CarvedTreant pushes 3 branches into the ground that sprout up to 2 squares away and turn into fully grown plants in 1 turn. Once fully grown, the plants explode when any target is adjacent, dealing 6 (2d6) Corrosive Damage."
- name: Ground Slam x2
  desc: "Carved Treant slams the ground with its trunk twice, dealing 12 (2d12) Damage per slam to all adjacent targets."
ImageBig: "[[Carved-Treant.png|Show to Players]]"
```
