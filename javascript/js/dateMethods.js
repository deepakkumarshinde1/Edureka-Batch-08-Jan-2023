// date methods
// create a date => create object of Date Class
var date = new Date();

// get a perfect date
var output = date.toDateString();
console.log(output);
// get a date
var output = date.getDate();
console.log(output);

// get a month
var months = ["Jan", "Feb", "Mar"];
var output = date.getMonth(); // jan => 0 .. dec => 11
console.log(months[output]);

// get a day
var output = date.getDay(); // sun => 0 .. sat => 6
console.log(output);

// get a year
var output = date.getFullYear();
console.log(output);

// get current hrs
var output = date.getHours(); // 24 hrs

var hours = output >= 12 ? output - 12 : output;
var meridiem = output >= 12 ? "pm" : "am";
console.log(hours, output, meridiem);

// get current min
var output = date.getMinutes(); // 00 ... 59
console.log(output);

// get current sec
var output = date.getSeconds(); // 00 ... 59
console.log(output);

// next step => setInterval() => counter or time
