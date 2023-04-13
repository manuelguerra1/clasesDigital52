const express = require("express");
const path = require("path");
const router = express.Router();
const mainController = require("../controllers/mainController");
const logMiddleware = require("../middlewares/userLog");

router.get("/", logMiddleware, mainController.index);

module.exports = router
