const removeFromArray = function(array, ...argumentsToRemove) {
    let amountToRemove = argumentsToRemove.length;
    let newArray = array;

    for(i=0; i < amountToRemove; i++){
        newArray = newArray.filter(value => value !== argumentsToRemove[i]);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
