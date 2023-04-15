// extract a routing from express package
// const express = require('express');
// const userRoutes = express.Router();

const userRoutes = require("express").Router();
const { home, about, contactUs } = require("../controller/userController");
userRoutes.get("/", home);

//  /about
userRoutes.get("/about", about);

// /contact-us
userRoutes.get("/contact-us", contactUs);

// export routing
module.exports = userRoutes;
