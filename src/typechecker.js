let DANK_LINE = "";

const isVar = () => {
    return DANK_LINE.includes("joke about clinical depression");
}
const isIf = () => {
    return DANK_LINE.includes("worst trade deal in the history of trade deals") || DANK_LINE.includes("worst trade deal ever?");
}

const isPrintln = () => {
    return DANK_LINE.includes("lets get right into the news!");
}

const determineType = (dankLine) => {
    DANK_LINE = dankLine;

    if(isVar()) {
        return "var";
    }

    if (isIf()) {
        return "if";
    }

    if (isPrintln()) {
        return "println";
    }
}

module.exports = determineType;