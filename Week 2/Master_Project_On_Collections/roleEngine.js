const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// 1. Get all role names
export function getRoles() {
    let roleNames = [];
    for (let key in roles) {
        roleNames.push(key);
    }
    return roleNames;
}

// 2. Check if student can delete
export function checkStudent() {
    let studentPerms = roles.student;
    let canDelete = false;
    
    for (let p of studentPerms) {
        if (p === 'delete') {
            canDelete = true;
            break;
        }
    }
    return canDelete;
}

// 3. Create a flat list of all unique permissions
export function allPermissions() {
    // Since admin has everything, we can just return admin permissions
    // But to be safe, let's combine them
    let combined = [...roles.admin, ...roles.student];
    
    // simple way to remove duplicates using logic
    let unique = [];
    for(let p of combined) {
        if(!unique.includes(p)){
            unique.push(p);
        }
    }
    return unique;
}

// 4. Add new role moderator immutably
export function addRole(roleName, permissions) {
    let rolesCopy = structuredClone(roles);
    rolesCopy[roleName] = permissions;
    return rolesCopy;
}