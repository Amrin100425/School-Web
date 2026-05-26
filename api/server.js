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
// Girl Student
app.get("/api/students/gender", async (req, res) => {
  const totalGirl = await Student.countDocuments({
    gender: "ស",
  });

  res.json({ totalGirl });
});
app.get("/api/students/grade", async (req, res) => {
  const totalG1 = await Student.countDocuments({
    grade: 1,
  });
  res.json({ totalG1 });
});
app.get("/api/students/grade1girl", async (req, res) => {
  const totalGG1 = await Student.countDocuments({
    grade: 1,
    gender: "ស",
  });

  res.json({ totalGG1 });
});
app.listen(3000, () => console.log("Server running on port 3000"));
