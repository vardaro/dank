const replaceDankOperators = require('./operators');

let dankasf = '';

const getStrBetween = (str, startString, endString) => {
    return str.substring(str.lastIndexOf(startString) + startString.length, str.lastIndexOf(endString)); // lmao what the hell is this
}

const parseVar = () => {
    let name = getStrBetween(dankasf, "meme ", " is");
    let val = getStrBetween(dankasf, "is ", " haha yes");

    // bools are a special snowflake :)
    val = replaceDankOperators(val);
    let node;

    if (dankasf.includes('watermarked')) {
        node = `const ${name} = ${val};`;
    } else {
        node = `let ${name} = ${val};`;
    }
    return node;
}

const parsePrintln = () => {
    let args = getStrBetween(dankasf, "(", ")");

    if (args.includes("not")) {
        args = args.replace("not ", "!");
    }

    args = replaceDankOperators(args);
    return `console.log(${args});`;
}

const parseIf = () => {
    let args = getStrBetween(dankasf, "(", ")");
    args = replaceDankOperators(args);

    let node = `if (${args}) {`;
    return node;
}

const parseFor = () => {
    let name = getStrBetween(dankasf, "im ", " years");
    let maxIteration = getStrBetween(dankasf, "almost ", "!");
    let node = `for (let ${name} = 0; ${name} < ${maxIteration}; ${name}++) {`;
    return node;
}
const parseFunction = () => {
    let dec = getStrBetween(dankasf, "it ", "kek");
    return `function ${dec} {`;
}
const compile = (line, type) => {
    dankasf = line;

    if (type == "var" || type == "const") {
        return parseVar();
    }

    if (type == "println") {
        return parsePrintln();
    }

    if (type == "if") {
        return parseIf();
    }

    if (type == "for") {
        return parseFor();
    }

    if (type == "function") {
        return parseFunction();
    }
    return line;
}

module.exports = compile;