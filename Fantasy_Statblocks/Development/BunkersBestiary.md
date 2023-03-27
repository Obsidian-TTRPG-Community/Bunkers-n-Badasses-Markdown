# Bunkers Bestiary Json Backup

```json
{  
  "blocks": [  
    {  
      "type": "inline",  
      "id": "19788a293819",  
      "properties": [],  
      "nested": [  
        {  
          "type": "heading",  
          "id": "bb98085bdbab",  
          "properties": [  
            "Name"  
          ],  
          "fallback": "Unknown",  
          "conditioned": false,  
          "size": 1  
        },  
        {  
          "type": "property",  
          "id": "f97b886ba819",  
          "properties": [  
            "Type"  
          ],  
          "fallback": "Unknown",  
          "display": "",  
          "conditioned": true,  
          "markdown": true,  
          "dice": false  
        }  
      ],  
      "hasRule": false  
    },  
    {  
      "type": "group",  
      "id": "fb8908f828ca",  
      "properties": [],  
      "nested": [  
        {  
          "type": "subheading",  
          "id": "ca19fa2b3938",  
          "properties": [  
            "TitleOfMob",  
            "FlavorText",  
            "TypeOfBoss"  
          ],  
          "separator": ",  ",  
          "fallback": "-",  
          "conditioned": true,  
          "hasRule": false  
        }  
      ]  
    },  
    {  
      "type": "group",  
      "id": "c81968abe80b",  
      "properties": [],  
      "nested": [  
        {  
          "type": "inline",  
          "id": "4809ea49d92a",  
          "properties": [],  
          "nested": [  
            {  
              "type": "group",  
              "id": "3de2f7125b5b",  
              "properties": [],  
              "nested": [  
                {  
                  "type": "property",  
                  "id": "8cb7e6193d3d",  
                  "properties": [  
                    "BadassRank"  
                  ],  
                  "fallback": "-",  
                  "display": " ",  
                  "conditioned": false,  
                  "markdown": true,  
                  "callback": ""  
                }  
              ]  
            },  
            {  
              "type": "group",  
              "id": "2cf9d50a4e4e",  
              "properties": [],  
              "nested": [  
                {  
                  "type": "property",  
                  "id": "4dc7e12b6c6c",  
                  "properties": [  
                    "MovementType"  
                  ],  
                  "fallback": "-",  
                  "display": " ",  
                  "conditioned": false,  
                  "callback": "let Move = monster.MovementType;\nlet types = ['move', 'flight', 'swim', 'burrow', 'teleport', 'leap', 'hover', 'climb',];\nlet symbols = ['', '󡔂', '󡔄', '󡔆', '󡔃', '󡔁', '󡔀', '󡔅',];\n\nlet output = '';\nfor (let i = 0; i < types.length; i++) {\n  for (let j = 1; j <= 10; j++) {\n    if (Move.includes(`${types[i]} ${j}`)) {\n      output += `${symbols[i]} ${j} Square${j > 1 ? 's' : ''}\\n`;\n    }\n  }\n}\n\nreturn output.trim();\n",  
                  "markdown": true  
                }  
              ]  
            },  
            {  
              "type": "group",  
              "id": "7bc8d9296a9a",  
              "properties": [],  
              "nested": [  
                {  
                  "type": "property",  
                  "id": "cb09c8a8096",  
                  "properties": [  
                    "Health"  
                  ],  
                  "fallback": "Dead",  
                  "display": "Health:",  
                  "conditioned": false,  
                  "markdown": true,  
                  "dice": true  
                },  
                {  
                  "type": "property",  
                  "id": "5a78a8888b98",  
                  "properties": [  
                    "Shield"  
                  ],  
                  "fallback": "N/A",  
                  "display": "Shield:",  
                  "conditioned": false,  
                  "markdown": true,  
                  "dice": true  
                },  
                {  
                  "type": "property",  
                  "id": "8b984aa81a5b",  
                  "properties": [  
                    "Armor"  
                  ],  
                  "fallback": "N/A",  
                  "display": "Armor:",  
                  "conditioned": false,  
                  "markdown": true,  
                  "dice": true  
                },  
                {  
                  "type": "property",  
                  "id": "f9890a588ac8",  
                  "properties": [  
                    "Traits"  
                  ],  
                  "fallback": " ",  
                  "display": "Traits:",  
                  "conditioned": false,  
                  "markdown": true,  
                  "callback": "let traits = ['Tough.', 'Fire.', 'Electric.', 'Raging.', 'Corrosive.', '[[test-explosive|Explosive.]]', 'Feral.', 'Rad.', 'Frozen.', 'Chubby.'];\nlet monsterName = monster.Name;\n\nif (monsterName.includes('Badass') && !monsterName.includes('Baby Dragon')) {\nlet trait = traits[Math.floor(Math.random() * traits.length)];\nif (monster.Traits) {\nmonster.Traits += ' ' + trait;\n} else {\nmonster.Traits = trait;\n}\n}\n\nif (monster.Traits) {\nreturn monster.Traits;\n} else {\nreturn \"N/A\";\n}"  
                }  
              ]  
            }  
          ]  
        }  
      ],  
      "hasRule": false,  
      "conditioned": true  
    },  
    {  
      "type": "group",  
      "id": "eaa94ab86ba9",  
      "properties": [],  
      "nested": [  
        {  
          "type": "property",  
          "id": "3a4a88da394a",  
          "properties": [  
            "Weapon"  
          ],  
          "fallback": "N/A",  
          "markdown": true,  
          "display": "Weapon:",  
          "dice": true  
        },  
        {  
          "type": "property",  
          "id": "5a8b7b08b8ca",  
          "properties": [  
            "Special"  
          ],  
          "fallback": "N/A",  
          "display": "Special:",  
          "markdown": true,  
          "hasRule": false,  
          "dice": true  
        },  
        {  
          "type": "traits",  
          "id": "b9da9b7a6958",  
          "properties": [  
            "SuperSpecial"  
          ],  
          "fallback": "-",  
          "conditioned": true,  
          "dice": true,  
          "markdown": true  
        }  
      ],  
      "hasRule": true,  
      "conditioned": true  
    },  
    {  
      "type": "traits",  
      "id": "8a88da8b6958",  
      "properties": [  
        "Actions"  
      ],  
      "fallback": "-",  
      "heading": "Actions",  
      "conditioned": true,  
      "markdown": true,  
      "dice": true  
    },  
    {  
      "type": "traits",  
      "id": "f88a1aba58ca",  
      "properties": [  
        "Mayhem"  
      ],  
      "fallback": "-",  
      "conditioned": true,  
      "heading": "󡔱 Mayhem",  
      "markdown": true,  
      "dice": true,  
      "hasRule": false  
    },  
    {  
      "type": "traits",  
      "id": "ab1b3968dac8",  
      "properties": [  
        "Loot"  
      ],  
      "fallback": "-",  
      "markdown": true,  
      "conditioned": true,  
      "heading": "Loot",  
      "dice": true,  
      "hasRule": false  
    },  
    {  
      "type": "group",  
      "id": "799ada4bc8c9",  
      "properties": [],  
      "nested": [],  
      "conditioned": false,  
      "hasRule": true  
    },  
    {  
      "type": "group",  
      "id": "cad889ea789b",  
      "properties": [],  
      "nested": [  
        {  
          "type": "image",  
          "id": "cbdbbbfa4a7a",  
          "properties": [  
            "ImageBig"  
          ],  
          "fallback": "-",  
          "conditioned": true,  
          "hasRule": true,  
          "dice": false  
        }  
      ]  
    }  
  ],  
  "name": "BunkersBestiary"  
}
```