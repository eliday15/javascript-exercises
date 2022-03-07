const removeFromArray = function(...inputArray) {
    console.log(inputArray);
    const arr = inputArray[1];
    const valueToRemove = inputArray[0];
    valueToRemove.splice(1,2);
    inputArray.splice(1,0);
    console.log(inputArray);
    console.log(valueToRemove);
    return valueToRemove;
};

// Do not edit below this line
module.exports = removeFromArray;
