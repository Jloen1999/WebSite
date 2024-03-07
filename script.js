let listUsers = document.getElementById('listUsers');
async function showUsers() {
    try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await users.json();
        let dataIterator = data[Symbol.iterator]();
        let user = dataIterator.next();
        while (!user.done) {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(user.value.name));
            listUsers.appendChild(li);
            user = dataIterator.next();
        }

        console.log(data);
    } catch (error) {
        console.log('Error fetching users', error);
    }

}

showUsers();

document.getElementById('btn-addUser').onclick = function () {
    let li = document.createElement('li');
    let nameUser = prompt('Enter user name');
    if (nameUser) {
        li.appendChild(document.createTextNode(nameUser));
        listUsers.appendChild(li);
        li.classList.add('newUser');
    }

};

document.getElementById('btn-dropUser').onclick = function () {
    let nameUser = prompt('Enter user name to remove');
    if (listUsers.children.length > 0) {
        Array.from(listUsers.children).forEach(user => {
            if (user.textContent.toLowerCase() === nameUser.toLowerCase()) {
                user.classList.add('lineThrough');
                setTimeout(() => {
                    listUsers.removeChild(user);
                }, 1000);
            }
        });
    } else {
        console.log('No users to remove');
    }
};

document.getElementById('btn-clearUsers').onclick = function () {
    listUsers.innerHTML = '';
};