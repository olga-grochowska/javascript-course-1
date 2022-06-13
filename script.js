let ul;
let newItemForm;

let shoppingList = [
    "Mleko",
    "Jajka",
    "Masło",
    "Jogurt",
    "Bułka"
]

document.addEventListener('DOMContentLoaded', () => {
    ul = document.getElementById('shoppingList');
    newItemForm = document.getElementById('newItemForm');

    newItemForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let input = event.target.elements[0];
        
        addListItem(input.value);

        input.value = "";
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