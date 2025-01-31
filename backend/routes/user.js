const express = require('express')

// Controller Functions
const {signUpUser, loginUser} = require('../controllers/userController')

const router = express.Router()

// Login Route
router.post('/login', loginUser)

// Signup route
router.post('/signup', signUpUser)

module.exports = router
