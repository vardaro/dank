const fs = require('fs');
const nrc = require('node-run-cmd');

const player = require('play-sound')(opts = {})
const typeChecker = require('./typechecker');
const compile = require('./compiler');
const replaceDankOperators = require('./operators');

const readBuffer = path => {
    return fs.readFileSync(path, 'utf8');
}


/**
 * Accepts path of .dank file as param and compiles that file
 * @param {string} path 
 */
const compileFile = path => {

    let buffer = readBuffer(path);
    // split by lines
    buffer = buffer.split(/(?:\r\n|\r|\n)/g);

    let len = buffer.length;
    let AST = [];


    // iterate over the lines
    for (let i = 0; i < len; i++) {
        let cur = buffer[i].trim();

        // if white spce, skip
        if (!cur) continue;

        // Danks comments are denoted by > at the beginning of the line
        if (cur.startsWith(">")) continue; 

        let type = typeChecker(cur);

        // if there is nothing dank about cur, just replace the operators and put it in the ast lol
        if (type == cur) {
            AST[i] = replaceDankOperators(cur);
            continue;
        }

        let unDanked = compile(cur, type);

        AST[i] = unDanked;
    }


    let output = AST.join("");
    console.log(output);
    const cmdExec = "node -e\"" + output + "\"";


    nrc.run(cmdExec, {
        onData: (data) => {
            console.log(data);
        },
        onError: (data) => {
            console.log("oof");
        }
    });
}


const compileString = (string, cb) => {

    // split by lines
    string = string.split(/(?:\r\n|\r|\n)/g);

    let len = string.length;
    let AST = [];

    for (let i = 0; i < len; i++) {
        let cur = string[i].trim();

        // if white spce, skip
        if (!cur) continue;

        let type = typeChecker(cur);

        // if there is not dank about cur, just replace the operators and put it in the ast
        if (type == cur) {
            AST[i] = replaceDankOperators(cur);
            continue;
        }
        let unDanked = compile(cur, type);
        AST[i] = unDanked;
    }

    let output = AST.join("");
    const cmdExec = "node -e\"" + output + "\"";
    nrc.run(cmdExec, {
        onData: (data) => {
            cb(data);
        },
        onError: (data) => {
            console.log("oof");
        }
    });
}


module.exports = {
    string: compileString,
    file: compileFile
}