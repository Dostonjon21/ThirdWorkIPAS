'use strict'
const API="https://jsonplaceholder.typicode.com/"

const container = document.querySelect('.container')
const fetchUser=(resource)=>{
    const data=fetch(resource)
    console.log(data);
}
fetchUser(API)