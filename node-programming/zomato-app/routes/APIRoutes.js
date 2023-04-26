const express = require("express");
const APIRoutes = express.Router();

const location = require("../controllers/LocationController");
const restaurant = require("../controllers/RestaurantController");

APIRoutes.get("/api", location.home);
APIRoutes.get("/api/get-location-list", location.getLocationList);

APIRoutes.get(
  "/api/get-restaurant-list-by-location-id/:loc_id",
  restaurant.getRestaurantListByLocationId
);

APIRoutes.get(
  "/api/get-restaurant-details-by-restaurant-id/:id",
  restaurant.getRestaurantDetailsByRestaurantId
);

APIRoutes.get(
  "/api/get-menu-items-by-restaurant-id/:r_id",
  restaurant.getMenuItemsByRestaurantId
);
module.exports = APIRoutes;
