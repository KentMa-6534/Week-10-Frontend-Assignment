let id = 0;

document.getElementById('addMember').addEventListener('click', () => {
    let table = document.getElementById('memberList');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('firstName').value;
    row.insertCell(1).innerHTML = document.getElementById('lastName').value;
    row.insertCell(2).innerHTML = document.getElementById('email').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
});

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Delete row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}