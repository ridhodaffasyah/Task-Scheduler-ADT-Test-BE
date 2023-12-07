import express from 'express';
import taskController from '../controllers/task.controller.js';

const taskRouter = express.Router();

taskRouter.post('/task', taskController.addTask);
taskRouter.get('/task', taskController.getTask);
taskRouter.delete('/task/:id', taskController.deleteTask);

export default taskRouter;