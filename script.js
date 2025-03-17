'use strict'
const API="https://jsonplaceholder.typicode.com/users"
const container = document.querySelector('.container')
fetch(API)
.then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data);

})



