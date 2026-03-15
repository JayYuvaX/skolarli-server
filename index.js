import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import questionRoutes from "./routes/questionRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// connect database
connectDB()

// root route
app.get("/", (req, res) => {
    res.send("Skolarli API is running 🚀")
})

// API route
app.use("/api/questions", questionRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})