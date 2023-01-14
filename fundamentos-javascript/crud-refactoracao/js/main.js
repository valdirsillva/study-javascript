let globalNames = ['Um', 'Dois', 'Três', 'Quatro'];
let inputName = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener('load', () => {
    inputName = document.querySelector('#inputName')

    preventFormSubmit();
    activateInput();
    render();
});

function preventFormSubmit() {
    var form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });
}

function activateInput() {
    const insertName = (newName) => globalNames = [...globalNames, newName];

    const updateName = (newName) => globalNames[currentIndex] = newName;

    const handleTyping = (event) => {
        var hasText = !!event.target.value && event.target.value.trim() !== '';

        if (!hasText) {
            clearInput();
            return;
        }

        if (event.key === 'Enter') {
            if (isEditing) {
                updateName(event.target.value);
            } else {
                insertName(event.target.value);
            }

            render()
            isEditing = false;
            clearInput();
        }
    }
    inputName.focus();
    inputName.addEventListener('keyup', handleTyping);
}

function render() {
    function createDeleteButton(index) {
        const deleteName = () => {
            globalNames = globalNames.filter((_, i) => i !== index)
            render();
        }

        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'X';
        button.addEventListener('click', deleteName);

        return button;
    }

    function createSpan(name, index) {
        const editItem = () => {
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = index;
        }

        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;

        span.addEventListener('click', editItem);

        return span;
    }

    var divNames = document.querySelector('#names');
    divNames.innerHTML = '';

    var ul = document.createElement('ul');

    for (var i = 0; i < globalNames.length; i++) {
        var currentName = globalNames[i];

        var li = document.createElement('li');
        var button = createDeleteButton(i);
        var span = createSpan(currentName, i);

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
    }

    divNames.appendChild(ul);
    clearInput();
}

function clearInput() {
    inputName.value = '';
    inputName.focus();
}
