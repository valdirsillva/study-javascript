console.log('Olá, mundo!')

var title = document.querySelector('p')

title.textContent = "Revisando o bootcamp de desenvolvedor fullstack"

const modifyText = setTimeout(() => {
    title.textContent = "Modicicando o valor do parágrafo!!!!"
}, 3000)



