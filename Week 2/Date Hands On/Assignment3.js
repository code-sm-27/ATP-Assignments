let dobStr = "2000-05-15";
let dob = new Date(dobStr);
let current = new Date();

// Task 1: Calculate exact age

let age = current.getFullYear() - dob.getFullYear();
let monthDiff = current.getMonth() - dob.getMonth();
let dayDiff = current.getDate() - dob.getDate();

if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age = age - 1;
}

console.log("Exact Age:", age);