// create server
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const appRoute = require("./routes/appRoute");

const MONGODB_URI = "mongodb://127.0.0.1:27017/batch8thjan";

// add routes
app.use("/", appRoute);
// add port

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("db connected");
    app.listen(3001, () => {
      console.log("server started at port::", 3001);
    });
  })
  .catch((error) => {
    console.log(error);
  });

/// Node JS <====> express <===> mongoose <==> mongodbDriver <===> mongoDB Server
