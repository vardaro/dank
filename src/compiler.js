let dankasf = '';

const getStrBetween = (str, startString, endString) => {
    return str.substring(str.lastIndexOf(startString) + startString.length, str.lastIndexOf(endString)); // lmao what the hell is this
}

const parseVar = () => {
    let name = getStrBetween(dankasf, "depression ", " =");
    let val = getStrBetween(dankasf, "= ", " haha yes");
    
    // bools are a special snowflake :)
    if (val.includes("deadass B")) {
        val = val.replace("not ", "!");
        val = val.replace("deadass B", "true");

    }

    let node = `let ${name} = ${val};`;
    return node;
}
const compile = (line, type) => {
    dankasf = line;

    if (type == "var") {
        return parseVar();
    }
}

module.exports = compile;