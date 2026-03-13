import express, { json } from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import questionRoutes from "./routes/questionRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(json())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("MongoDB connected")

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch(err => console.log(err))

app.use("/api/questions", questionRoutes)