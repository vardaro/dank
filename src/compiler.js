const replaceDankOperators = require('./operators');

let dankasf = '';

/**
 * a function that returns the substring between two strings in a string
 * @param {string} str string to parse
 * @param {string} startString lower bound string
 * @param {string} endString upper bound string
 */
const getStrBetween = (str, startString, endString) => {
    return str.substring(str.lastIndexOf(startString) + startString.length, str.lastIndexOf(endString)); // lmao what the hell is this
}

/**
 * This function gets called if the dankasf line is an assignment,
 * its parse the name of the var create, and the corresponding value
 * then rewrites the js string using that data
 * 
 * ex: 
 *  til a = 5; => let a  = 5; 
 */
const parseVar = () => {
    let name = getStrBetween(dankasf, "til ", " =");
    let val = getStrBetween(dankasf, "=", ";").trim();

    // bools are a special snowflake :)
    val = replaceDankOperators(val);
    let node;

    // if the meme has been watermarked, make the variable a const
    if (dankasf.includes('watermarked')) {
        node = `const ${name} = ${val};`;
    } else {
        node = `let ${name} = ${val};`;
    }
    return node;
}

/**
 * Writes a println statement
 * parses the args of the println, and transpiles
 * 
 * ex:
 *  muh "compiler optimizations" !! => console.log('compiler optimizations');
 */
const parsePrintln = () => {
    let args = getStrBetween(dankasf, "muh ", " !!");

    // this must be important, idk why but ill just keep it here
    if (args.includes("not")) {
        args = args.replace("not ", "!");
    }

    args = replaceDankOperators(args);
    return `console.log(${args});`;
}

/**
 * parses an if statement to a js if statement
 */
const parseIf = () => {
    let args = getStrBetween(dankasf, "tfw ", " {");
    args = replaceDankOperators(args);

    let node = `if (${args}) {`;
    return node;
}

/**
 * rewrites a dank for loop into a js for loop
 * ex:
 *  if {myMeme} gets {numIteration} upvotes {} => for (let myMeme = 0; i < numIteration; myMeme++) {}
 */
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