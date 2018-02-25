const operators = {
    "reposted from": "==",
    "deadass B": "true"  , 
    "is": "=",
    " haha yes": ";",
    "reaped more karma than": ">",
    "reaped less karma than": "<",
    "kek": "}",
    "not ": "!"
}

const replaceDankOperators = (string) =>{
    for (let key in operators) {
        if (operators.hasOwnProperty(key)) {
            string = string.replace(key, operators[key]);
        }
    }
    return string;
}

module.exports = replaceDankOperators;
