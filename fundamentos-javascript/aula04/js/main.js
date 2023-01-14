
var elements = document.querySelectorAll('p')
var fromElements = Array.from(elements)

fromElements.map((item) => {
    console.log(item.textContent)
})
