const operators = {
    "reposted from": "==",
    "deadass B": "true"  , 
    "is": "=",
    " haha yes": ";", 
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
