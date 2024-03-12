const express = require("express");
const {
  submitQuestion,
  submitAnswer,
  showLatestQuestion
} = require("../controllers/all.controller");
const router = express.Router();

// Registration route
router.post("/submit-question", submitQuestion);
router.post("/submit-answer", submitAnswer);
router.post("/show-latest-question", showLatestQuestion);

module.exports = router;
