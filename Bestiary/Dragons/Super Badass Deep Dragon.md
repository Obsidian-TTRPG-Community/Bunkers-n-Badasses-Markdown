---
aliases: [Super Badass Deep Dragon]
cover: 
created: +002023-03-27 1002
description: 
image: 
permalink: 
publish: true
tags: [BnB/Homebrew/Bestiary/Dragon]
updated: +002023-05-11 1947
---

## Statblock

```statblock
# Layouts until other style of releases should be BunkersBestiary
layout: BunkersBestiary
source: Bunkers-Example
dice: true
# If Its a Badass or a SuperBadass, make sure to put that First… Badass Potion Master… SuperBadass Treant
Token: "[[Dragon-Deep.png]]"
Name: "Super Badass Deep Dragon"
# "Landshark."
Type: "Dragon."
# Title of the Boss here, like King of the Hill or Wakisobi
TitleOfMob: "Cruncher of Rocks"
# Flavor Text Here such as Really Loves Fish
FlavorText: "Rocks means your bones actually"
# Miniboss, NPC, Made-Up Boss…
TypeOfBoss: "Miniboss"
# Self Explanatory, right? What is its BR
BadassRank: 63
# Options are move, flight, swim, burrow, teleport, hover, leap, climb, 
MovementType: "move 4 flight 6"
# Hitpoints
Health: "200"
# Shield Points
Shield: 150
# Armor Points
Armor: 100
# Any existing Traits. Want to randomize it? Add Random, Random 2, or Random 3. 
Traits: "Large. Chubby. Explosive. Dargon."
# What weapon does it use?
Weapon: "Breath +6. Bite +6"
# Any special stuff we ought to know?
Special: "If the [[dragon]] gains any elemental traits upon starting the encounter, it will gain elemental aura with a range of three squares, dealing 2d6 (2d6) elemental trait damage to all creatures besides itself per turn."
# Super_Special is for use with some weird entities like Potion Master and some Bosses. Usually leave the name blank as "".
SuperSpecial: "___Fixation___: After performing an Air Bite the Dragon will become fixated on the target for two turns, and will pursue the target up to its maximum flight speed per turn."
# Main Actions. Leave Empty if None
Actions:
- name: Breath Missiles
  desc: "The dragon snorts out 2 breath missiles from it's nostrils that target the nearest two players who are not in full cover. The missiles move at the speed of dragon's teleport. __If the missiles connect to their target(s)__, they deal 1d20 (1d2) Cryoshock damage and apply [[BnB-Slow|Slow]]."
- name: Bite
  desc: "If Landed, the Dragon charges up to 1d3 (1d3) squares and _Bites_ up to 2 adjacent targets for 2d10+3 (3d10+3) Damage per Bite."
- name: Air Nibble
  desc: "If flying and adjacent to 1 target, the Dragon nibbles that one target for 2d10 (1d10) Damage. The dragon has a 1d4 (1d4) chance of following the target next turn."
# Mayhem Actions. Leave Empty if None
Mayhem: 
- name: Deep Breath
  desc: "The dragon exhales a deep breath of in a seven square cone in front of it, dealing 7d6 (7d6) Cryoshock damage. This ability costs two mayhem points." 
- name: Air Bite
  desc: "If flying and adjacent to 1 target, the Dragon bites that one target for 4d10 (4d10) Damage. The dragon enter ___[[BnB-fixation|Fixation]]___."
# Does this Entity Carry Super Special Loot? Leave Empty if None
Loot:
 - name: A Purple Scale
   desc: "This Deep Dragon was carrying a strange, purple scale, embossed with a series of scratches."
# Does this Entity Have an Image? Accepts Wikilink or Markdown Link. Leave Empty if None
Image: "[Show to Players](Dragon-Deep.png)"
```
^BnBBestiarySBDeepDragon
