const marks = [78, 92, 35, 88, 40, 67];

let task1 = marks.filter(i => i>= 40)

let task2 = marks.map(i => i+5)

let task3 = marks.reduce((i,j)=>i>j?i:j,Number.MIN_VALUE)

let task4 = marks.find(i=>i<40)

let task5 = marks.findIndex(i => i === 92)

console.log(task1,'\n',task2,'\n',task3,'\n',task4,'\n',task5)