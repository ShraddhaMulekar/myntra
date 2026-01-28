import express from "express"
import { registerPage } from "../pages/register.page.js"

export const authRouter = express.Router()

authRouter.post("/register", registerPage)
