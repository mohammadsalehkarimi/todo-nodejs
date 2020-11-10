const express = require("express");
const mongoose = require("mongoose");
const Work = require("./modules/work");
const app = express();

//db Uri
const dbURI =
  "mongodb+srv://saleh:13820623@cluster0.aw692.mongodb.net/nodejs-test?retryWrites=true&w=majority";
app.set("view engine", "ejs");

// conect to db
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });

//express urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/works", (req, res) => {
  Work.find()
    .then((result) => {
      res.render("index", { title: "ToDo", work: result });
    })
    .catch((err) => console.log(err));
});

app.post("/", (req, res) => {
  const work = new Work(req.body);
  work
    .save()
    .then((result) => {
      res.redirect("/works");
      console.log(result);
    })
    .catch((err) => console.log(err));
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  Work.findByIdAndDelete(id)
    .then((result) => {
      res.json();
    })
    .catch((err) => console.log(err));
});
