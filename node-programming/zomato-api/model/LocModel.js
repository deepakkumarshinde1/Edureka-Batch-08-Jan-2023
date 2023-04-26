// import a schema
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// create a schema
const LocationsSchema = new mongoose.Schema({
  city: { type: String },
  location: { type: String },
  pinCode: { type: Number },
});

// attach the schema to a model
const LocationsModel = mongoose.model("location", LocationsSchema, "locations");

module.exports = LocationsModel;
// database => store data
// scheme => structure of a record
// model ==> communicate db
// tables ==> table user in sql to store the data

// MongDB Driver ==> schema less
// mongoose ==> need schema
