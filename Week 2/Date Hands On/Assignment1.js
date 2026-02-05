let currDate = new Date();

// Task 1 Create a Date object for current date & time
let task1 = currDate
console.log(task1)

// Task 2 Extract and display components
let task2 = {
    year: currDate.getFullYear(),
    month: currDate.getMonth() + 1, // Adding 1 because months start at 0
    date: currDate.getDate(),
    day: currDate.getDay(),
    hours: currDate.getHours(),
    minutes: currDate.getMinutes(),
    seconds: currDate.getSeconds()
}
console.log(task2)

// Task 3 Display the date in format: DD-MM-YYYY HH:mm:ss

let task3 = currDate.getDate() + "-" + (currDate.getMonth() + 1) + "-" + currDate.getFullYear() + " " + currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds()
console.log(task3)