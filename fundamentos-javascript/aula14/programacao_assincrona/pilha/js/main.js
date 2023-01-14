let colorRed = document.querySelector('.barra-vermelha')
let colorOrange = document.querySelector('.barra-laranja')
let colorBlue = document.querySelector('.barra-azul')
let colorLimegreen = document.querySelector('.barra-limegreen')
let colorGreen = document.querySelector('.barra-verde')

var counter = 0;
let bar = ["colorRed", "colorOrange", "colorBlue", "colorLimegreen", "colorGreen"]

setInterval(() => {
    let currentColor = bar[counter]

    counter++

    switch (currentColor) {
        case "colorRed": colorRed.classList.add('active'); break;
        case "colorOrange": colorOrange.classList.add('active'); break;
        case "colorBlue": colorBlue.classList.add('active'); break;
        case "colorLimegreen": colorLimegreen.classList.add('active'); break;
        case "colorGreen": colorGreen.classList.add('active'); break;
    }

    zerarBateria(counter)

}, 1000)


function zerarBateria() {
    if (counter === 6) {
        colorRed.classList.remove('active')
        colorOrange.classList.remove('active');
        colorBlue.classList.remove('active');
        colorLimegreen.classList.remove('active');
        colorGreen.classList.remove('active');

        counter = 0
    }
}


