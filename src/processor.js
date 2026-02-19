function processData() {
    const num = 5;
    // TYPE_ERROR: toUpperCase() is not a function for type Number
    return num.toUpperCase();
}

module.exports = { processData };
