const express = require("express");
const userRoute = require("./routes/userRoutes");
// create a server
const server = express();

// server "use()" => middleware methods
server.use("/", userRoute); // inject the routing(GET / POST / PUt / DELETE) in our server

// add listener to app instance
server.listen(4444, () => {
  console.log("server is running port 4444");
});

// add different middleware
// body-parser
// multer / express-upload
// db-connection
// cors
// common error
// debugger
