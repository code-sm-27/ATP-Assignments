import { getAllProducts, searchProducts, getProductsByCategory } from './product.js';
import { addToCart, getCartItems, getCartTotal, updateQuantity, removeFromCart } from './cart.js';
import { processPayment } from './payment.js';

console.log('=== MY SHOPPING APP ===');

// 1. Show all products
console.log('--- Catalog ---');
console.log(getAllProducts());

// 2. Search
console.log('\n--- Searching "Phone" ---');
console.log(searchProducts('phone'));

// 3. Add to cart
console.log('\n--- Adding Items ---');
console.log(addToCart(1, 2)); // Laptop
console.log(addToCart(3, 3)); // Headphones
console.log(addToCart(1, 1)); // Adding more Laptop

// 4. View Cart
console.log('\n--- My Cart ---');
console.log(getCartItems());
console.log('Total Value:', getCartTotal());

// 5. Update
console.log('\n--- Updating Quantity ---');
updateQuantity(1, 2); 
console.log("Updated Laptop qty to 2");

// 6. Remove
console.log('\n--- Removing Headphones ---');
removeFromCart(3);
console.log(getCartItems());

// 7. Checkout
console.log('\n--- Checkout ---');
let myOrder = processPayment('upi', 'WELCOME10');
console.log(myOrder);