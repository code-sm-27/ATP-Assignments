const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Task 1: Calculate total marks (using Object.values to get the numbers array)
let task1 = Object.values(marks).reduce((i, j) => i + j, 0)
console.log(task1)

// Task 2: Calculate average marks
let task2 = task1 / Object.keys(marks).length
console.log(task2)

// Task 3: Find the highest scoring subject (using reduce on keys to compare values)
let task3 = Object.keys(marks).reduce((i, j) => marks[i] > marks[j] ? i : j)
console.log(task3)

// Task 4: Add a new subject computer: 90
marks.computer = 90
console.log(marks)