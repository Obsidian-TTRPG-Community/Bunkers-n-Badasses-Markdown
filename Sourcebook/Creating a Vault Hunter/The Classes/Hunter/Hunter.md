---
aliases: [Hunter]
cover: 
created: 1319-02-07
description: 
image: 
permalink: 
publish: false
tags: [""]
updated: 2023-06-02
---

## Hunter

> [!infobox]
># `=this.Huntername`
>
>###### Favored Guns
> | **First** | **Second** |
> |:---:|:---:|
>| `=this.favoredgun1` | `=this.favoredgun2` |

### Class Information

Hunters are skilled killers from afar. They prefer the high ground: partially as it gives them a great vantage point for sniping, and partially because it more easily allows their feathered familiar friends to divebomb into battle and annihilate Enemies.

### Appearance

With a big ol’ knife for skinning their prey and a cowl mask to protect their eyes, the Hunter is dressed to survive out in the wilds for long periods of time. They may be sitting in one spot for hours, so they want to be comfortable -that means no bulky armor or unnecessary accessories.

### Hunter Backgrounds

>[!cards|dataview]
>
>```dataview
> Table without ID 
> 	link(file.path,name) AS "Name",
>	description as Description,
>	stats as Effects
> FROM "60-LitRPG/Gamemaster/Mechanics/Backgrounds"
> where class = "Hunter" or contains(class, "Any")
> SORT file.name ASC
>```
>

### Class Skill Trees

>[!cards|dataview]
>
>```dataview
> Table Without ID
> link(file.path, name) as Name,
> embed(image) AS Art,
> meleedie as MDie,
> stats as Stats,
> source as source
> FROM "60-LitRPG/Gamemaster/Mechanics/Classes"
> WHERE class = "Hunter"
> SORT file.name ASC
> ```
>

> [!reference]-  Class Inline Metadata

> favoredgun1:: Sniper Rifle
> favoredgun2:: Pistol
> image::
> source:: **Sourcebook**
> **Source**:: [Nerdvana Games](https://nerdvanagames.com)
