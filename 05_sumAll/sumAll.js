const sumAll = function(start, end) {
    let sum = 0;

    if (start < 0 || end < 0) {
        return "ERROR";
    }
    else if ( typeof(start) != "number" || typeof(end) != "number"){
        return "ERROR";
    }
    else if(start<end){
    while(start<=end){
        sum = sum+start;
        start++;
    }
    return sum;
}
    else if (start>end) {
        while(start>=end){
            sum = sum+start;
            start--;
        }
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
