document.addEventListener("DOMContentLoaded", init);

function init() {
    const mainDiv = document.getElementById('main');

    // Створення header, main, footer
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    header.style.height = '100px';
    main.style.height = '500px';
    footer.style.height = '100px';

    mainDiv.appendChild(header);
    mainDiv.appendChild(main);
    mainDiv.appendChild(footer);

    // Створення leftPanel, content, rightPanel всередині main
    const leftPanel = document.createElement('div');
    const content = document.createElement('div');
    const rightPanel = document.createElement('div');

    leftPanel.id = 'leftPanel';
    content.id = 'content';
    rightPanel.id = 'rightPanel';

    leftPanel.style.width = '33%';
    content.style.width = '33%';
    rightPanel.style.width = '33%';

    leftPanel.classList.add('panel');
    content.classList.add('panel');
    rightPanel.classList.add('panel');

    main.appendChild(leftPanel);
    main.appendChild(content);
    main.appendChild(rightPanel);

    const panels = [leftPanel, content, rightPanel];
    panels.forEach(panel => {
        const loader = document.createElement('div');
        loader.classList.add('loader');
        panel.appendChild(loader);
    });

    const buttons = ['User Rating', 'News', 'Contacts', 'About'];
    buttons.forEach(buttonText => {
        const button = document.createElement('button');
        button.innerText = buttonText;
        button.addEventListener('click', () => {
            content.innerHTML = `<h1>${buttonText}</h1>`;
        });
        header.appendChild(button);
    });

    const currentUsers = document.createElement('div');
    currentUsers.innerText = 'Current users: 0';
    footer.appendChild(currentUsers);

    const newUsers = document.createElement('div');
    newUsers.innerText = 'New users:';
    footer.appendChild(newUsers);

    setTimeout(() => {
        content.querySelector('.loader').style.display = 'none';
        content.innerHTML = `<p>No users</p><button id="getUsers">Get Users</button>`;
    }, 1000);

    document.getElementById('getUsers').addEventListener('click', fetchUsers);
}
document.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'getUsers') {
        fetchUsers().then(randomUsers => {
            displayUsers(randomUsers);
        });
    }
});

function displayUsers(users) {
    const content = document.getElementById('content');
    content.innerHTML = `<table>
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            ${users.map(user => `<tr>
                <td>${user.firstname}</td>
                <td>${user.lastname}</td>
                <td>${user.score}</td>
            </tr>`).join('')}
        </tbody>
    </table>`;
}

setTimeout(() => {
    const leftPanel = document.getElementById('leftPanel');
    leftPanel.innerHTML = `<input type="text" id="searchInput" placeholder="Search...">
    <button id="searchButton">Search</button>`;
    
    document.getElementById('searchButton').addEventListener('click', () => {
        const searchText = document.getElementById('searchInput').value.toLowerCase();
        const rows = document.querySelectorAll('#content table tbody tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchText));
            row.style.display = match ? '' : 'none';
        });
    });
}, 1000);

setTimeout(() => {
    const rightPanel = document.getElementById('rightPanel');
    rightPanel.innerHTML = '<p id="scoreSum">Score Sum: 0</p>';
    
    fetchUsers().then(users => {
        const scoreSum = users.reduce((sum, user) => sum + user.score, 0);
        document.getElementById('scoreSum').textContent = `Score Sum: ${scoreSum}`;
    });
}, 1000);

const rightPanel = document.getElementById('rightPanel');
const editCheckbox = document.createElement('input');
editCheckbox.type = 'checkbox';
editCheckbox.id = 'editTable';
rightPanel.appendChild(editCheckbox);

const editLabel = document.createElement
