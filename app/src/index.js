const express = require("express");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");

const app = express();

app.use(morgan("tiny"));
app.use(express.urlencoded());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.post("/signUp", function (req, res) {
  const request = req.body;
  const token = jwt.sign(request, "rahat1996");
  res.send({
    status: 200,
    body: JSON.stringify({
      accessToken: token,
    }),
  });
});

app.listen(3000, function () {
  console.log("Server Listening On http://localhost:3000/");
});
