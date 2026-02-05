// Given
let enrollmentDeadline = new Date("2026-01-20");

// Task 1: Check if today is before or after deadline
let current = new Date();
let task1;

if (current < enrollmentDeadline) {
    task1 = "Enrollment Open";
} else {
    task1 = "Enrollment Closed";
}
console.log(task1);

// Task 2: Validate user input date

let input = "2026-02-30";
let d = new Date(input);

let task2;
if (d.getDate() == 30) {
    task2 = "Valid Date";
} else {
    task2 = "Invalid Date";
}
console.log(task2);