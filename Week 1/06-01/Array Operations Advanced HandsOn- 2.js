const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Task 1 filter() students who passed (marks >= 40)
let task1 = students.filter(i => i.marks >= 40)
console.log(task1)

//Task 2 map() to add a grade field
let task2 = students.map(i => ({...i, 
    grade: i.marks >= 90 ? "A" : i.marks >= 75 ? "B" : i.marks >= 60 ? "C" : "D"
}))
console.log(task2)

//Task 3 reduce() to calculate average marks
let task3 = students.reduce((i,j) => i + j.marks, 0) / students.length
console.log(task3)

//Task 4 find() the student who scored 92
let task4 = students.find(i => i.marks === 92)
console.log(task4)

//Task 5 findIndex() of student "Kiran"
let task5 = students.findIndex(i => i.name === "Kiran")
console.log(task5)