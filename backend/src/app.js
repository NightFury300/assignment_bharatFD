import express, { json } from "express"
import faqRouter from "./routes/FAQ.routes.js"
import cors from "cors"

const app = express()

app.use(json())
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use("/api",faqRouter)

export {app};