const removeFromArray = function(arr) {
    let targets = Array.from(arguments);
    
    let insertion = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!targets.some(a => a === arr[i])) {
            arr[insertion] = arr[i];
            insertion++;
        }
    }
    return arr.slice(0,insertion);
};

// Do not edit below this line
module.exports = removeFromArray;
