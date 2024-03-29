const express = require("express");
const authRoutes = require("./routes/auth.js");
const commentRoutes = require("./routes/comments.js");
const likeRoutes = require("./routes/likes.js");
const postRoutes = require("./routes/posts.js");
const userRoutes = require("./routes/users.js");
const relationshipsRoutes = require("./routes/relationships.js");
const app = express();

const cors = require("cors");
const cookieParser = require("cookie-parser")
const multer = require("multer");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(cors({
  credentials: true,

  origin:['http://localhost:3000', 'https://social-app-client-peach.vercel.app']
}))
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../social-app/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipsRoutes);

app.get("/", (req, res) => {
  res.json("server start")
})
app.listen(process.env.PORT || 8800, () => {
  console.log("server online");
});