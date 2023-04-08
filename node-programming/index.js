// Read Files
// Create files
// Mobile Application
// Font End Application
// Communicate wither server ==> CURL (Web Hooks)
// Live Chat application ==> socket
// CRON Job ==> Email

// We Create A Server by using Node JS
// server module
// import a user modules
// let variable = require("./userFunction");
// console.log(variable);

// ES6 Way ==
// import variable from "./userFunction";

// calculation.add(10, 100);
// calculation.add1(10, 100);

// create a server ==> Native Module (http)
const http = require("http"); // require is method to import module
const url = require("url");
const fs = require("fs"); // read files

const calculation = require("./userFunction");
// client == request ==> server
// server == response ==> client
// create a server
const server = http.createServer((request, response) => {
  if (request.url !== "/favicon.ico") {
    let urlParse = url.parse(request.url); // parse div in small token // urlParse.query =>  a=10&b=10
    let array = urlParse.query.split("&"); // ['a=10' , 'b=10']

    let a = array[0].split("=")[1]; // 'a=10' ==> ['a', 10] => 10
    let b = array[1].split("=")[1]; // 'b=10' ==> ['b', 10] => 10

    calculation.add(Number(a), Number(b));

    fs.readFile("./index.html", (error, data) => {
      response.write(data); // reading file and sending data
      response.end();
    });
  }
});

// we create listener
server.listen(3000, () => {
  console.log("server started on prot 3000");
});
