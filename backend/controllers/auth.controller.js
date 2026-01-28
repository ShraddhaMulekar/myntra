import express from "express"
import { registerPage } from "../pages/register.page.js"
import { loginPage } from "../pages/login.page.js"

export const authRouter = express.Router()

authRouter.post("/register", registerPage)
authRouter.post("/login", loginPage)
