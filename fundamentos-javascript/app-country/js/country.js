let tabCountries = null;
let tabFavorites = null;

let countCountries = 0;
let countFavorites = 0;

let allCountries = [];
let favoriteCountries = [];

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = 0;

window.addEventListener('load', async () => {
    tabCountries = document.querySelector('#tabCountries')
    tabFavorites = document.querySelector('#tabFavorites')

    countCountries = document.querySelector('#count-countries')
    countFavorites = document.querySelector('#count-favorites')

    totalPopulationList = document.querySelector('#total-population-list')
    totalPopulationFavorites = document.querySelector('#total-population-favorites')

    numberFormat = Intl.NumberFormat('pt-BR');

    getCountries()
})

async function getCountries() {
    const countryUrl = 'https://restcountries.com/v2/all';
    const countries = await fetch(countryUrl);
    const data = await countries.json();

    // populando o array allCountries[]
    allCountries = data.map(({ name, numericCode, flag, population }) => {
        return {
            id: numericCode,
            name,
            filterName: name.toLowerCase(),
            flag,
            population,
        }
    })

    loader()
}

function render() {
    renderCountryList();
    renderFavorites();
    renderSummary();
    handleCountryButtons();

}

function loader() {
    var loaderCss = document.querySelector('.content-loader')

    setTimeout(() => {
        loaderCss.classList.remove('active')

        render()
    }, 3000)
}

function renderCountryList() {
    let countriesHTML = '<div>';

    allCountries.forEach(country => {
        const { id, flag, name, population } = country

        const countryHTML = `
          <div class="country">
            <div class="btn-plus">
                <button class="buttonPlusFavorite btn" id="${id}">+</button>
                <img src="${flag}"/>
            </div>
            <div class="box">
                 <span>${name}</span> 
                 <span>${numberFormat.format(population)}</span>   
            </div>
          </div>
        `
        countriesHTML += countryHTML;
    })

    countriesHTML += '</div>';
    tabCountries.innerHTML = countriesHTML;
}

function renderFavorites() {
    let favoritesHTML = '<div>';

    favoriteCountries.forEach(country => {
        const { id, flag, name, population } = country;

        const favoriteHTML = `
          <div class="country">
            <div class="btn-plus">
                <button class="buttonRemoveFavorite btn" id="${id}">-</button>
                <img src="${flag}"/>
            </div>
            <div class="box">
                 <span>${name}</span> 
                 <span>${numberFormat.format(population)}</span>   
            </div>
          </div>
        `
        favoritesHTML += favoriteHTML;
    })

    favoritesHTML += '</div>';
    tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {
    countCountries.textContent = allCountries.length
    countFavorites.textContent = favoriteCountries.length

    const totalPopulation = allCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    }, 0)

    const totalFavorites = favoriteCountries.reduce((accumulator, current) => {
        return accumulator + current.population;
    }, 0)

    totalPopulationList.textContent = numberFormat.format(totalPopulation)
    totalPopulationFavorites.textContent = numberFormat.format(totalFavorites)
}

function handleCountryButtons() {
    const buttonCountries = Array.from(tabCountries.querySelectorAll('.btn'))
    const buttonFavorites = Array.from(tabFavorites.querySelectorAll('.btn'))

    buttonCountries.forEach(button => {
        button.addEventListener('click', () => addToFavorite(button.id))
    });

    buttonFavorites.forEach(button => {
        console.log(button.id)
        button.addEventListener('click', () => removeFromFavorite(button.id))
    });
}

function addToFavorite(id) {
    const countryToAdd = allCountries.find(country => country.id === id);

    favoriteCountries = [...favoriteCountries, countryToAdd]

    favoriteCountries.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    allCountries = allCountries.filter(country => country.id != id)

    render();
}

function removeFromFavorite(id) {
    const countryToRemove = favoriteCountries.find(country => country.id === id);

    allCountries = [...allCountries, countryToRemove]

    allCountries.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    favoriteCountries = favoriteCountries.filter(country => country.id !== id)
    render();
}
