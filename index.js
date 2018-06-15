// CLI

const program = require('commander');
const dank = require('./src/dank.js');
const nrc = require('node-run-cmd');

program
    .version('0.1.0')
    .option('-d, --dir', 'Path to folder containing WH code')
    .option('-f, --file', 'Path to single file you want to compile')

    .parse(process.argv);

if (program.dir) {
    let path = program.args[0];
    console.log(`Directory: ${path}`);
    return;
}

if (program.file) {
    let path = program.args[0];
    console.log(`\nFile: ${path}\n`);
    dank.file(path);

    // play the airhorn lol
    nrc.run("cmdmp3win \"./audio/airhorn.mp3\"");
}