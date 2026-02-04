const courses = ["javascript", "react", "node", "mongodb", "express"];

let task1 = courses.filter(i=>i.length>5)

let task2 = courses.map(i=>i.toUpperCase())

let task3 = courses.reduce((i,j) => i+' | '+j)

let task4 = courses.find(i => i === 'react')

let task5 = courses.findIndex(i => i === 'node')

console.log(task1,'\n',task2,'\n',task3,'\n',task4,'\n',task5)