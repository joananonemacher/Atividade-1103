function addItem() {
    const input = document.getElementById('itemInput');
    const list = document.getElementById('shoppingList');
    const itemText = input.value.trim(); 

    if (itemText === "") {
        alert("Por favor, digite um produto!");
        return;
    }

    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${itemText}</span>
        <button class="btn-delete" onclick="removeItem(this)">🗑️</button>
    `;

    list.appendChild(li);

    input.value = "";
    input.focus();
}

function removeItem(button) {
    const li = button.parentElement;
    li.remove();
}

document.getElementById('itemInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});