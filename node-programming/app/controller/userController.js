module.exports.home = (request, response) => {
  response.send("Welcome to express js");
};

module.exports.about = (request, response) => {
  response.send("to about us page");
};

module.exports.contactUs = (request, response) => {
  response.send("I am in controller");
};
