const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (cleanedStr === cleanedStr.split('').reverse().join('')) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
