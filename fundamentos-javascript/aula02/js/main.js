
let name = "Valdir"
let lastName = "Correia Silva"

let contentText = document.querySelector('p')
contentText.innerHTML
    = `Meu nome é ${name} e sobrenome ${lastName}. O tipo da variável é <b>${typeof name} </b>`

let span = document.querySelector('span')

let age = 29  // number 
let city      // undefined
let imc = undefined // undefined
let phoneNumber = null

const partida = { equipeA: 0, equipeB: 1 }

if (city === imc) {
    console.log(`Sim, city é igual ${city}`)
} else {
    console.log(`Não, city não é igual ${city}`)
}

if (phoneNumber === imc) {
    alert('Opsss')
}

console.log(typeof age)

if (partida.equipeA) {
    console.log('Equipe A' + partida.equipeA)
}
