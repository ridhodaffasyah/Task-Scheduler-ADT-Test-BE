//Task Controller
//Add Task, Get Task, Delete Task, Edit Task
import { Task } from "../models/task.model.js";

//Add Task
const addTask = async (req, res) => {
  try {
    const { title, desc, date, status } = req.body;

    //Convert date from string to date format
    const dateParts = date.split("/");
    const newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    const task = await Task.create({
      title,
      desc,
      status,
      date: newDate,
    });

    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get Task
const getTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Delete Task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Edit Task
const editTask = async (req, res) => {
  try {
    const { title, desc, date, status } = req.body;

    //Convert date from string to date format
    const dateParts = date.split("/");
    const newDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        desc,
        status,
        date: newDate,
      },
      { new: true }
    );

    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export default { addTask, getTask, deleteTask, editTask };
