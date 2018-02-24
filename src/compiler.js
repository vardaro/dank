const replaceDankOperators = require('./operators');

let dankasf = '';

const getStrBetween = (str, startString, endString) => {
    return str.substring(str.lastIndexOf(startString) + startString.length, str.lastIndexOf(endString)); // lmao what the hell is this
}

const parseVar = () => {
    let name = getStrBetween(dankasf, "meme ", " =");
    let val = getStrBetween(dankasf, "= ", " haha yes");

    // bools are a special snowflake :)
    if (val.includes("deadass B")) {
        val = val.replace("not ", "!");
        val = val.replace("deadass B", "true");

    }
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


    return `console.log(${args});`;
}

const parseIf = () => {
    let args = getStrBetween(dankasf, "(", ")");
    args = replaceDankOperators(args);

    let node = `if (${args}) {`;
    return node;
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

    return line;
}

module.exports = compile;