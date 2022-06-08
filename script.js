let ul;
let shoppingList = [
    "Mleko",
    "Jajka",
    "Masło", 
    "Jogurt", 
    "Bułka"
]

document.addEventListener('DOMContentLoaded', () => {
    ul = document.getElementById('shoppingList');
    for (let shoppingProduct of shoppingList) {
        addListItem(shoppingProduct)
    }
})

function addListItem(shoppingProduct) {
    let li = document.createElement('li');
    li.innerText = shoppingProduct;
    ul.appendChild(li);
}