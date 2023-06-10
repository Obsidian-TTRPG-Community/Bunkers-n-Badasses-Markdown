---
aliases: [Gunzerker]
cover: 
created: 1319-02-07
description: 
image: 
permalink: 
publish: false
section: [Skill Tree]
tags: [""]
updated: 2023-06-02
---

## Gunzerker

> [!infobox]
># `=this.classname`
>
>###### Favored Guns
> | **First** | **Second** |
> |:---:|:---:|
>| `=this.favoredgun1` | `=this.favoredgun2` |
> Also starts with a *Crappy Pistol*

### Class Information

A Gunzerker’s motto is Just keep firing’. As long as bullets are flying, the Gunzerker is happy. Living their whole lives around guns has made them experts of firearms and ammunition. This usually means they can give as good as they get, and are tougher than most.

### Appearance

Most Gunzerkers are dressed casually -jeans and t-shirts aren't out of the question -but with more ammo belts, holsters, and other *accoutrements* that say, “I like guns and do not typically use words like *accoutrements*.”

They also tend to have beards. Your Gunzerker doesn't *need* a beard, but if they *don’t* have one, *maybe* consider giving them a **—1** to all intimidation-related Talk Checks. Maybe.

### Gunzerker Backgrounds

```dataview
Table without ID 
 	link(file.path, title) AS "Name",
	description as Description,
	stats as Effects
 From #BnB/PC/Backgrounds
 where class = "Gunzerker" or contains(class, "Any")
 SORT file.name ASC
 ```

### Gunzerker Skill Trees

```dataview
Table Without ID
link(file.path, title) as Name,
embed(image) AS Art,
meleedie as MDie,
stats as Stats,
source as Source
From #BnB/PC/Classes/Gunzerker 
WHERE class = "Gunzerker"
SORT file.name ASC
```



> [!reference]-  Class Inline Metadata

> favoredgun1:: Rocket Launcher
> favoredgun2:: Shotgun
> image::
> **Source**:: [Nerdvana Games](https://nerdvanagames.com)
