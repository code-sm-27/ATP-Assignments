const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

// 1. Get only active users
export function getActiveUsers() {
    let activeUsers = users.filter((user) => user.active === true);
    return activeUsers;
}

// 2. Extract names of active users
export function getActiveUserNames() {
    let activeList = getActiveUsers();
    // Using map to extract just the name string
    let names = activeList.map((user) => {
        return user.name;
    });
    return names;
}

// 3. Check if any admin exists
export function isAdminExist() {
    let exist = false;
    for (let user of users) {
        if (user.role === 'admin') {
            exist = true;
            break; 
        }
    }
    return exist;
}

// 4. Find user by id
export function findUserById(id) {
    let user = users.find((u) => u.id === id);
    return user;
}

// 5. Deactivate a user immutably
export function deactivateUser(id) {
    // Create a deep copy first
    let usersCopy = structuredClone(users);
    
    let updatedUsers = usersCopy.map((user) => {
        if (user.id === id) {
            user.active = false;
        }
        return user;
    });
    return updatedUsers;
}