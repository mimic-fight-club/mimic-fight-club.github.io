//to run this: npm run generateItems
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

const traitToIgnore = ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];
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
    body: '{"query":{"function_score":{"query":{"bool":{"filter":[{"query_string":{"query":"category:(armor OR equipment OR shield OR siege-weapon OR vehicle OR weapon) ","default_operator":"AND","fields":["name","text^0.1","trait_raw","type"]}}],"must_not":[{"term":{"exclude_from_search":true}}]}},"boost_mode":"multiply","functions":[{"filter":{"terms":{"type":["Ancestry","Class"]}},"weight":1.1},{"filter":{"terms":{"type":["Trait"]}},"weight":1.05}]}},"size":10000,"sort":["_score","_doc"],"_source":{"excludes":["text"]}}'
  };
  
console.log("fetching items");

let response = await fetch('https://elasticsearch.aonprd.com/aon/_search?track_total_hits=true', options)
let json = await response.json();


console.log(json.hits.total.value + " items fetched");
console.log("Starting conversion\n-------------------------------------------");

let items = json.hits.hits;
let convertedItems = [];

for(let item of items){
    let source = item._source.source_markdown;
    let rarity = capitalize(item._source.rarity);
    let level = (item._source.level != 0) ? item._source.level : "—";

    let category = item._source.item_category;
    let subcategory = item._source.item_subcategory ?? "—";

    let traits = (!item._source.trait_markdown)
        ? [{"link": "https://2e.aonprd.com/", "name": "—"}]
        : extractLinkNames(item._source.trait_markdown);

    
    if(item._source.trait && traits.length !== withoutIgnoredTraits(item._source.trait).length){
        console.error(`MISSMATCH IN EXTRACTED TRAITS`);
        console.log(traits);
        console.log(item._source.trait);
        console.log(item._source.trait_markdown);
    }
    
    let convertedItem = {
        id: item._id.split("-")[1]+"-"+item._source.name,
        name: item._source.name, 
        link: "https://2e.aonprd.com" + item._source.url, 
        source: extractLinkName(source), 
        rarity: {
            "link": getRarityLink(rarity), 
            "name": rarity
        }, 
        traits: traits, 
        category: {
            "link": getCategoryLink(category), 
            "name": category
        }, 
        subcategory: {
            "link": getSubcategoryLink(subcategory), 
            "name": subcategory
        }, 
        level: level, 
        price: item._source.price_raw, 
        bulk: item._source.bulk_raw,
    }
    convertedItems.push(convertedItem);

    stats.log("rarity", rarity);
    stats.log("bulk", item._source.bulk_raw);
    stats.log("level", level);
    stats.log("source", extractLinkName(source).name);
    stats.log("category", category);
    stats.log("subcatergory", subcategory);
    
}

console.log("---------------------\nProcessing completed");
console.log(convertedItems.length + " items processed");

let date = new Date();
let day = leftPad(date.getUTCDate(), "0", 2);
let month = leftPad(date.getUTCMonth(), "0", 2);
let year = date.getUTCFullYear();

fs.writeFile(`itemTable-${year}-${month}-${day}.js`, `var itemList = ${JSON.stringify(convertedItems)};`, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log(`Item table has been saved in itemTable-${year}-${month}-${day}.js`);
});

fs.writeFile(`scrapperStats/items-${year}-${month}-${day}.json`, JSON.stringify(stats.data, null, 2), 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log(`Items stats have been saved in scrapperStats/items-${year}-${month}-${day}.json`);
});