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
const getUserUpdate = asyncHandler(async(req, res) => {

    try{
    const ic = req.params.USER_IC;

    const {
        USER_NAME, 
        USER_GENDER, 
        USER_PHONE_NO, 
        USER_EMAIL, 
        USER_BIRTH_DATE, 
        USER_RACE, 
        USER_NATIONALITY, 
        USER_ADDRESS, 
        USER_EDUCATIONAL_STATUS,
        USER_EMPLOYMENT_POSITION, 
        USER_SALARY, 
        USER_MARRIAGE_STATUS, 
        USER_PARTNER_IC } = req.body;

    const updatedData = {
        USER_NAME, 
        USER_GENDER, 
        USER_PHONE_NO, 
        USER_EMAIL, 
        USER_BIRTH_DATE, 
        USER_RACE, 
        USER_NATIONALITY, 
        USER_ADDRESS, 
        USER_EDUCATIONAL_STATUS,
        USER_EMPLOYMENT_POSITION, 
        USER_SALARY, 
        USER_MARRIAGE_STATUS, 
        USER_PARTNER_IC, 
    };

    const options = {new: true};

    const result = await User.findOneAndUpdate(ic, updatedData, options);

    res.send(result);

} catch (error) {
    res.status(400).json({ message: "Cant update profile" });
}
})

module.exports = { registerUser, getUserByEmail, getUserUpdate };


