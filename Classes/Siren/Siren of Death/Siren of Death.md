---
aliases: ["The Siren of Death"]
cover: 
created: +002023-02-07 2321
description: "The Siren of Death is a Siren Skilltree that specializes in utilizing their own health and the life energy of their environment and enemies to power their abilities."
image: 
permalink: 
publish: true
tags: [BnB/Playtest]
updated: +002023-05-11 2242
---

## The Siren of Death

*Requires [[Affinity of the Siren]]*

| Holder  | Figurehead | Manifestation                                                                         | Sphere  |
|---------|------------|---------------------------------------------------------------------------------------|---------|
| Unknown | Protection | [[../../../../Wyrmscriber/Multiverse/Draleimshí%20Véní/Genus/Shuna/Shuna.md\|Dragon]] | Balance |

*In another time and reality, it was rumored that an ancient Siren warned those who would listen not to seek out the seventh Siren. In my reality, however, no such warning was ever given, and the seventh Siren was discovered just like the others and thought to be one of the six. Perhaps that is why things are happening the way they are now, and why we hunt for **them**.*

>[!warning] This Skill Tree is Now Undergoing Play testing.

### Summary

The Siren of Death is a being of fable and fairy tale due to their holders never being fully human, who are closely tied to the forces of death and mortality. They are often portrayed as a dark and ominous figure, feared and respected by those who encounter them. However, even with their association with death, the Siren of Death is not viewed in these tales as evil, but rather is seen as a necessary aspect of the cycle of life and death. You still never want to see them arrive at your doorstep though!

Outside the myth, The Siren of Death is a primordial of nature. They are highly skilled in the arts of magic and the arcane, including the use of necromancy, and are rumored to possess powerful psychic abilities as well. They also possess a range of abilities at their disposal that allow them to control and manipulate the speed of death itself, which has made them an enemy of [The Siren of Time](../Siren%20of%20Time/Siren%20of%20Time.md).

Although these Sirens are seemingly steeped in the realm of Death, the Siren of Death is not immune to the forces of life, and can be swayed by the motivations and circumstances of those who seek their aid. It is through this they have earned a reputation as a protector of life the ages of old, before the affinity faded into obscurity.

### Stat Modifiers

Favored-Gun:: Shotgun or Submachine Gun
Accuracy:: +1 
Damage:: +1 
Speed:: +2
Mastery:: +0
Melee-Die:: 1d6
Action-Skill:: [[Entropic Blast]]
Backgrounds:: Refer to the Backgrounds found in the [[Siren]] section.

### Abilities of the Siren of Death

Five categories splits abilities between usages; Defensive, Martial, Passive, Restorative, and Supportive.

- Defensive types can be used once per encounter, and rarely, once per day.
- Martial types are used up to the MST Mod per encounter. Some incur Mayhem points if used.
- Passive types are always active.
- Restorative types can only be used once per day.
- Supportive types have more generic, and have specific stipulations in their usage.

> [!excerpt] Lore 
> In the world *lore*, these sub-abilities are unique to each Siren of Death and are not possessed by other Sirens. For a campaign and game development though, we sadly must have some standardization.

```dataview
table without id
link(file.path, title) as Name,
life-cost as Energy,
obtained as "Level Gained",
skill-type as Type,
details as Description
From #BnB/Classes/Siren/Death/Abilities 
sort Energy Desc
```

#### Passive Skills

