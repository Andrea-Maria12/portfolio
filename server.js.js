const express = require("express");
const path = require("path");

const app = express();

// This tells Express to read JSON data
app.use(express.json());

// This connects your public folder (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});