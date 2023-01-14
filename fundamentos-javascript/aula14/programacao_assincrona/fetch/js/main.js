window.addEventListener('load', () => {
    const github = 'https://api.github.com/users/valdirsillva';
    doFetch()

    fetch(github).then((res) => {
        res.json().then((data) => {
            showData(data)
        })
    }).catch(error => {
        console.log('Erro na requisição')
    })

    executePromiseCalback(12, 0).then(result => {
        console.log(result)
    }).catch(err => {
        console.log('Falha na divisão.', err)
    })
})

function showData(data) {
    const user = document.querySelector('#user');

    user.textContent = data.login + ' => ' + data.name;
}

function executePromiseCalback(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Não é possível dividir por 0')
        }

        resolve(a / b)
    })
}

async function doFetch() {
    const github = 'https://api.github.com/users/valdirsillva';
    const response = await fetch(github)
    const json = await response.json()

    console.log(json)
}