const { Router } = require("express");
const { createUser, loginUser, validateEmail, getUserWPost} = require("../controllers/userControl");


const userRoute = Router();

userRoute.post('/signUp', createUser, validateEmail)
userRoute.post('/login', loginUser)
userRoute.get('/findUserPost', getUserWPost)

module.exports = userRoute