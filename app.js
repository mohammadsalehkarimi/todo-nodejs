const express = require("express");
const mongoose = require("mongoose");
const workRouter = require("./routes/workRouts");

const app = express();

//db Uri
const dbURI =
  "mongodb+srv://saleh:13820623@cluster0.aw692.mongodb.net/nodejs-test?retryWrites=true&w=majority";
app.set("view engine", "ejs");

// conect to db
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });

//express urlencoded
app.use(express.urlencoded({ extended: true }));

// work Router
app.use(workRouter);
