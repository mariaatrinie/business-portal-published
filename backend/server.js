const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB LOCAL connection (Compass)
mongoose.connect("mongodb://127.0.0.1:27017/businessPortal")
  .then(() => console.log("MongoDB Local Connected"))
  .catch(err => console.error(err));

// API routes
app.use("/api/business", require("./routes/businessRoutes"));

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
