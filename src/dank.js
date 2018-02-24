const fs = require('fs');

const typeChecker = require('./typechecker');

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

        typeChecker(cur);

    }
}

const compileDir = path => {

}

module.exports = {
    dir: compileDir,
    file: compileFile
}