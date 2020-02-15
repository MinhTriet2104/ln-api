// require env
require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("Database connected"))
  .catch(err => console.log("Database connect error: " + err));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// Router
const tagRouter = require("./routes/tag");

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/tag", tagRouter);

// Not found route
app.get("*", (req, res) => res.status(404).send("404 Not Found"));

// Running
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
