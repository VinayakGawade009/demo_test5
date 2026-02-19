function processData() {
    const num = 5;
    // TYPE_ERROR: toUpperCase() is not a function for type Number
    return num.toString().toUpperCase();
}

module.exports = { processData };