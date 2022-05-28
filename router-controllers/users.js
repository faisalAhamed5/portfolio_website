var express = require("express");
var router = express.Router;

var model = require("../db/models");

module.exports = (req, res, next) => {
  model.user
    .findAll({
      raw: true,
      attributes: ["username", "address"],
    })
    .then((users) => {
      res.render("users", { users: users });
    });
};
