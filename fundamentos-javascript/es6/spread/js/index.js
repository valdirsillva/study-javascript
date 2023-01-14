let div = document.querySelector('.data')
let ul = document.createElement('ul')

window.addEventListener('load', () => {
    doSpread()
    doRest()
})

function doSpread() {
    const marriedMen = people.results.filter(person => person.name.title === 'Mr');
    const marriedWomen = people.results.filter(person => person.name.title === 'Ms');

    const marriedPeople = [...marriedMen, ...marriedWomen]
    return marriedPeople;
}

const marrieds = doSpread()

marrieds.forEach((married) => {
    let li = document.createElement('li')

    li.textContent = `${married.name.first} ${married.name.last}`

    ul.appendChild(li)
    div.appendChild(ul)
})


// rest
function doRest() {
    console.log(infiniteSum(1, 2))
    console.log(infiniteSum(10, 20, 100, 200))
    console.log(infiniteSum(10, 30, 50, 500, 1000))
}

function infiniteSum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
