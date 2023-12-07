import express from "express";
import taskRouter from "./task.route.js";

const router = express.Router();

router.use(taskRouter)

export default router;