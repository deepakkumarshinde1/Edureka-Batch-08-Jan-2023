var number = [100, 200, 300, 400];
var name = ["edureka", "deepakkumar", "soham", "vallika"];

var student = [30, 25, 60];
console.log(student);

// js Object => collection data like array
// but here we use key as user defined
// array = []
// jsObject = {}

var student = [30, 25, 60];
var student = {
  age: 30,
  rollNo: 25,
  marks: 60,
};

console.log(student);
// JSObject => JSON (javascript object notation)
// how to read single data of object => student.age , student['age']

// list of restaurant
// name, city , locality, isVeg

// array + jsObject => JSObjectArray => JSON Array
var object = {
  name: "a",
  NAME: "a",
  nameStudent: "1",
  _name: "1",
  "name-student": "1",
  name123: 1,
  $a: 1,
};

var restaurantList = [
  {
    name: "ABC",
    city: "Mumbai",
    locality: "Central",
    isVeg: true,
  },
  { name: "Green Cafe", city: "Pune", locality: "Sinhgad", isVeg: false },
  { name: "Royal Cafe", city: "Pune", locality: "Swargate", isVeg: true },
];

// array => methods which are use for operations
console.log(restaurantList);
// add in array => push() , unshift*
// var newRestaurant = {
//   name: "Hotel Green",
//   city: "Nashik",
//   locality: "Dwarka Circle",
//   isVeg: false,
// };
//restaurantList.push(newRestaurant); // add element for end of array

// console.log(restaurantList);

// read data from array (printing data one by one) => forEach()
function readData(value, index) {
  //  console.log(index);
}
restaurantList.forEach(readData); // in forEach We need to pass a function
// or
restaurantList.forEach(function (value, index) {
  //  console.log(index);
  // callback function => function written in other function call
  // inline function or callback
});

restaurantList.forEach(function (restaurant, key) {
  // code => inline or callback function
});

// delete data from array => splice() , pop* ,shift*
var restaurantList = [
  {
    name: "ABC",
    city: "Mumbai",
    locality: "Central",
    isVeg: true,
  },
  { name: "ABC", city: "Pune", locality: "Sinhgad", isVeg: false },
  { name: "Royal Cafe", city: "Pune", locality: "Swargate", isVeg: true },
];
//restaurantList.splice(0, 3); // indexPosition, deleteCount
console.log(restaurantList);

// search  ==> ABC
// search some data in array => find() single_record , filter() list_record
var search = "abc";

var searchResult = restaurantList.find(function (value, index) {
  return value.name == search;
}); // if search is found we get data else "undefined"

// console.log(searchResult);

var searchResult = restaurantList.filter(function (value, index) {
  return value.name.toLowerCase() == search.toLowerCase();
}); // if search is found we get arrayList else []

console.log(searchResult);
// null , array or jsObject => type as "object"
// recreate the array => map() (react)
var newArray = restaurantList.map(function (value, index) {
  value.name = "RT. " + value.name;
  value.closeTime = "9.00 pm";
  return value.name;
});
console.log(newArray);

// convert array to string => join()
var newArrayString = newArray.join("");
console.log(newArrayString);
// reduce*, sort* , every* , some* , includes , slice()

/******************* don't have a callback function */
// pop , splice , every ,some, includes ,slice

/******************* have a callback function */
// find, forEach , filter, map, reduce, sort

// include => is is use only in normal array
var array = ["deepak", "edureka", 10, 20, 30, { name: "deepak" }];
var isIncluded = array.includes(10);
console.log(isIncluded);

// slice() ===> provides a part of array
var slicedArray = array.slice(1, 5); // start_number,index+1
console.log(slicedArray);
