import { getProductById, checkStock } from './product.js';

let cart = [];

export function addToCart(productId, quantity) {
    let prod = getProductById(productId);
    
    // Check if we have enough stock first
    let hasStock = checkStock(productId, quantity);
    
    if (hasStock) {
        // Check if product is already in cart
        let existingItemIndex = cart.findIndex(i => i.id === productId);
        
        if (existingItemIndex !== -1) {
            // Item exists, just increase count
            cart[existingItemIndex].quantity += quantity;
            return "Quantity Updated";
        } else {
            // Item is new, push to array
            cart.push({
                id: prod.id,
                name: prod.name,
                price: prod.price,
                quantity: quantity
            });
            return "Added to Cart";
        }
    } else {
        return "Out of Stock";
    }
}

export function removeFromCart(productId) {
    // filter keeps everything EXCEPT the id we want to remove
    cart = cart.filter(i => i.id !== productId);
    return "Item Removed";
}

export function updateQuantity(productId, newQuantity) {
    let hasStock = checkStock(productId, newQuantity);
    
    if (hasStock) {
        let item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity = newQuantity;
            return "Updated Successfully";
        }
    }
    return "Stock Issue or Item Not Found";
}

export function getCartItems() {
    return cart;
}

export function getCartTotal() {
    // simple reduce to sum up price * qty
    let total = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
    return total;
}

export function clearCart() {
    cart = [];
}