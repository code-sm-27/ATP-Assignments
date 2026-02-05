// Product database
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  { id: 3, name: "Headphones", price: 2000, stock: 25, category: "accessories" },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" }
];

export function getProductById(id) {
    let item = products.find(i => i.id === id);
    return item;
}

export function getAllProducts() {
    return products;
}

export function getProductsByCategory(category) {
    let items = products.filter(i => i.category === category);
    return items;
}

export function searchProducts(query) {
    // converting both to lowercase to match easily
    let items = products.filter(i => i.name.toLowerCase().includes(query.toLowerCase()));
    return items;
}

export function checkStock(productId, quantity) {
    let item = products.find(i => i.id === productId);
    if (item.stock >= quantity) {
        return true;
    }
    return false;
}

export function reduceStock(productId, quantity) {
    // using forEach to update the original array
    products.forEach(i => {
        if (i.id === productId) {
            i.stock = i.stock - quantity;
        }
    });
}