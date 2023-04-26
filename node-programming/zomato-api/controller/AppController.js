const LocationsModel = require("../model/LocModel");

module.exports.getHomePage = (request, response) => {
  response.send("Welcome to zomato server");
};

module.exports.postHomePage = (request, response) => {
  response.send("Welcome to post");
};

module.exports.getLocationList = async (request, response) => {
  // get list
  try {
    let locationList = await LocationsModel.find(); // get record from mongoDB
    let jsonData = {
      status: locationList.length === 0 ? false : true,
      locationList: locationList,
    };
    response.status(200).send(jsonData);
  } catch (error) {
    response.status(500).send("database error");
  }
};

module.exports.searchLocation = (request, response) => {
  // collect a dynamic data from url ==> request.params
  let params = request.params; // {city:mumbai}
  // filter
  let list = locationList.filter((location) => {
    return location.city === params.city;
  });

  let jsonData = {
    searchList: list,
  };
  response.send(jsonData);
};
// app.js
// home page ==> /
// controller ==> all function which controls your app
