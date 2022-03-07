const sumAll = function(value1, value2) {
    let sum = 0;
    if(!Number.isInteger(value1) || !Number.isInteger(value2)) return "ERROR";
    if (value1 < 0 || value2 < 0) {
        return "ERROR";
    }
    if (value1 < value2) {
        for (value1; value1 <= value2 ; value1++) {
            sum += value1;
       }
    }else{
        for ( value2; value2 <= value1; value2++) {
            sum += value2;
        }
    }
   
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
