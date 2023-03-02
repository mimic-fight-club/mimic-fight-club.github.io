export function getRarityLink(rarity) {
    switch (rarity) {
        case "Common": return "https://2e.aonprd.com/Traits.aspx?ID=28";
        case "Uncommon": return "https://2e.aonprd.com/Traits.aspx?ID=159";
        case "Rare": return "https://2e.aonprd.com/Traits.aspx?ID=137";
        case "Unique": return "https://2e.aonprd.com/Traits.aspx?ID=161";
        default: console.error(`UNKNOWN RARITY: ${rarity}\n cannot provide link in getRarityLink`); return "";
    }
}

export function getCategoryLink(category) {
    switch (category) {
        case "Armor": return "https://2e.aonprd.com/Armor.aspx";
        case "Adventuring Gear": return "https://2e.aonprd.com/Equipment.aspx?Category=1";
        case "Services": return "https://2e.aonprd.com/Equipment.aspx?Category=2";
        case "Alchemical Items": return "https://2e.aonprd.com/Equipment.aspx?Category=6";
        case "Consumables": return "https://2e.aonprd.com/Equipment.aspx?Category=15";
        case "Held Items": return "https://2e.aonprd.com/Equipment.aspx?Category=21";
        case "Materials": return "https://2e.aonprd.com/Equipment.aspx?Category=22";
        case "Runes": return "https://2e.aonprd.com/Equipment.aspx?Category=23";
        case "Shields": return "https://2e.aonprd.com/Shields.aspx";
        case "Snares": return "https://2e.aonprd.com/Equipment.aspx?Category=31";
        case "Staves": return "https://2e.aonprd.com/Equipment.aspx?Category=32";
        case "Structures": return "https://2e.aonprd.com/Equipment.aspx?Category=33";
        case "Wands": return "https://2e.aonprd.com/Equipment.aspx?Category=34";
        case "Weapons": return "https://2e.aonprd.com/Weapons.aspx";
        case "Worn Items": return "https://2e.aonprd.com/Equipment.aspx?Category=41";
        case "Artifacts": return "https://2e.aonprd.com/Equipment.aspx?Category=45";
        case "Tattoos": return "https://2e.aonprd.com/Equipment.aspx?Category=46";
        case "Other": return "https://2e.aonprd.com/Equipment.aspx?Category=53";
        case "Intelligent Items": return "https://2e.aonprd.com/Equipment.aspx?Category=48";
        case "Cursed Items": return "https://2e.aonprd.com/Equipment.aspx?Category=49";
        case "Contracts": return "https://2e.aonprd.com/Equipment.aspx?Category=58";
        case "Grimoires": return "https://2e.aonprd.com/Equipment.aspx?Category=65";
        case "Spellhearts": return "https://2e.aonprd.com/Equipment.aspx?Category=68";
        case "Assistive Items": return "https://2e.aonprd.com/Equipment.aspx?Category=72";
        case "Customizations": return "https://2e.aonprd.com/Equipment.aspx?Category=75";
        case "Adjustments": return "https://2e.aonprd.com/Equipment.aspx?Category=62";
        case "Animals and Gear": return "https://2e.aonprd.com/Equipment.aspx?Category=87";
        case "High-Tech": return "https://2e.aonprd.com/Equipment.aspx?Category=90";
        case "Trade Goods": return "https://2e.aonprd.com/Equipment.aspx?Category=91";
        case "Blighted Boons": return "https://2e.aonprd.com/Equipment.aspx?Category=104";
        case "Relics": return "https://2e.aonprd.com/Equipment.aspx?Category=50";
        case "Siege Weapons": return "https://2e.aonprd.com/SiegeWeapons.aspx";
        case "Vehicles": return "https://2e.aonprd.com/Vehicles.aspx";
        default: console.error(`UNKNOWN CATEGORY: ${category}\n cannot provide link in getCategoryLink`); return "";
    }
}

