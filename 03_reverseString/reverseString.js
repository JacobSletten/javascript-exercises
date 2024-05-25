const reverseString = function(str) {
    let arr = str.split('');

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
