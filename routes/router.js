const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router.get("/",function (req,res) {
  res.send("Hello");
});

module.exports = router;
