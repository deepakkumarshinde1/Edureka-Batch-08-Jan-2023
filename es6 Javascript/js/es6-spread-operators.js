// 2005 ES5 ---> 2015(ES6) ---> 2023

// template string*

// destructuring*
// spread operators*
// rest parameters

// class
// function (arrow function)
// hoisting
// async javascript
// ------promise (async await)
// fetch

// spread operators (...) => merge or recreate a array
let arrayOne = [19, 29, 39, 49, 59, 69];
let arrayTwo = [199, 299, 399, 499, 599, 699];
// merge
// arrayOne.concat(array); es5
let arrayThree = [...arrayOne, ...arrayTwo];
// console.log(arrayThree);

// string, number ,boolean => primitive
// array and jsObject => Non Primitive Types
let a = [10, 20, 30];
let b = [...a];
a[0] = "edureka";
console.log(a);
console.log(b);

let restDetails = {
  rName: "Hotel Green Palace",
  cost: "500",
};

let locDetails = {
  locality: "Nashik",
  state: "Maharashtra",
};

let hotel = {
  ...restDetails,
  ...locDetails,
};

console.log(hotel);
