import express from "express"
import { registerPage } from "../../pages/auth/register.page.js"
import { loginPage } from "../../pages/auth/login.page.js"

export const authRouter = express.Router()

authRouter.post("/register", registerPage)
authRouter.post("/login", loginPage)
