const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workSchema = new Schema(
  {
    workname: String,
    workdesc: String,
  },
  { timestamps: true }
);

const work = mongoose.model("work", workSchema);
module.exports = work;
