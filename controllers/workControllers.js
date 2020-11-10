const Work = require("../modules/work");

const allWork = (req, res) => {
  Work.find()
    .then((result) => {
      res.render("index", { title: "ToDo", work: result });
    })
    .catch((err) => console.log(err));
};

const newWork = (req, res) => {
  const work = new Work(req.body);
  work
    .save()
    .then((result) => {
      res.redirect("/");
      console.log(result);
    })
    .catch((err) => console.log(err));
};

const deleteWork = (req, res) => {
  const id = req.params.id;
  console.log(id);

  Work.findByIdAndDelete(id)
    .then(() => {
      res.json();
    })
    .catch((err) => console.log(err));
};

module.exports = {
  allWork,
  newWork,
  deleteWork,
};
