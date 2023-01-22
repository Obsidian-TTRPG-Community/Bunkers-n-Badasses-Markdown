---
alias: [Stabbomancer Canvas]
cssclass: bunkers
---
# Stabbomancer Canvas Proof of Concept Readme


This is a proof of concept for using canvas as a skill/progression tree tracker. It is done in hopes the community can come together and improve upon this area that we are consistently struggling in. 

## Required Plugins
1. [Dataview](https://github.com/blacksmithgu/obsidian-dataview)
2. [Obsidian Buttons](https://github.com/shabegom/buttons) (For the Buttons... duh)
3. [Metaedit](https://github.com/chhoumann/MetaEdit) (For API Calls)

### Snippets for the Looks (Optional)
1. [S - Callouts](https://github.com/SlRvb/Obsidian--ITS-Theme/tree/main/Snippets)
2. [BnB-Sourcebook-No-Statblock](../CSS_Snippets/BnB-Sourcebook-No-Statblock.css) or [BnB-Sourcebook-Yes-Statblock](../CSS_Snippets/BnB-Sourcebook-Yes-Statblock.css)

## Instructions
1. Download the [Stabbomancer](../Stabbomancer/) folder in full and place it in your vault. 
2. Open [Stabbo-Skill-Tree](Stabbo-Skill-Tree.canvas).
3. You may need to rename and re-attach the individual canvas pieces. I have  moved everything to root to try to prevent this issue, but no guarantees. 
4. Explore. Make it better, and share it with the world. :)


## Known Issues
1. Your dataview refresh rate must be lowered for this to work. The default of 2500 is too slow. I have mine on 750 and it is just right. Too low, and its constant error messages. Your sweet spot is individualized.
2. Currently, canvas saves cards by absolute paths. If you move or share cards, move everything to a root directory first and let links update. 