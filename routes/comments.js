const express = require("express");
const { getComments } = require("../controllers/comment.js");

const router = express.Router();

router.get("/", getComments)

module.exports = router;