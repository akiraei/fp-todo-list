const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use("/", require("./routes"));

const runApp = () => app.listen(9000);

module.exports = { runApp };
