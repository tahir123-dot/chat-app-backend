import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.use("/api", (req, res) => {
  res.send("server is live");
});

await connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
