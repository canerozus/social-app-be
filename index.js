const express = require("express");
const authRoutes = require("./routes/auth.js");
const commentRoutes = require("./routes/comments.js");
const likeRoutes = require("./routes/likes.js");
const postRoutes = require("./routes/posts.js");
const userRoutes = require("./routes/users.js");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser")

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/comment", commentRoutes)
app.use("/api/like", likeRoutes)
app.use("/api/post", postRoutes)
app.use("/api/users", userRoutes)

app.listen(8000, () => {
    console.log("server online")
})
