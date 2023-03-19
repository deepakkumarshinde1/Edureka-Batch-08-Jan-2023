// js Object Methods
var student = {
  name: "Deepakkumar",
  course: "MERN",
  trainer: "Gopal",
  duration: "4 months",
  time: "5 to 7",
}; // JSON or JSObejct

// collect all the keys of an jsObject => we get array with all keys
var allKeys = Object.keys(student);
console.log(allKeys);

// collect all the values of an jsObject => we get array with all values
var allValues = Object.values(student);
console.log(allValues);

// convert jsObject to Array => we get multi dimension array [[],[],[],[]]
var entries = Object.entries(student);
console.log(entries);
