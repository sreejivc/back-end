const express = require("express");
const jwt = require("jsonwebtoken");
const loginRouter = express.Router();
const UserInfo = require("../models/UsersDB");
const JWT_SECRET = "This is your secret key";
loginRouter.get("/", function (req, res) {
  res.render("login", {});
});

loginRouter.post("/verifyuser", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  console.log("verifyuser req body::", req.body);
  let username = req.body.username;
  let password = req.body.password;

  UserInfo.findOne(
    { username: username, password: password },
    function (err, user) {
      console.log("retrieved user::", user);
      if (err) {
        console.log(err);
      }
      if (user) {
        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
          expiresIn: 3600,
        });
        res.json({ user: user, token: token });
      } else {
        console.log("Username or Password mismatch!");
      }
    }
  );
});

module.exports = loginRouter;
