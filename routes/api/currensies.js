const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const {currensies} = require("../../controllers");

const router = express.Router();

router.get("/currensies", ctrlWrapper(currensies));

module.exports = router;
