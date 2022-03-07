const repeatString = function(hey, number) {
    let hey2 = "";
    if(number < 0){
        return "ERROR";
    }
    for(let i = 0; i < number; i++){
      hey2 = hey2 + hey;
    }
    return hey2;
};

// Do not edit below this line
module.exports = repeatString;
