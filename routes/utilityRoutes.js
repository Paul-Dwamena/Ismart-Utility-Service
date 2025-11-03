const express = require("express");
const router = express.Router();
const utilityController = require("../controllers/utilityController");

// Example test endpoint
router.post("/test", (req, res) => utilityController.testEndpoint(req, res));

module.exports = router;
