import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(method, code = null) {
    let items = getCartItems();
    let total = getCartTotal();
    
    if (items.length === 0) {
        return "Cart is Empty";
    }

    // Handle discount logic
    let finalAmount = total;
    let discountAmt = 0;
    
    if (code) {
        let discountData = applyDiscount(total, code, items);
        finalAmount = discountData.finalTotal;
        discountAmt = discountData.discount;
    }

    // Check payment method
    let validPayment = validatePaymentMethod(method);
    
    if (validPayment) {
        // Reduce stock for every item bought
        items.forEach(i => {
            reduceStock(i.id, i.quantity);
        });

        // Copy items for the receipt before clearing
        let orderedItems = [...items];
        
        clearCart();
        
        return {
            orderId: generateOrderId(),
            items: orderedItems,
            subtotal: total,
            discount: discountAmt,
            total: finalAmount,
            paymentMethod: method,
            status: "Success",
            message: "Order Placed Successfully"
        };
    } else {
        return { status: "Failed", message: "Invalid Payment Method" };
    }
}

export function validatePaymentMethod(method) {
    if (method === 'card' || method === 'upi' || method === 'cod') {
        return true;
    }
    return false;
}

function generateOrderId() {
    // simple random ID
    return 'ORD' + Math.floor(Math.random() * 100000);
}