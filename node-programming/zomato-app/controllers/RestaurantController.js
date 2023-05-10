const MenuItemsModel = require("../models/MenuItemsModel");
const RestaurantModel = require("../models/RestaurantModel");

module.exports.getRestaurantListByLocationId = async (request, response) => {
  let { loc_id } = request.params;
  try {
    let filter = { location_id: loc_id };
    let projection = {
      name: 1,
      city: 1,
      image: 1,
      locality: 1,
      location_id: 1,
      city_id: 1,
    };
    let restaurantList = await RestaurantModel.find(filter, projection); // find({filter} , {}})
    let sendData = {
      status: restaurantList.length === 0 ? false : true,
      restaurantList,
      count: restaurantList.length,
    };
    response.status(200).send(sendData);
  } catch (error) {
    let errorObj = { status: false, error };
    response.status(500).send(errorObj);
  }
};

module.exports.getRestaurantDetailsByRestaurantId = async (
  request,
  response
) => {
  let { id } = request.params;
  try {
    let restaurant = await RestaurantModel.findById(id);
    let sendData = {
      status: restaurant.length === 0 ? false : true,
      restaurant,
      count: restaurant.length,
    };
    response.status(200).send(sendData);
  } catch (error) {
    let errorObj = { status: false, error };
    response.status(500).send(errorObj);
  }
};

module.exports.getMenuItemsByRestaurantId = async (request, response) => {
  let { r_id } = request.params;
  try {
    let MenuItemList = await MenuItemsModel.find({ restaurantId: r_id });
    let sendData = {
      status: MenuItemList.length === 0 ? false : true,
      MenuItemList,
      count: MenuItemList.length,
    };
    response.status(200).send(sendData);
  } catch (error) {
    let errorObj = { status: false, error };
    response.status(500).send(errorObj);
  }
};

module.exports.filter = async (request, response) => {
  try {
    let { mealType, loca_id, lCost, hCost, sort } = request.body;
    let filter = {}; // {} ==> get all data
    // add a runtime value in JSON or js object ===>
    // filter['prop_name'] = value
    if (mealType !== undefined) filter["mealtype_id"] = mealType;
    if (loca_id !== undefined) filter["location_id"] = loca_id;

    if (lCost !== undefined && hCost !== undefined) {
      filter["min_price"] = { $lt: hCost, $gt: lCost };
    }

    // -1 dec , 1 asc
    console.log(filter);

    let RestaurantList = await RestaurantModel.find(filter).sort({
      min_price: sort,
    });
    let sendData = {
      status: RestaurantList.length === 0 ? false : true,
      RestaurantList,
      count: RestaurantList.length,
    };
    response.status(200).send(sendData);
  } catch (error) {
    let errorObj = { status: false, error };
    response.status(500).send(errorObj);
  }
};
