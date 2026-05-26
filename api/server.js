const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect("mongodb://localhost:27017/school_db");

const studentSchema = new mongoose.Schema({
  name: String,
  grade: Number,
  score: Number,
});

const Student = mongoose.model("Student", studentSchema);

// Total students
app.get("/api/students/total", async (req, res) => {
  const total = await Student.countDocuments();
  res.json({ total });
});

// Passed (score >= 50)
app.get("/api/students/passed", async (req, res) => {
  const total = await Student.countDocuments({ score: { $gte: 50 } });
  res.json({ total });
});

// Failed (score < 50)
app.get("/api/students/failed", async (req, res) => {
  const total = await Student.countDocuments({ score: { $lt: 50 } });
  res.json({ total });
});

// Per grade
app.get("/api/students/by-grade", async (req, res) => {
  const result = await Student.aggregate([
    { $group: { _id: "$grade", total: { $sum: 1 } } },
    { $sort: { _id: 1 } },
  ]);
  res.json(result);
});

app.listen(3000, () => console.log("Server running on port 3000"));
