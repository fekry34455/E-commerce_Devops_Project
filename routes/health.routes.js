const express = require("express");
const asyncHandler = require("../middlewares/asyncHandler");
const {
  healthCheck,
  healthError,
} = require("../controllers/health.controller");

const router = express.Router();

router.get("/", asyncHandler(healthCheck));
router.get("/error", asyncHandler(healthError));

module.exports = router;
