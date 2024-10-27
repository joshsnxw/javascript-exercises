const repeatString = function(stringInput, numberOfRepitions) {
    if (Number(numberOfRepitions) < 0) {
        return 'ERROR';
    }
    return stringInput.repeat(numberOfRepitions);
};

// Do not edit below this line
module.exports = repeatString;
