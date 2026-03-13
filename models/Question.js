import { Schema, model } from "mongoose"

const QuestionSchema = new Schema({
    question: String,
    options: [String],
    correctAnswer: Number

})

export default model("Question", QuestionSchema)