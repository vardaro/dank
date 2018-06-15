let DANK_LINE = "";

const isConst = () => {
    return DANK_LINE.includes("watermarked meme");
}
const isVar = () => {
    return DANK_LINE.includes("meme");
}
const isIf = () => {
    return DANK_LINE.includes("tfw");
}
const isFor = () => {
    return DANK_LINE.includes("upvotes") && DANK_LINE.includes("if");
}

const isFunctionDec = () => {
    return DANK_LINE.includes("yo this is actually dope");
}
const isPrintln = () => {
    return DANK_LINE.includes("muh");
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
        return "for";
    }
    if (isFunctionDec()) {
        return "function";
    }
    if (isPrintln()) {
        return "println";
    }

    return dankLine;
}

module.exports = determineType;