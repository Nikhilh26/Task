const express = require("express");
const RegistrationControllers = require("./../controllers/loginController.js");

const authRouter = express.Router();

authRouter.post('/register', RegistrationControllers.registerController);

authRouter.post('/login', RegistrationControllers.loginController);

module.exports = authRouter;