const locationList = require("../model/AppModel.json");

module.exports.getHomePage = (request, response) => {
  response.send("Welcome to zomato server");
};

module.exports.postHomePage = (request, response) => {
  response.send("Welcome to post");
};

module.exports.getLocationList = (request, response) => {
  // as we want to send a data to client we need a json
  // json => javascript object notation
  //   let status = locationList.length === 0 ? false : true;
  let jsonData = {
    status: locationList.length === 0 ? false : true,
    locationList: locationList,
  };
  response.send(jsonData);
};

// app.js
// home page ==> /
// controller ==> all function which controls your app
