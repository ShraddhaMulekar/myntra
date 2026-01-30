import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDb } from "./config/connectDb.js"
import { authRouter } from "./routes/auth/auth.route.js"
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/auth", authRouter)

app.listen(port, async ()=>{
    await connectDb()
    console.log(`server started on http://localhost:${port}`)
})