const express = require("express");
const router = express.Router();
const Work = require("../modules/work");

router.get("/", (req, res) => {
  Work.find()
    .then((result) => {
      res.render("index", { title: "ToDo", work: result });
    })
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const work = new Work(req.body);
  work
    .save()
    .then((result) => {
      res.redirect("/");
      console.log(result);
    })
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  Work.findByIdAndDelete(id)
    .then(() => {
      res.json();
    })
    .catch((err) => console.log(err));
});

module.exports = router;
