let DANK_LINE = "";

const isConst = () => {
    return DANK_LINE.includes("watermarked meme");
}
const isVar = () => {
    return DANK_LINE.includes("meme");
}
const isIf = () => {
    return DANK_LINE.includes("worst trade deal in the history of trade deals") || DANK_LINE.includes("worst trade deal ever?");
}
const isFor = () => {
    return DANK_LINE.includes("its not a phase mom!!")
}
const isPrintln = () => {
    return DANK_LINE.includes("lets get right into the news!");
}

const determineType = (dankLine) => {
    DANK_LINE = dankLine;

    if (isConst()) {
        return "const";
    }
    if(isVar()) {
        return "var";
    }

    if (isIf()) {
        return "if";
    }

    if (isFor()) {
        return "for"
    }

    if (isPrintln()) {
        return "println";
    }

    return dankLine;
}

module.exports = determineType;