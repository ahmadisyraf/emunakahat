const express = require("express");
const User = require("../model/user.model");
const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
    const { USER_IC, USER_NAME, USER_GENDER, USER_PHONE_NO, USER_EMAIL } = req.body;

    if (!USER_IC || !USER_NAME, !USER_GENDER || !USER_PHONE_NO || !USER_EMAIL) {
        res.status(400);
        throw new Error("All field are mandatory");
    }

    //exist user based on IC
    const userExist = await User.findOne({ USER_IC });

    if (userExist) {
        res.status(400);
        throw new Error("User already exist");
    }
    const user = await User.create({
        USER_IC,
        USER_NAME,
        USER_GENDER,
        USER_PHONE_NO,
        USER_EMAIL
    });

    //get user data based on IC
    const userData = await User.findOne({ USER_IC });

    if (user) {
        res.status(200).json({ userData });
    } else {
        res.status(400);
        throw new Error("Failed to register user");
    }

    res.status(200).json({ userData });
});

//get user by email
const getUserByEmail = asyncHandler(async (req, res) => {

    const email = req.params.USER_EMAIL;

    if (!email) {
        res.status(400);
        throw Error("All field are mandatory");
    }

    const user = await User.findOne({ "USER_EMAIL": email });

    if (user) {
        res.status(200).json({ user });
    } else {
        res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ user });
});

//update user data
const updateUser = asyncHandler(async (req, res) => {
    const EMAIL = req.params.USER_EMAIL;
    const data = req.body;

    try {
        const result = await User.findOneAndUpdate({ "USER_EMAIL": EMAIL }, data, { upsert: true, new: true });

        if (result) {
            res.status(200).json({ result });
        } else {
            res.status(400).json({ message: "Failed to update" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to update user" });
    }
});

const getUserByIC = asyncHandler(async (req, res) => {
    const ic = req.params.ic;

    try {
        const result = await User.findOne({ "USER_IC": ic });

        if (result) {
            res.status(201).json(result);
        }
    } catch (err) {
        throw new Error(err);
    }
})

module.exports = { registerUser, getUserByEmail, updateUser, getUserByIC };


