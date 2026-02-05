import { addTask, getAllTasks, completeTask } from './task.js';

console.log("=== Todo App Started ===");

// 1. Add some tasks
console.log("\n--- Adding Tasks ---");
// Valid task
console.log(addTask("Buy Groceries", "high", "2026-03-10")); 

// Invalid Title
console.log(addTask("Hi", "medium", "2026-04-01")); 

// Invalid Priority
console.log(addTask("Complete Assignment", "urgent", "2026-02-28")); 

// Invalid Date (Past)
console.log(addTask("Pay Bills", "low", "2020-01-01")); 

// Another Valid task
console.log(addTask("Learn React", "medium", "2026-12-25")); 


// 2. Display all tasks
console.log("\n--- All Tasks ---");
console.log(getAllTasks());


// 3. Complete a task
console.log("\n--- Completing Task 1 ---");
console.log(completeTask(1));


// 4. Display all tasks again to verify change
console.log("\n--- Final Task List ---");
console.log(getAllTasks());