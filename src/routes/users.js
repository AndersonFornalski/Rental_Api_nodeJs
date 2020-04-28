const express = require("express");
const route = express.Router();
const User = require("../controllers/user_controller");

route.post("/auth", User.auth); 

route.post("/register", User.register);


module.exports = route;