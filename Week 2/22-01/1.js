console.log("Asynchronous JavaScript: Introduction");

console.log("person1 ordered biryani"); // non blocking synchronous code
setTimeout(() =>{console.log("person1 received biryani");}, 5000) // blocking asynchronous code
console.log("person2 ordered pizza"); // non blocking synchronous code
setTimeout(() =>{console.log("person2 received pizza");}, 2000) // blocking asynchronous code
console.log("person3 ordered pasta"); // non blocking synchronous code
setTimeout(() =>{console.log("person3 received pasta");}, 3000) // blocking asynchronous code
console.log("helloo");

