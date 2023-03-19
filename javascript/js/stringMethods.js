// string methods
var text = "India is my Country";

// convert a string to small letters
var output = text.toLowerCase();
console.log(output);

// convert a string to capital letters
var output = text.toUpperCase();
console.log(output);

// convert a string to array
var output = text.split(" "); // converts your string to array
output = output.join("-"); // converts your array to string
output = output.toLowerCase();

// can't we write all all this logic in single line => yes
// we use method changing
var output = text.split(" ").join("-").toLowerCase();
console.log(output);

// get a part string
var text = "India is my Country";

var fileName = "my-pic.jpg.pdf";
var pos = fileName.lastIndexOf("."); // start searching from last;
// fileName.indexOf();// search for 1st to last
var output = fileName.substring(pos + 1);
console.log(output.length);
