const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//Task 1 filter() all credit transactions
let task1 = transactions.filter(i => i.type === "credit")
console.log(task1)

//Task 2 map() to extract only transaction amounts
let task2 = transactions.map(i => i.amount)
console.log(task2)

//Task 3 reduce() to calculate final account balance (credit adds, debit subtracts)
let task3 = transactions.reduce((i,j) => j.type === "credit" ? i + j.amount : i - j.amount, 0)
console.log(task3)

//Task 4 find() the first debit transaction
let task4 = transactions.find(i => i.type === "debit")
console.log(task4)

//Task 5 findIndex() of transaction with amount 10000
let task5 = transactions.findIndex(i => i.amount === 10000)
console.log(task5)