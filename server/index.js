const templates = require("../server/data/templates.json");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json(templates);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

