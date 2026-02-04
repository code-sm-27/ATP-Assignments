const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Task 1 filter() employees from IT department
let task1 = employees.filter(i => i.department === "IT")
console.log(task1)

//Task 2 map() to add: netSalary = salary + 10% bonus
let task2 = employees.map(i => ({...i, netSalary: i.salary + (i.salary * 0.10)}))
console.log(task2)

//Task 3 reduce() to calculate total salary payout
let task3 = employees.reduce((i,j) => i + j.salary, 0)
console.log(task3)

//Task 4 find() employee with salary 30000
let task4 = employees.find(i => i.salary === 30000)
console.log(task4)

//Task 5 findIndex() of employee "Neha"
let task5 = employees.findIndex(i => i.name === "Neha")
console.log(task5)