const removeFromArray = function(a, ...args) {
    for (let i = 0; i < args.length; i++){
        a = a.filter(a => a !== args[i]);
    }
    return a;
    
};

// Do not edit below this line
module.exports = removeFromArray;
