const express = require("express");
const asyncHandler = require("../middlewares/asyncHandler");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    res.status(200).json({
      status: "success",
      message: "API is healthy",
    });
  })
);

router.get(
  "/error",
  asyncHandler(async (req, res) => {
    throw new Error("Async error test");
  })
);

module.exports = router;
