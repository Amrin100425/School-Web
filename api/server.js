const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URI);

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

app.get("/api/students/grade2", async (req, res) => {
  const totalG2 = await Student.countDocuments({
    grade: 2,
  });
  res.json({ totalG2 });
});

app.get("/api/students/grade2girl", async (req, res) => {
  const totalGG2 = await Student.countDocuments({
    grade: 2,
    gender: "ស",
  });

  res.json({ totalGG2 });
});

app.get("/api/students/grade2", async (req, res) => {
  const totalG2 = await Student.countDocuments({
    grade: 2,
  });
  res.json({ totalG2 });
});

app.get("/api/students/grade2girl", async (req, res) => {
  const totalGG2 = await Student.countDocuments({
    grade: 2,
    gender: "ស",
  });

  res.json({ totalGG2 });
});

app.get("/api/students/grade3", async (req, res) => {
  const totalG3 = await Student.countDocuments({
    grade: 3,
  });
  res.json({ totalG3 });
});

app.get("/api/students/grade3girl", async (req, res) => {
  const totalGG3 = await Student.countDocuments({
    grade: 3,
    gender: "ស",
  });

  res.json({ totalGG3 });
});

app.get("/api/students/grade4", async (req, res) => {
  const totalG4 = await Student.countDocuments({
    grade: 4,
  });
  res.json({ totalG4 });
});

app.get("/api/students/grade4girl", async (req, res) => {
  const totalGG4 = await Student.countDocuments({
    grade: 4,
    gender: "ស",
  });

  res.json({ totalGG4 });
});

app.get("/api/students/grade5", async (req, res) => {
  const totalG5 = await Student.countDocuments({
    grade: 5,
  });
  res.json({ totalG5 });
});

app.get("/api/students/grade5girl", async (req, res) => {
  const totalGG5 = await Student.countDocuments({
    grade: 5,
    gender: "ស",
  });

  res.json({ totalGG5 });
});

app.get("/api/students/grade6", async (req, res) => {
  const totalG6 = await Student.countDocuments({
    grade: 6,
  });
  res.json({ totalG6 });
});

app.get("/api/students/grade6girl", async (req, res) => {
  const totalGG6 = await Student.countDocuments({
    grade: 6,
    gender: "ស",
  });

  res.json({ totalGG6 });
});
module.exports = app;
