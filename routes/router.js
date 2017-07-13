const express = require("express");
const router = express.Router();
const Users = require("../models/users");
const Util = require("../utilities");

router.get("/", function(req, res){
  console.log(req);
  res.render("index", {messages:"Logged Out"});
});

router.get("/signin",function (req,res) {
  res.send("Hello");
});

router.get("/signup", function(req, res){
  res.send("hello");
});

router.post("/signup", function(req, res){
  if (req.body.username && req.body.password){
    let hashData = Util.hash.hash(req.body.password);
    Users.create({
      username: req.body.username,
      password: hashData
    }).then(function (user) {
      if (user) {
        res.redirect(201, "/");
      } else {
        res.redirect(500, "/");
      }
    }).catch(function (err) {
      console.log(err);
      res.redirect(500, "/");
    });
  } else {
    res.redirect(400, "/signup");
  }
});

router.post("/logout", function(req, res){
  res.redirect("/");
});

module.exports = router;
