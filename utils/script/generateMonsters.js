//to run this: npm run generateMonsters
import fetch from 'node-fetch';
import * as fs from 'fs';
import { getRarityLink, getSubcategoryLink, getCategoryLink } from './linkMapping.js';
import { extractLinkName, extractLinkNames } from './extractor.js';
import { stats } from './stats.js';

function capitalize(s){
    return s[0].toUpperCase() + s.substring(1).toLowerCase();
}

function leftPad(string, padChar, lenght){
    string = "" + string;//converting to string in case of numbers
    while(string.length < lenght)
        string = padChar + string;
    return string;
}

const traitToIgnore = [
    "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan",
    "NE","NG","N","CE","CG","CN","LE","LG","LN", "No Alignment", "Any"
];
function withoutIgnoredTraits(arr){
    for(let t of traitToIgnore){
        var i = arr.indexOf(t);
        if(i > -1) arr.splice(i, 1);
    }
    return arr;
}

const options = {
    method: 'POST',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0',
      Accept: '*/*',
      'Accept-Language': 'en-CA,en-US;q=0.7,en;q=0.3',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json',
      Origin: 'https://2e.aonprd.com',
      Connection: 'keep-alive',
      Referer: 'https://2e.aonprd.com/',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      TE: 'trailers'
    },
    body: '{"query":{"function_score":{"query":{"bool":{"filter":[{"query_string":{"query":"category:creature","default_operator":"AND","fields":["name","text^0.1","trait_raw","type"]}}],"must_not":[{"term":{"exclude_from_search":true}}]}},"boost_mode":"multiply","functions":[{"filter":{"terms":{"type":["Ancestry","Class"]}},"weight":1.1},{"filter":{"terms":{"type":["Trait"]}},"weight":1.05}]}},"size":10000,"sort":[{"name.keyword":{"order":"asc"}},"_doc"],"_source":{"excludes":["text"]}}'
  };
  
console.log("fetching monsters");

let response = await fetch('https://elasticsearch.aonprd.com/aon/_search?track_total_hits=true', options)
let json = await response.json();


console.log(json.hits.total.value + " monsters fetched");
console.log("Starting conversion\n-------------------------------------------");

let monsters = json.hits.hits;
let convertedmonsters = [];

for(let monster of monsters){
    let source = monster._source.source_markdown;
    let rarity = capitalize(monster._source.rarity);
    let level = monster._source.level;

    let traits = (!monster._source.trait_markdown)
        ? [{"link": "https://2e.aonprd.com/", "name": "—"}]
        : extractLinkNames(monster._source.trait_markdown);

    let family = (!monster._source.monster_family_markdown || monster._source.monster_family_markdown == "")
        ? {"link": "https://2e.aonprd.com/", "name": "—"}
        : extractLinkName(monster._source.monster_family_markdown);

    let pfs = monster._source.pfs ?? "—";

    
    if(monster._source.trait && traits.length !== withoutIgnoredTraits(monster._source.trait).length){
        console.error(`MISSMATCH IN EXTRACTED TRAITS`);
        console.log(traits);
        console.log(monster._source.trait);
        console.log(monster._source.trait_markdown);
    }

    if(monster._source.size.lenght > 1)
        console.log("monster with more than one size", monster._source.size);


    let convertedmonster = { 
        "id": parseInt(monster._id.split("-")[1]), 
        "name": monster._source.name, 
        "link": `https://2e.aonprd.com${monster._source.url}`, 
        "family": family, 
        "source": extractLinkName(source), 
        "rarity": {
            "link": getRarityLink(rarity), 
            "name": rarity
        },
        "size": monster._source.size[0], 
        "types": traits, //not available from the new route. will require breaking change
        "traits": traits, 
        "level": level, 
        "adventureLabel": pfs, 
        "alignment": monster._source.alignment 
    };

    convertedmonsters.push(convertedmonster);

    stats.log("rarity", rarity);
    stats.log("adventureLabel", pfs);
    stats.log("level", level);
    stats.log("source", extractLinkName(source).name);
    stats.log("alignment", monster._source.alignment);
    stats.log("size", monster._source.size[0]);
    stats.log("family", family.name);
    for(let save of monster._source.weakest_save)
        stats.log("weakest_save", save);
    for(let save of monster._source.strongest_save)
        stats.log("strongest_save", save);
}

console.log("---------------------\nProcessing completed");
console.log(convertedmonsters.length + " items processed");

let date = new Date();
let day = leftPad(date.getUTCDate(), "0", 2);
let month = leftPad(date.getUTCMonth(), "0", 2);
let year = date.getUTCFullYear();

fs.writeFile(`monsterTable-${year}-${month}-${day}.js`, `let monsterList = [ ${JSON.stringify(convertedmonsters)} ];`, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log(`Monsters table has been saved in monsterTable-${year}-${month}-${day}.js`);
});

fs.writeFile(`scrapperStats/monsters-${year}-${month}-${day}.json`, JSON.stringify(stats.data, null, 2), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log(`Monsters stats have been saved in scrapperStats/monsters-${year}-${month}-${day}.json`);
});