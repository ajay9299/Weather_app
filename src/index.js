const { response } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello Static-Web");
});

app.listen(port, () => {});
