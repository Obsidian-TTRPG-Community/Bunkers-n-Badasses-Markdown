---
alias: [PhaseHarness]
cssclass: 
filetype: ActionSkill
tags:
- BnB/BunkerMaster/Homebrew
- BnB/PC/Classes/Siren/Death/Abilities
title: PhaseHarness
---

# PhaseHarness
*Requires*: [The Siren of Death](../The-Siren-of-Death.md)

PhaseHarness allows the Siren of Death to absorb and harness the life energy of her surroundings, using it to fuel her powerful abilities. She can tap into this energy to enhance her strength and speed, or channel it into devastating attacks that can shatter her enemies. As she grows in power, her ability to harness this energy increases, allowing her to tap into more and more of it to unleash even greater destruction.

Max LE: 100
Passive Daily LE at 1: 10
Active Combat LE at 1: 5
Passive Daily LE at 30: 40
Active Combat LE at 30: 25

## Abilities Powered by PhaseHarness
>[!cards|dataview]
>
>```dataview
>Table Without ID
>	link(file.path, name) as Name,
>	lifeenergy as LE,
>	description as "Description"
>FROM #BnB/PC/Classes/Siren/Death/Abilities
>WHERE contains(sirenaffinity, "Death")
>SORT lifeenergy asc
>```
>

>[!abstract]- Action Skill Inline Metadata
> sourceurl:: Sigrunixia / LittleMaelstrom