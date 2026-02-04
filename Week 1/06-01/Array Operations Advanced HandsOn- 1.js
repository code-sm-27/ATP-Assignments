const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Task 1 to retrieve the inStock products
let task1 = cart.filter(i => i.inStock == true)
console.log(task1)

//Task 2 to create a new array with : {name,totalPrice}
let task2 = cart.map(i=> ({name: i.name,totalPrice: i.price*i.quantity}))
console.log(task2)

// Task 3 to find the price of complete cart
let task3 = cart.reduce((i,j)=> i+(j.price*j.quantity), 0)
console.log(task3)

//Task 4 to find the details of Mouse
let task4 = cart.find(i=>i.name === "Mouse")
console.log(task4)

//Task 5 to find Index of the item Keyboard
let task5 = cart.findIndex(i=>i.name === "Keyboard")
console.log(task5)

