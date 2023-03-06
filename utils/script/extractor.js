export function extractLinkName(s) {
    let rx = /\[(.+?)\]\((.+?)\)/i;
    let match = rx.exec(s);
    return {
        "link": `https://2e.aonprd.com${match[2]}`,
        "name": match[1]
    };
}

export function extractLinkNames(s) {
    let squareBracketCount = 0;
    let parenthesisCount = 0;
    let split = [];
    let prevSplitIndex = 0;
    for(let i = 0; i < s.length; i++){
        let c = s[i];
        switch(c) {
            case "[" : ++squareBracketCount; break;
            case "]" : --squareBracketCount; break;
            case "(" : ++parenthesisCount; break;
            case ")" : --parenthesisCount; break;
            case ",":
                if(squareBracketCount == 0 && parenthesisCount == 0){
                    split.push(s.substring(prevSplitIndex, i));
                    prevSplitIndex = i;
                }
        }
    }
    split.push(s.substring(prevSplitIndex));

    let linkNames = [];
    for(let ln of split)
        linkNames.push(extractLinkName(ln));

    return linkNames;
}