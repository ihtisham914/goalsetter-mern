const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controller/goalController.js");
const { protect } = require("../middleware/authmiddleware");

// CRUD Operations

// Create and Read
router.route("/").get(protect, getGoals).post(protect, setGoals);

// Update and Delete
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

module.exports = router;
