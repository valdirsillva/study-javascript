'use strict'; // O javascript acusa mais erros
/**
 * @var vs @let
 */

// @var o escopo é global
// @let o escopo reduzido 
function withVar() {
    for (var i = 0; i < 10; i++) {
        console.log('var' + i);
    }

    i = 10;
    console.log(i);
}

function withLet() {
    for (let i = 0; i < 10; i++) {
        console.log('var' + i);
    }

    i = 10;
    console.log(i);
}

// withLet();
withVar();

// const não é possível reatribuições de valores.

const value = 10;
// value = 30;
// console.log(value);
const person = { name: "Valdir", age: 29 }

const persons = ["Valdir", "João", "josé"];

person.name = 'Maria';

persons[0] = "Marcos";
persons[1] = "Jhoe";
console.log(persons)

// Função padrão
function sum(a, b) {
    return a + b;
}

// função anõnima
const sum3 = function (a, b) {
    return a - b;
}

// arrow function
const sum2 = (a, b) => {
    return a * b;
}

// arrow function reduzida
const sum4 = (a, b) => a + b;
console.log(sum3(8, 3));
console.log(sum(2, 9));
console.log(sum2(10, 3));
console.log(sum4(3, 5));

const name = "Valdir";
const lastName = "Silva";

const fullName = (name, lastName) => {
    console.log(`Meu nome é ${name} e sobrenome ${lastName}`);
}

fullName(name, lastName);


const sum5 = (a = 3, b) => {
    return a + b;
}

console.log(sum5(true, 2))

