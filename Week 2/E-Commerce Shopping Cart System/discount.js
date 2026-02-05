const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(code, total, cartItems) {
    // check if coupon key exists in object
    if (coupons[code]) {
        let coup = coupons[code];
        if (total >= coup.minAmount) {
            return { valid: true, msg: "Coupon Applied" };
        }
        return { valid: false, msg: "Minimum amount not met" };
    }
    return { valid: false, msg: "Invalid Coupon Code" };
}

export function calculateDiscount(code, total) {
    if (coupons[code]) {
        let coup = coupons[code];
        if (coup.type === 'flat') {
            return coup.value;
        } else {
            // percentage calc
            return (total * coup.value) / 100;
        }
    }
    return 0;
}

export function applyDiscount(total, code, cartItems) {
    let check = validateCoupon(code, total, cartItems);
    let discAmount = 0;
    
    if (check.valid) {
        discAmount = calculateDiscount(code, total);
    }
    
    return {
        originalTotal: total,
        discount: discAmount,
        finalTotal: total - discAmount,
        message: check.msg
    };
}