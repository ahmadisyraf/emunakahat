const express = require("express");
const User = require("../model/user.model");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
    const username = req.body.username;
    const email = req.body.username;

    if (!username || !email) {
        res.status(400);
        throw new Error("All field are mandatory");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exist");
    }
    const user = await User.create({
        username,
        email
    });

    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(400);
        throw new Error("User data us not valid");
    }

    res.json({ message: "Register the user" });
});

const getAllUser = asyncHandler(async (req, res) => {
    const user = await User.find();
    
    if(!user) {
        res.status(404);
        throw new Error("User not found");
    }

    res.status(201).json({ user });
});

module.exports = { registerUser, getAllUser };


