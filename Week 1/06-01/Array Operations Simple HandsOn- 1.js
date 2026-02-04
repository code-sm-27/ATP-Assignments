//Assignment 1

const temperatures = [32,35,28,40,38,30,42]

let task1 = temperatures.filter(i => i>35)

let task2 = temperatures.map(i=> i*(9/5)+32)

let sum = temperatures.reduce((i,j)=>i+j)

let task3 = sum/temperatures.length

let task4 = temperatures.find(i=>i>40)

let task5 = temperatures.findIndex(i=>i===28)

console.log(task1,task2,task3,task4,task5)


