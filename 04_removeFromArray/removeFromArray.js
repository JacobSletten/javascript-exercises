const removeFromArray = function(arr, ...args) {
    let targets = Array.from(args);
    
    let insertion = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!targets.includes(arr[i])) {
        // if (!targets.some(a => a === arr[i])) { 
            arr[insertion] = arr[i];
            insertion++;
        }
    }
    return arr.slice(0,insertion);
};

// Do not edit below this line
module.exports = removeFromArray;
