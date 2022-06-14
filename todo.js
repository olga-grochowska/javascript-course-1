let ul;
let newTodoForm;

let shoppingList = [
    "Mleko",
    "Jajka",
    "Masło",
    "Jogurt",
    "Bułka"
]

document.addEventListener('DOMContentLoaded', () => {
    ul = document.getElementById('todoList');
    newTodoForm = document.getElementById('todoForm');

    newTodoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target.elements[0];

        if (input.value.length > 2 && !input.value.startsWith(' ')) {
            addListItem(input.value);
            input.value = ""
            input.classList.remove('input-danger');
            inputError.innerText = "";
        } else {
            inputError.innerText = "Nazwa nie spełnia kryteriów."
            input.classList.add('input-danger');
        }

    })

    for (let shoppingItem of shoppingList) {
        addListItem(shoppingItem)
    }
})

function addListItem(shoppingItem) {
    let li = document.createElement('li');
    li.innerText = shoppingItem;
    ul.appendChild(li);
}