// 2005 ES5 ---> 2015(ES6) ---> 2023

// template string*

// destructuring
// spread operators
// rest parameters

// class
// function (arrow function)
// hoisting
// async javascript
// ------promise (async await)
// fetch

// destructuring --> react

// destructuring array
let array = [100, 200, 300, 400, 500, 600, 700];

// let numberOne = array[0];
// let numberTwo = array[1];

let [numberOne, numberTwo, numberThree] = array;
let [one, two] = array;

console.log(numberOne, numberTwo, numberThree);

// destructuring jsObject
let restaurant = {
  rName: "Hotel Green Palace",
  cost: "500",
  locality: "Nashik",
  state: "Maharashtra",
};

let { rName, locality, state } = restaurant;

// restaurant["restName"] = restaurant.rName;
// delete restaurant.rName;

console.log(restName);
console.log(locality);
console.log(state);
console.log(restaurant);
