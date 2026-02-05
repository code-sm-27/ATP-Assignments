// We import the courses to merge details
import { getPublishedCourses } from './courseEngine.js';

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

// 1. Merge cart with courses
export function mergeCartCourse() {
    let allCourses = getPublishedCourses(); // Assuming we only sell published ones
    
    // We map over the cart to add course details to it
    let fullCart = cart.map((cartItem) => {
        // Find the matching course details
        let courseDetails = allCourses.find((c) => c.id === cartItem.courseId);
        
        if (courseDetails) {
            return {
                ...courseDetails, // Spread title, price, etc.
                qty: cartItem.qty
            };
        }
    });
    
    // Filter out undefined in case a course wasn't found
    return fullCart.filter(item => item !== undefined);
}

// 2. Calculate total cart amount
export function getCartTotal() {
    let fullCart = mergeCartCourse();
    let total = fullCart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    return total;
}

// 3. Increase quantity immutably
export function increaseQuantity(courseId, newQty) {
    let currentCart = mergeCartCourse();
    
    // mapping to create a new array with updated qty
    let updatedCart = currentCart.map((item) => {
        if (item.id === courseId) {
            // return a new object with updated qty
            return { ...item, qty: newQty };
        }
        return item;
    });
    return updatedCart;
}

// 4. Remove a course from cart
export function removeItem(courseId) {
    let currentCart = mergeCartCourse();
    // Filter is better for removing immutably than splice
    let remainingItems = currentCart.filter((item) => item.id !== courseId);
    return remainingItems;
}

// 5. Check if all cart items are paid courses
export function checkIfAllPaid() {
    let currentCart = mergeCartCourse();
    let allPaid = true;
    
    for (let item of currentCart) {
        if (item.price === 0) {
            allPaid = false;
            break;
        }
    }
    return allPaid;
}