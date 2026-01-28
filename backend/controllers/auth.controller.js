import express from "express"

export const authRouter = express.Router()

authRouter.get("/", (req, res)=>{
    res.send("Auth Route is Working")
})
