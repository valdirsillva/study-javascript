function sum(a, b) {
    return a + b;
}

function compareNumbers(a, b) {
    // return a > b ? 1 : a < b ? -1 : 0;
    return a - b;
}

function superSum(from, upTo) {
    var sum = 0

    for (var i = from; i <= upTo; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sum(3, 2))

console.log(compareNumbers(1, 1));
console.log(compareNumbers(3, 3));
console.log(compareNumbers(1, 4));


console.log(superSum(10, 100))
