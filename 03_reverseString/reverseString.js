const reverseString = function(word) {
    let revWord = [];
    for (let index = word.length-1; index >= 0; index--) {
        revWord.push(word[index]);
        
    }

    return revWord.join("")
};

// Do not edit below this line
module.exports = reverseString;
