const reverseString = function(string) {
    let charArray = string.split('')
    let output = '';
    
    for (let i = charArray.length - 1; i >= 0; i--) {
        output += `${charArray[i]}`;
    }
    
    return output;
    
};

// Do not edit below this line
module.exports = reverseString;
