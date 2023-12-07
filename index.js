// Index.js
// Path: server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import { url } from "./config/db.config.js";

// Set up express
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

// Set up mongoose
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });
  

// Set up routes
app.use("/", router);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error",
  });
});

// Set up port
const port = process.env.PORT || 3000;

// Set up server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

export default app;