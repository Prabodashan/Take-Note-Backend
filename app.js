const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const cors = require("cors");

const connectDB = require("./Config/Db");
connectDB();

const port = process.env.PORT || 3400;

const app = express();

//common middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic route
app.get("/", (req, res) => {
  res.send(`Welcome to the server!`);
});

app.use("/api/notes", require("./Routes/NoteRoutes"));
app.use("/api/users", require("./Routes/UserRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
