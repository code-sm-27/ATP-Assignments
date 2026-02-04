//import express module
import exp from "express";
//create server
const app = exp();
let users=[];
//define port number
app.listen(3000, () =>
  console.log("HTTP Server is listening on port 3000..")
);
//body parseing middleware
app.use(exp.json())
//create http server
app.get("/users", (req, res) => {
  res.status(200).json({ message:"all users",payload:users});//message,payload
});
// post request (create user api)
app.post("/users", (req, res) => {
 let newUser=req.body;
  //insert new users to users array
  users.push(newUser);
  res.status(200).json({ message: "User Created", payload: newUser });
});
// put request (update user api)
app.put("/users/:id", (req, res) => {
  //get modified user from req body
  //find the user by id and update the user details
  //if user not found send user not found message
  //if user found update the user details and send success message
  //send res
  res.json({ message: "Put Request Called for user" });
});
// delete request (delete user api)
app.delete("/users/:id", (req, res) => {
  res.json({ message: "Delete Request Called" });
});

let products = [];

app.get("/products", (req, res) => {
    res.status(200).json({ message: "all products", payload: products });
});

app.get("/products/:id", (req, res) => {
    const product = products.find(p => p.productId == req.params.id || p.brand === req.params.id);
    if (product) {
        res.status(200).json({ message: "product found", payload: product });
    } else {
        res.status(404).json({ message: "product not found" });
    }
});

app.post("/products", (req, res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.status(201).json({ message: "Product Created", payload: newProduct });
});

app.put("/products/:id", (req, res) => {
    const index = products.findIndex(p => p.productId == req.params.id);
    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        res.status(200).json({ message: "Product Updated", payload: products[index] });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});

app.delete("/products/:id", (req, res) => {
    const index = products.findIndex(p => p.productId == req.params.id);
    if (index !== -1) {
        const deletedProduct = products.splice(index, 1);
        res.status(200).json({ message: "Product Deleted", payload: deletedProduct[0] });
    } else {
        res.status(404).json({ message: "Product not found" });
    }
});