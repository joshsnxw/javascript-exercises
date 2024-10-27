function sumAll(a, b) {
    // Check for invalid input
    if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    if (a < 0 || b < 0) {
        return 'ERROR';
    }

    // Ensure a is the smaller number and b is the larger
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    // Sum all integers between min and max, inclusive
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll;
