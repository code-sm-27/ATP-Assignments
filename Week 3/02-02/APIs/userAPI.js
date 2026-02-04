import exp from "express";
import { userModel } from "../models/userModel.js"; 
import { productModel } from "../models/productModel.js";
import bcrypt from "bcrypt"

export const userApp = exp.Router();

// 1. GET all users
userApp.get("/users", async (req, res, next) => {
    try {
        let usersList = await userModel.find({});
        res.json({ message: "Users data retrieved successfully", usersList });
    } catch (err) {
        next(err);
    }
});

// 2. GET single user by ID (The missing route!)
userApp.get("/users/:id", async (req, res, next) => {
    try {
        let user = await userModel.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User found", user });
    } catch (err) {
        next(err);
    }
});

// 3. POST create a new user
userApp.post("/users", async (req, res, next) => {
    try {
        let newUser = req.body;
        await new userModel(newUser).validate();

        // 1. Hash the password before creating the document
        // We take the plain text password from req.body.password
        let hashedPassword = await bcrypt.hash(newUser.password, 10);

        // 2. Replace the plain password with the hashed one
        newUser.password = hashedPassword;

        // 3. Create the document and save it to the database
        let userDoc = new userModel(newUser);
        await userDoc.save();

        res.status(201).json({ 
            message: "User created successfully", 
            user: userDoc // Optional: return the user (minus the password usually!)
        });
    } catch (err) {
        next(err);
    }
});
userApp.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res, next) => {
    try {
        const { uid, pid } = req.params;

        // Try to find if item exists
        const user = await userModel.findOne({ _id: uid, "cart.product": pid });

        if (user) {
            // Increment existing
            const result = await userModel.findOneAndUpdate(
                { _id: uid, "cart.product": pid },
                { $inc: { "cart.$.quantity": 1 } }, 
                { new: true }
            ).populate("cart.product");
            res.status(200).json({ message: "Updated", payload: result });
        } else {
            // Add NEW with explicit quantity
            const result = await userModel.findByIdAndUpdate(
                uid,
                { $push: { cart: { product: pid, quantity: 1 } } }, // Explicitly set it here
                { new: true }
            ).populate("cart.product");
            res.status(200).json({ message: "Added", payload: result });
        }
    } catch (err) {
        next(err);
    }
});

// 4. PUT update user by ID (The other missing route!)
userApp.put("/users/:id", async (req, res, next) => {
    try {
        let user = await userModel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true, runValidators: true }
        );
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User updated successfully", user });
    } catch (err) {
        next(err);
    }
});


// 6. DELETE user by ID
userApp.delete("/users/:id", async (req, res, next) => {
    try {
        let deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "User not found" });
        res.json({ message: "User deleted", deletedUser });
    } catch (err) {
        next(err);
    }
});

userApp.get("/users/:uid", async (req, res, next) => {
    try {
        let { uid } = req.params;

        // Populate the 'product' field inside the 'cart' array
        let userObj = await userModel.findById(uid).populate("cart.product");

        if (!userObj) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User retrieved", payload: userObj });
    } catch (err) {
        next(err);
    }
});