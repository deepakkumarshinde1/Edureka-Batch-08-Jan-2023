// create server
const express = require("express");
const app = express();
const appRoute = require("./routes/appRoute");

// add routes
app.use("/", appRoute);
// add port
app.listen(3001, () => {
  console.log("server started at port::", 3001);
});
