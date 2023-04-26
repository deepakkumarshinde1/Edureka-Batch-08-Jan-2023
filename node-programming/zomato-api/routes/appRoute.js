const express = require("express");
const appRoute = express.Router();
const appController = require("../controller/AppController");
// get
appRoute.get("/", appController.getHomePage);
appRoute.get("/api/", appController.getHomePage);
appRoute.get("/api/location-list", appController.getLocationList);
appRoute.get("/api/search-location/:city", appController.searchLocation);
module.exports = appRoute;

// :city => dynamic uri
