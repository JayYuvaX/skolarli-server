import { Schema, model } from "mongoose"

const QuestionSchema = new Schema({
question: String,
options: [String]
})

export default model("Question", QuestionSchema)