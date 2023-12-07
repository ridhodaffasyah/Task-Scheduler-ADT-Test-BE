import mongoose from "mongoose";
var Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    desc: String,
    date: Date,
    status: String
});

const Task = mongoose.model("Task", taskSchema);

export { Task };