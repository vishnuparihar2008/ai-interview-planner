const { Router } = require("express");
const authControllers = require("../controllers/auth.controller");

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access public
 */
authRouter.post("/register", authControllers.registerUserController);

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access public
 */
authRouter.post("/login", authControllers.loginUserController);

module.exports = authRouter;
