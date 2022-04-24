const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const he1 = path.join(__dirname, "/he1/");

app.use(express.static(he1));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/he1/index1.html");
});
app.get("/index2", (req, res) => {
  res.sendFile(__dirname + "/he1/index2.html");
});
app.get("/index3", (req, res) => {
  res.sendFile(__dirname + "/he1/index3.html");
});
app.listen(port, () => {
  console.log("ok!");
});
