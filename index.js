const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;
app.use(cors());
const categories = require("./data/catagroy.json");
const courses = require("./data/generated.json");
app.get("/", (req, res) => {
  res.send("Courses Api Running");
});

// fast 

app.get("/courses-categories", (req, res) => {
  res.send(categories);
});
app.get("/courses-categories/:id", (req, res) => {
  const id = req.params.id;
  const coursesCategories = courses.find((c) => c.id == id);
  res.send(coursesCategories);
});


app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourses = courses.find((course) => course.id === id);
  res.send(selectedCourses);
});

app.listen(port, () => {
  console.log("learning programming server on port", port);
});