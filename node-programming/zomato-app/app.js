const express = require("express");
const mongoose = require("mongoose");
const APIRoutes = require("./routes/APIRoutes");
const app = express();
const MONGODB_URI = "mongodb://127.0.0.1:27017/batch8thjan";
const PORT = 3001;

app.use("/", APIRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server started at port ", PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
