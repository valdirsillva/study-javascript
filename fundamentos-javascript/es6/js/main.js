
let numbers = [10, 3, 7, 9, 2, 1];

// Adicionando com array push
function add1(value) {
    numbers.push(value);
    console.log(numbers);
}

// Adicionando com spread operator
function add2(value) {
    numbers = [...numbers, value];
    console.log(numbers);
}

add1('0')
add2('sete')

// Rest operator

function infiniteSum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum;
}

console.log(infiniteSum(1, 4, 7, 0, 10));