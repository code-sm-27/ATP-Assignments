
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
}

//Task 1 Read and print the user’s name and email
console.log(user.name, user.email)

//Task 2 Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01"
console.log(user)

//Task 3 Update role from "student" to "admin"
user.role = "admin"
console.log(user)

//Task 4 Delete the isActive property
delete user.isActive
console.log(user)

//Task 5 Use Object.keys() to list all remaining fields
console.log(Object.keys(user))