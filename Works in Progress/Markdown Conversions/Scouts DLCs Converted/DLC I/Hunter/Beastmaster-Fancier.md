---
aliases: 
created: +002023-02-10 1615
description: 
image: 
permalink: 
publish: 
updated: +002023-04-25 2414
---
<%
// Get a reference to the original <div> element
let myDiv = document.querySelector('div[data-callout="infobox"]');

// Create a new <div> element to hold the copied content
let newDiv = document.createElement('div');

// Copy the HTML content of the original <div> element to the new <div> element
newDiv.innerHTML = myDiv.outerHTML;

// Get the current file path
let currentFilePath = getObsidianPath();

// Create a new file path for the copied <div>
let newFilePath = currentFilePath.replace(/\.md$/, '') + '-copy.md';

// Convert the HTML content to Markdown syntax
let markdownContent = turndownService.turndown(newDiv.outerHTML);

// Create a new Markdown file and write the Markdown content to it
let newFileContent = `# Copied Div\n\n${markdownContent}`;
let newFile = await createNewFile(newFilePath, newFileContent);

%>

---
aliases: ["Hunter: Beastmaster"]
class: Hunter
created: +002023-02-10 1615
description: 
dmg: +1
image: 
meleedie: 1d8
mst: +2
permalink: 
publish: true
spd: +0
title: Hunter Beastmaster
updated: +002023-04-20 1732
---

## Beastmaster Hunter

%% This is a Markdown comment, and will disappear when rendered. It can be safely deleted.%%
%% This layout requires the following things: %%
%% [ITS Callouts CSS Snippet](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Snippets/S%20-%20Callouts.css) %%
%% [ITS Image Adjustments CSS Snippet](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Snippets/S%20-%20Images%20Adjustments.css) %%
%% [BunkersNBadasses-Fonts CSS Snippet](BunkersNBadasses-Fonts.css)%%
%% [Dataview Plugin](https://github.com/blacksmithgu/obsidian-dataview) %%

> [!infobox]
> # Beastmaster Hunter
> **Familiar:**  "Not Yet Picked"
> ![](PlaceholderImage.png)
> ###### Details
>  |
> ---|---|
> **ACC** | `=this.acc` |
> **DMG** | `=this.dmg` |
> **SPD** | `=this.spd` |
> **MST** | `=this.mst` |
> **Melee Die** | `=this.melee` |
> **Action Skill** | `=this.actionskill` |
> **Feat** | `=this.skillfeat` | 
> ###### Additional Skilltree Information
>  |
> ---|---|
> **Group(s)** | `=link(this.AssociatedGroup)` |
> **Religion(s)** | `=link(this.AssociatedReligion)` |
> **Current Location** | `=link(this.location)` |

## **`=this.file.name`**

>[!info|bg-c-purple]Overview
TBD

>[!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `=this.PersonalityTrait`
>
>> [!metadata|text-Center bg-c-gray] Social
>> `=this.SocialTrait`
>
>> [!metadata|text-Center bg-c-gray] Mental
>> `=this.MentalTrait`
>
>> [!metadata|text-Center bg-c-gray] Likes/Dislikes
>> **Likes:** `=this.Likes`
>>
>> **Dislikes:** `=this.Dislikes`

> [!column|dataview] Goals
>> [!metadata|text-Center bg-c-yellow]Personal
>> TBD
>
>> [!metadata|text-Center bg-c-yellow]Professional
>> TBD
>

### Acquaintances

> [!column|dataview] Acquaintances
>> [!metadata|text-Center bg-c-green]Friends & Family
>> TBD
>
>> [!metadata|text-Center bg-c-red]Rivals
>> TBD
>

### History

TBD

### DM Notes

#### Plot Hooks

#### Hidden Details

#### General Notes