const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("./config/db");  // connect to database

const TodoRoutes=require("./routes/TodoRoutes")

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/Todo", TodoRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Todo API is running...");
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
