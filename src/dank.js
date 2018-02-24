const fs = require('fs');
const nrc = require('node-run-cmd');

const typeChecker = require('./typechecker');
const compile = require('./compiler');

const readBuffer = path => {
    return fs.readFileSync(path, 'utf8');
}

const compileFile = path => {
    let buffer = readBuffer(path);
    // split by lines
    buffer = buffer.split(/(?:\r\n|\r|\n)/g);

    let len = buffer.length;
    let AST = [];

    for (let i = 0; i < len; i++) {
        let cur = buffer[i].trim();

        // if white spce, skip
        if (!cur) continue;

        let type = typeChecker(cur);
        let unDanked = compile(cur, type);
        AST[i] = unDanked;
    }

    let output = AST.join("");
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


module.exports = {
    // dir: compileDir,
    file: compileFile
}