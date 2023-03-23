const express = require("express");
const { getComments, addComments } = require("../controllers/comment.js");

const router = express.Router();

router.get("/", getComments)
router.post("/", addComments)

module.exports = router;