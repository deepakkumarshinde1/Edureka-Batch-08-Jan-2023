// function
// function => a set of code , which can perform a task
// functions are used for reusability
// variable created inside a function can be only use in a function ==> called as local variable
// variable outside a function can be  use any ware  ==> called as global variable
// NaN => Not a Number
// logic add
var a1 = 10; // global
var b1 = 30; // global

// arguments/parameters are optional
function add(a = 0, b = 0) {
  console.log(a, b);
  // set of code
  var result = a + b; // a , b , result are local
  console.log(result);
} // definition of a function

//add(a1, b1); // function call
add(10);
add();

// console.log(a);
