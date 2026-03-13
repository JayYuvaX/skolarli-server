import express, { json } from "express"
import { connect } from "mongoose"
import cors from "cors"
import { config } from "dotenv"

const app = express()

config()

app.use(cors())
app.use(json())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err))


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})