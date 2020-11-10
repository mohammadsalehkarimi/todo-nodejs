const express = require("express");
const router = express.Router();
const workController = require("../controllers/workControllers");

router.get("/", workController.allWork);

router.post("/", workController.newWork);

router.delete("/:id", workController.deleteWork);

module.exports = router;
