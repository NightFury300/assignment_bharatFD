import express, { json } from "express"
import faqRouter from "./routes/FAQ.routes.js"

const app = express()

app.use(json())

app.use("/api",faqRouter)

export {app};