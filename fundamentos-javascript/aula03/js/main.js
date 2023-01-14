var a = 10
var b = 9

if (a > b) {
    console.log(a + ' é maior que ' + b)
} else {
    if (a < b) {
        console.log(a + ' é menor que ' + b)
    } else {
        console.log(a + ' é igual a ' + b)
    }
}

var dia = 3

// prettier-ignore
switch (dia) {
    case 1: dia = 'DOMINGO'; break;
    case 2: dia = 'SEGUNDA'; break;
    case 3: dia = 'TERÇA'; break;
    case 4: dia = 'QUARTA'; break;
    case 5: dia = 'QUINTA'; break;
    case 6: dia = 'SEXTA'; break;
    case 7: dia = 'SÁBADO'; break;

    default: dia = 'dia invalido'

}

console.log(dia)

var a = 7
var b = 7

var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta)


dia = 3
var diaSemana =
    dia === 1 ? 'Domingo'
        : dia === 2
            ? 'Segunda'
            : dia === 3
                ? 'Terça'
                : dia === 4
                    ? 'Quarta'
                    : dia === 5
                        ? 'Quinta'
                        : dia === 6
                            ? 'Sexta'
                            : dia === 7
                                ? 'Sábado' : 'Dia invalido';

console.log(diaSemana)


var totalSales = 1000

/**
 * Regra bônus
 * Vendas maiores ou iguais a 600 reais => 10%
 * Vendas menores que 600 reais => 5%
 */

var bonus = totalSales >= 600 ? totalSales * 0.1 : totalSales * 0.05;

// Transformando o codigo acima para if/else
if (totalSales >= 600) {
    bonus = totalSales * 0.1;
} else {
    bonus = totalSales * 0.05;
}

console.log(bonus)

// Somatorio com while
var numeroAtual = 1
var Somatorio = 0

while (numeroAtual <= 10) {
    Somatorio += numeroAtual;
    numeroAtual++
}

// console.log('A soma é ' + Somatorio)

Somatorio = 0

for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
    Somatorio += numeroAtual

    console.log('A soma é ' + Somatorio)
}
