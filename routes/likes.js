const express = require("express");
const { getLikes } = require("../controllers/like.js");

const router = express.Router();

router.get("/",getLikes)

module.exports = router;