const repeatString = function(string, number) {
    let output = '';
    for (let i = 0; i < number; i++) {
        output += string;
    }

    if (number < 0) {
        return 'ERROR';
    }

    if (output || output == '') {
        return output;
    }
    
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
