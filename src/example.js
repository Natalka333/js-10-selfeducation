const fetchUsersBtn = document.querySelector('.btn');
const userList = document.querySelector('.user-list');


fetchUsersBtn.addEventListener('click', () => {
    fetchUsers()
        .then((users) => renderUsers(users))
        .catch((error) => console.log(error));
});


function fetchUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name").then(
        (response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    );
}

function renderUsers(users) {
    const murkup = users
        .map((user) => {
            return `<li>
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
    </li>`;
        }).join('');
    userList.insertAdjacentHTML('beforeend', murkup);
};



// fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=0bd27c01866f453fb86ca5c40830dd1c',)
//     .then(r => r.json())
//     .then(console.log);



// const url = 'https://newsapi.org/v2/everything?q=car'
// const options = {
//     headers: {
//         'X-Api-Key': '0bd27c01866f453fb86ca5c40830dd1c'
//     },
// }
// fetch(url, options)
//     .then(r => r.json())
//     .then(console.log);