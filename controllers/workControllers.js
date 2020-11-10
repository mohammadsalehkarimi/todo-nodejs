const Work = require("../modules/work");

const allWork = (req, res) => {
  Work.find().then((result) => {
    res.render("index", { title: "ToDo", work: result });
  });
};

const newWork = (req, res) => {
  const work = new Work(req.body);
  work.save().then((result) => {
    res.redirect("/");
    console.log(result);
  });
};

const deleteWork = (req, res) => {
  const id = req.params.id;
  console.log(id);

  Work.findByIdAndDelete(id).then(() => {
    res.json();
  });
};

module.exports = {
  allWork,
  newWork,
  deleteWork,
};
