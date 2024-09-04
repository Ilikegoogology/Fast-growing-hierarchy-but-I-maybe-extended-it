// Import big-integer if using a module system (e.g., Node.js)
// const bigInt = require('big-integer');

// For browser usage with CDN, bigInt is available globally
const bigInt = window.bigInt;

// Successor function
function successor(n) {
    return bigInt(n).add(1);
}

// Addition
function addition(a, b) {
    return bigInt(a).add(b);
}

// Multiplication
function multiplication(a, b) {
    return bigInt(a).multiply(b);
}

// Exponentiation
function exponentiation(base, exp) {
    let result = bigInt(1);
    for (let i = 0; i < exp; i++) {
        result = result.multiply(base);
    }
    return result;
}

// Tetration
function tetration(base, height) {
    if (height === 1) return base;
    let result = base;
    for (let i = 1; i < height; i++) {
        result = exponentiation(base, result);
    }
    return result;
}

// Pentation
function pentation(base, height) {
    if (height === 1) return base;
    let result = base;
    for (let i = 1; i < height; i++) {
        result = tetration(base, result);
    }
    return result;
}

// Hexation
function hexation(base, height) {
    if (height === 1) return base;
    let result = base;
    for (let i = 1; i < height; i++) {
        result = pentation(base, result);
    }
    return result;
}

// Further Hyperoperators (e.g., Heptation, Octation) can be implemented similarly

// Heptation
function heptation(base, height) {
    if (height === 1) return base;
    let result = base;
    for (let i = 1; i < height; i++) {
        result = hexation(base, result);
    }
    return result;
}

// Octation
function octation(base, height) {
    if (height === 1) return base;
    let result = base;
    for (let i = 1; i < height; i++) {
        result = heptation(base, result);
    }
    return result;
}

// Nonation
function nonation(base, height) {
    if (height === 1) return base;
    let result = base;
    for (let i = 1; i < height; i++) {
        result = octation(base, result);
    }
    return result;
}
// Example usage
console.log("Successor of 5:", successor(5).toString());
console.log("Addition of 123 and 456:", addition(123, 456).toString());
console.log("Multiplication of 7 and 8:", multiplication(7, 8).toString());
console.log("Exponentiation of 2 to the power of 10:", exponentiation(2, 10).toString());
console.log("Tetration of 2 with height 4:", tetration(bigInt(2), 4).toString());
console.log("Pentation of 2 with height 3:", pentation(bigInt(2), 3).toString());
console.log("Hexation of 2 with height 2:", hexation(bigInt(2), 2).toString());
