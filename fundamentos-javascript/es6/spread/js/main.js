
const div = document.querySelector('.carrinho')

const carrinho = ["Banana", "Maçã", "Abacate", "Pêra"]

const legumes = ["Pepino", "Tomate", "Chuchu"];

function minhaCesta(carrinho) {
    // spread => espalhando os valores que contém no carrinho e adiciono um novo array legumes
    carrinho = [...carrinho, ...legumes];

    return carrinho;
}

const meuCarrinho = minhaCesta(carrinho);

meuCarrinho.forEach((produto) => {
    let item = document.createElement('li')

    item.textContent = produto

    div.appendChild(item)
})