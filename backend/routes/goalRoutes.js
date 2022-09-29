const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controller/goalController.js");

// CRUD Operations

// Create and Read
router.route("/").get(getGoals).post(setGoals);

// Update and Delete
router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;
