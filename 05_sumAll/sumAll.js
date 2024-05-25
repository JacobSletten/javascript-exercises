const sumAll = function(left, right) {
    let sum = 0;

    if (left > right) {
        let temp = right;
        right = left;
        left = temp;
    }

    if ( (left < 0 || right < 0) || (typeof(left) != "number" || typeof(right) != "number") ) {
        return "ERROR"
    }

    for (let i = left; i <= right; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
