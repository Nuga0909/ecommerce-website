import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../model/user.model.js";

// @desc    Register new user
// @route   POST /users
// @access  Public

export const registerUser = asyncHandler(async(req, res) => {
    const { firstName, lastName, emailAddress, password } = req.body;
    
    if (!firstName || !lastName || !emailAddress || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    //check if user exist
    const userExists = await User.findOne({emailAddress})
    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        firstName,
        lastName,
        emailAddress,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user.emailAddress
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Authenticate a user
// @route   POST /users/login
// @access  Public

export const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'login User'})
})

// @desc    Get user data
// @route   GET /users/me
// @access  Public

export const getMe = asyncHandler(async(req, res) => {
    res.json({message: 'User data display'})
})