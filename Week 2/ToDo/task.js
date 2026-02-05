import { validateTitle, validatePriority, validateDueDate } from './validator.js';

const tasks = [];

// 1. Add new task
export function addTask(title, priority, dueDate) {
    // Run all validations
    let isTitleValid = validateTitle(title);
    let isPriorityValid = validatePriority(priority);
    let isDateValid = validateDueDate(dueDate);

    if (!isTitleValid) {
        return "Error: Title must be at least 3 characters.";
    }
    if (!isPriorityValid) {
        return "Error: Priority must be low, medium, or high.";
    }
    if (!isDateValid) {
        return "Error: Due date must be in the future.";
    }

    // If all checks pass, create the object
    let newTask = {
        id: tasks.length + 1,
        title: title,
        priority: priority.toLowerCase(),
        dueDate: dueDate,
        completed: false
    };

    tasks.push(newTask);
    return "Success: Task added successfully.";
}

// 2. Get all tasks
export function getAllTasks() {
    return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
    let task = tasks.find(t => t.id === taskId);
    
    if (task) {
        task.completed = true;
        return "Success: Task marked as completed.";
    }
    return "Error: Task not found.";
}