const { db } = require("../routes/connect.js");
const jwt = require("jsonwebtoken");

const getLikes = (req, res) => {

    const q = `SELECT userId from likes WHERE postId = ?`;

    db.query(q, [req.query.postId], (err, data) => {
        if (err) return res.status(500).json(err)
        return res.status(200).json(data.map(like => like.userId))
    })
}

module.exports = { getLikes }