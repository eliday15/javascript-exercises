const reverseString = function(inputString) {
    let splitString = inputString.split("");
    let reverseString = splitString.reverse();
    let joinArray = reverseString.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
