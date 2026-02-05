// 1. Validate task title (not empty, min 3 chars)
export function validateTitle(title) {
    if (title && title.length >= 3) {
        return true;
    }
    return false;
}

// 2. Validate priority (must be: low, medium, high)
export function validatePriority(priority) {
    // using toLowerCase to make it case-insensitive
    let p = priority.toLowerCase();
    if (p === 'low' || p === 'medium' || p === 'high') {
        return true;
    }
    return false;
}

// 3. Validate due date (must be future date)
export function validateDueDate(dateString) {
    let inputDate = new Date(dateString);
    let today = new Date();
    
    // We only care about the time difference
    if (inputDate > today) {
        return true;
    }
    return false;
}