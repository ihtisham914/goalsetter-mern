const asyncHandler = require("express-async-handler");

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get Goals" });
});

// @desc   Set goals
// @route  POST /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ msg: "Set Goals" });
});

// @desc   Update goals
// @route  PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Update goal with id: ${req.params.id}` });
});

// @desc   delete goals
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Delete goal with id: ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
