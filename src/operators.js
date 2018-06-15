const operators = {
    "reposted from": "==",
    "is": "==",
    "to": "=",
    "deadass B": "true"  , 
    " haha yes": ";",
    "reaped more karma than": ">",
    "reaped less karma than": "<",
    "kek": "}",
    "not ": "!"
}

/**
 * replaces dank operators with javascript operators
 * 
 * @param {string} string line of dank code
 */
const replaceDankOperators = (string) =>{
    for (let key in operators) {
        if (operators.hasOwnProperty(key)) {
            string = string.replace(key, operators[key]);
        }
    }
    return string;
}

module.exports = replaceDankOperators;
