const express = require("express");
const app = express();
const path = require("path");
const PORT = 80;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});