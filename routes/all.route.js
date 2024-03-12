const express = require("express");
const {
  submitQuestion,
  submitAnswer,
} = require("../controllers/all.controller");
const router = express.Router();

// Registration route
router.post("/submit-question", submitQuestion);
router.post("/submit-answer", submitAnswer);

module.exports = router;
