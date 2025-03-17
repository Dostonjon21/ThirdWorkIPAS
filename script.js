'use strict'
const API = "https://jsonplaceholder.typicode.com/users"
const container = document.querySelector('.container')

fetch(API)
.then((response) => response.json())
.then((data) => {
    container.innerHTML = ""; 
    data.forEach((user) => {
        container.innerHTML += `
            <div class="user-card">
                <img src="https://via.placeholder.com/150" alt="Profile Picture">
                <h2>${user.name}</h2>
                <p>Work: ${user.company.name}</p>
                <a class="social" href="${user.website}" target="_blank">Visit Website</a>
                <p>Email: ${user.email}</p>
                <button class="btn">More info</button>
            </div>
        `;
    });
})
