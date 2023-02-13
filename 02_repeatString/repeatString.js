const repeatString = function(word, repeat) {
    let answer = "";
    if (repeat<0){
        return "ERROR";
    }
    for (let index = 0; index < repeat; index++) {
        answer = answer+word;   
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