![[Phase Harness#Phase Harness]]

![[Spectral Sight#Spectral Sight]]

### Skill Tree

| Tier | **Tier 1 Skills**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Max Points |
|------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1a   | Sharp Claws         | Adds 1 MST (Martial Skill Tree) usage to all Martial Abilities per S/L (Skill Level).  Grants Fight for your Life.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 3          |
| 1b   | Grave Digger        | Increases damage dealt with favored guns by 1 Mod (modifier) per point. Grants Fight for your Life.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | 3          |
| 1c   | Grave Shaman        | Increases the damage dealt with elemental guns. Roll `dice: 1d6`+MST per S/L to determine the increase in damage. Grants Fight for your Life.                                                                                                                                                                                                                                                                                                                                                                                                                                     | 3          |
| 1d   | Death Brings Life   | When the Siren of Death enters Fight for Your Life, they bestow a blessing upon their allies. Allies within 5 squares gain the ability to take an extra action on their turn during the Siren's next turn. This ability can only be used once per encounter. Grants Fight for your Life.                                                                                                                                                                                                                                                                                          | 1          |
|      | **Tier 2 Skills**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |            |
| 2a   | Swift Strikes       | Killing an enemy with a melee attack or a favored gun grants a temporary boost in damage dealt with all weapons. Roll `dice: 1d6`+MST per S/L to determine the increase in damage. This effect lasts for 1 turn per S/L.                                                                                                                                                                                                                                                                                                                                                          | 3          |
| 2b   | Battle Harvest      | After killing an enemy or assisting in killing an enemy, gain `dice: 1d6`+MST per S/L increased gun damage your next turn.                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 3          |
| 2c   | Spirit Tendrils     | Killing an enemy with an elemental gun has a `dice: 1d4` chance to spawn a Spirit Tendril. Spirit Tendrils deal damage to nearby enemies and heal allies. The damage and healing are determined by `dice: 1d6`+MST per S/L.                                                                                                                                                                                                                                                                                                                                                       | 3          |
| 2d   | The Last Breath     | Upon entering Fight for Your Life, release a shockwave that deals `dice: 1d6` physical damage to adjacent enemies, and knocks them back 1 square.                                                                                                                                                                                                                                                                                                                                                                                                                                 | 1          |
|      | **Tier 3 Skills**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |            |
| 3a   | A Reaper's Touch    | Rolling a Natural 20 grants the Siren _A Reaper's Touch_. On their next Melee Attack, the Siren has a `dice: 1d4` chance of instantly killing the enemy. On bosses, this ability instead adds an additional `dice: 4d4` damage.                                                                                                                                                                                                                                                                                                                                                   | 1          |
| 3b   | Your Mortal Coil    | Hitting an enemy with a gun critical hit increases the accuracy of nearby allies by 1/SL for 1/SL turns.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 3          |
| 3c   | Elemental Kata      | Grants increased elemental gun damage and elemental effect chance. Roll `dice: 1d4` per S/L to determine the percentage increase in damage and effect chance.                                                                                                                                                                                                                                                                                                                                                                                                                     | 3          |
| 3d   | Plains of Death     | When entering Fight for Your Life, the Siren calls on the power of the realm of Death to engulf adjacent enemies in elemental gas, dealing `dice: 1d20` random elemental damage and applying [[Slow]].                                                                                                                                                                                                                                                                                                                                                                            | 1          |
|      | **Tier 4 Skills**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |            |
| 4a   | Deep Breath         | Increases the chance of triggering the instant kill effect of A Reaper's Touch by `dice: 1d4` per S/L. Also increases the damage dealt to bosses by `dice: 2d4` per S/L.                                                                                                                                                                                                                                                                                                                                                                                                          | 3          |
| 4b   | Guardian's Presence | Increase the maximum health and shield capacity of nearby allies by `dice: 1d10` per S/L.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 3          |
| 4c   | Eerie Resonance     | Elemental damage dealt by the Siren has a chance to inflict additional status effects on enemies. Roll `dice: 1d4` per S/L to determine the chance of inflicting a random elemental status effect (such as Burn, Shock, Corrode, or Freeze) on the target.                                                                                                                                                                                                                                                                                                                        | 3          |
| 4d   | Death's Embrace     | When revived at a Brew-U cauldron after failing Fight for your Life, gain 1 extra turn on your next Fight for your life.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | 1          |
|      | **Tier 5 Skills**   | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |            |
| 5a   | Protective Wings    | The Siren's abilities resonate with her allies, increasing their damage output. Whenever the Siren uses an ability that affects enemies, nearby allies gain a `dice: 1d4` bonus to damage for 1 turn.                                                                                                                                                                                                                                                                                                                                                                             | 1          |
| 5b   | Death's Gambit      | The Siren gains a `dice: 1d4` chance per SL to reflect incoming damage back at the attacker for 1 turn per SL. This ability has a cool down of 1 turn per SL.                                                                                                                                                                                                                                                                                                                                                                                                                     | 3          |
| 5c   | Wisdom of the Dead  | Grants increased resistance to all elemental damage. Roll `dice: 1d6` per S/L to determine the percentage increase in resistance.                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 3          |
| 5d   | Last Stand          | While in Fight for Your Life, gain increased movement speed by 1 Square and allow Shield Regen even when hit. Additionally, when you revive from Fight for Your Life, nearby allies gain +1 ACC and +1 DMG for the duration of combat.                                                                                                                                                                                                                                                                                                                                            | 1          |
|      | **Tier 6 Skill**    | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |            |
| 6    | Dragon of Death     | The Siren manifests into her Spectral Dragon form, dealing 4d6+MST damage to all adjacent enemies within 4 squares, and restoring `dice: 1d20` of her maximum health for each enemy killed. This ability can only be used once per combat encounter, costs 40 Life Energy, and grants _Form of the Dragon_ for the remainder of the fight. The dragon's form is able to use all existing Siren of Death abilities and weapons with an increased damage of +3 DMG/Siren Mod, and increased range of 2 squares. However enemy attacks gain +2 additional damage against the Dragon. | 1          |




### Affinity Feats