export function getSubcategoryLink(subcategory) {
    switch (subcategory) {
        case "Accessory Runes": return "https://2e.aonprd.com/Equipment.aspx?Category=23&Subcategory=78";
        case "Alchemical Ammunition": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=83";
        case "Alchemical Bombs": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=7";
        case "Alchemical Elixirs": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=8";
        case "Alchemical Food": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=92";
        case "Alchemical Other": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=64";
        case "Alchemical Plants": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=86";
        case "Alchemical Poisons": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=9";
        case "Alchemical Tools": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=10";
        case "Animal Caretaking Gear": return "https://2e.aonprd.com/Equipment.aspx?Category=87&Subcategory=89";
        case "Animal Companion Mobility Aids": return "https://2e.aonprd.com/Equipment.aspx?Category=72&Subcategory=101";
        case "Animals": return "https://2e.aonprd.com/Equipment.aspx?Category=87&Subcategory=88";
        case "Armor Property Runes": return "https://2e.aonprd.com/Equipment.aspx?Category=23&Subcategory=26";
        case "Bargained Contracts": return "https://2e.aonprd.com/Equipment.aspx?Category=58&Subcategory=85";
        case "Base Armor": return "https://2e.aonprd.com/Armor.aspx";
        case "Base Shields": return "https://2e.aonprd.com/Shields.aspx";
        case "Base Weapons": return "https://2e.aonprd.com/Weapons.aspx";
        case "Basic Magic Armor": return "https://2e.aonprd.com/Equipment.aspx?Category=11&Subcategory=13";
        case "Basic Magic Weapons": return "https://2e.aonprd.com/Equipment.aspx?Category=37&Subcategory=39";
        case "Beast Guns": return "https://2e.aonprd.com/Equipment.aspx?Category=37&Subcategory=74";
        case "Bottled Monstrosities": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=94";
        case "Canes & Crutches": return "https://2e.aonprd.com/Equipment.aspx?Category=72&Subcategory=96";
        case "Coda": return "https://2e.aonprd.com/Equipment.aspx?Category=32&Subcategory=103";
        case "Companion Items": return "https://2e.aonprd.com/Equipment.aspx?Category=41&Subcategory=43";
        case "Drugs": return "https://2e.aonprd.com/Equipment.aspx?Category=6&Subcategory=47";
        case "Eidolon Items": return "https://2e.aonprd.com/Equipment.aspx?Category=41&Subcategory=69";
        case "Firing Mechanisms": return "https://2e.aonprd.com/Equipment.aspx?Category=75&Subcategory=77";
        case "Fixer": return "https://2e.aonprd.com/Equipment.aspx?Category=2&Subcategory=56";
        case "Fulu": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=61";
        case "Fundamental Armor Runes": return "https://2e.aonprd.com/Equipment.aspx?Category=23&Subcategory=24";
        case "Fundamental Weapon Runes": return "https://2e.aonprd.com/Equipment.aspx?Category=23&Subcategory=25";
        case "Gadgets": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=71";
        case "Hearing Aids": return "https://2e.aonprd.com/Equipment.aspx?Category=72&Subcategory=97";
        case "Hirelings": return "https://2e.aonprd.com/Equipment.aspx?Category=2&Subcategory=3";
        case "Holsters": return "https://2e.aonprd.com/Equipment.aspx?Category=75&Subcategory=81";
        case "Infernal Contracts": return "https://2e.aonprd.com/Equipment.aspx?Category=58&Subcategory=59";
        case "Joint Supports and Splints": return "https://2e.aonprd.com/Equipment.aspx?Category=72&Subcategory=98";
        case "Magic Wands": return "https://2e.aonprd.com/Equipment.aspx?Category=34&Subcategory=35";
        case "Magical Ammunition": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=16";
        case "Missive": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=95";
        case "Mobility Devices": return "https://2e.aonprd.com/Equipment.aspx?Category=72&Subcategory=73";
        case "Oils": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=17";
        case "Other Consumables": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=20";
        case "Other Contracts": return "https://2e.aonprd.com/Equipment.aspx?Category=58&Subcategory=63";
        case "Other Worn Items": return "https://2e.aonprd.com/Equipment.aspx?Category=41&Subcategory=44";
        case "Potions": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=18";
        case "Precious Material Armor": return "https://2e.aonprd.com/Equipment.aspx?Category=11&Subcategory=12";
        case "Precious Material Shields": return "https://2e.aonprd.com/Equipment.aspx?Category=28&Subcategory=29";
        case "Precious Material Weapons": return "https://2e.aonprd.com/Equipment.aspx?Category=37&Subcategory=38";
        case "Prostheses": return "https://2e.aonprd.com/Equipment.aspx?Category=72&Subcategory=99";
        case "Relic Seeds": return "https://2e.aonprd.com/Equipment.aspx?Category=50&Subcategory=107";
        case "Researcher": return "https://2e.aonprd.com/Equipment.aspx?Category=2&Subcategory=57";
        case "Scopes": return "https://2e.aonprd.com/Equipment.aspx?Category=75&Subcategory=76";
        case "Scrolls": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=52";
        case "Secret Society Membership Services": return "https://2e.aonprd.com/Equipment.aspx?Category=2&Subcategory=84";
        case "Specialty Wands": return "https://2e.aonprd.com/Equipment.aspx?Category=34&Subcategory=36";
        case "Specific Magic Armor": return "https://2e.aonprd.com/Equipment.aspx?Category=11&Subcategory=14";
        case "Specific Magic Weapons": return "https://2e.aonprd.com/Equipment.aspx?Category=37&Subcategory=40";
        case "Specific Shields": return "https://2e.aonprd.com/Equipment.aspx?Category=28&Subcategory=30";
        case "Spell Catalysts": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=67";
        case "Spellcasting": return "https://2e.aonprd.com/Equipment.aspx?Category=2&Subcategory=5";
        case "Stabilizers": return "https://2e.aonprd.com/Equipment.aspx?Category=75&Subcategory=82";
        case "Tails": return "https://2e.aonprd.com/Equipment.aspx?Category=72&Subcategory=102";
        case "Talismans": return "https://2e.aonprd.com/Equipment.aspx?Category=15&Subcategory=19";
        case "Thrune Contracts": return "https://2e.aonprd.com/Equipment.aspx?Category=58&Subcategory=54";
        case "Transportation": return "https://2e.aonprd.com/Equipment.aspx?Category=2&Subcategory=4";
        case "—": return "https://2e.aonprd.com/Equipment.aspx";
        case "Vision Assistance": return "https://2e.aonprd.com/Equipment.aspx?Category=72&Subcategory=100";
        case "Weapon Property Runes": return "https://2e.aonprd.com/Equipment.aspx?Category=23&Subcategory=27";
        default: console.error(`UNKNOWN SUBCATEGORY: ${subcategory}\n cannot provide link in getSubcategoryLink`); return "";
    }
}