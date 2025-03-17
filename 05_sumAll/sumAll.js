const sumAll = function(num1, num2) {
    let minNum, maxNum;
    let sum = 0;

    
    
    if(num1<0 || num2<0 || (num1%1)!==0 || (num2%1)!==0 || typeof(num1)!=="number" || typeof(num2)!=="number") {
        sum = "ERROR";
    } else if(num1 >= num2){
        maxNum = num1;
        minNum = num2;
    } else {
        minNum = num1;
        maxNum = num2;
    }

    for(let i = minNum; i <= maxNum; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
