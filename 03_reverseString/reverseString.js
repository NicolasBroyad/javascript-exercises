const reverseString = function(str) {
    let charArray = str.split("");
    let reversedString = "";
    for(i=0; i < charArray.length; i++){
        reversedString += charArray[(charArray.length-1) - i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
