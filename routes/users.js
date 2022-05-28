"use strict";
var express = require("express");
var router = express.Router();

var users = require("../router-controllers/users");

/* GET users listing. */
router.get("/", users);

module.exports = router;
