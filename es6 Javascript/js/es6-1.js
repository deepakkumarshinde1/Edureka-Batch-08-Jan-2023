// 2005 ES5 ---> 2015(ES6) ---> 2023

// const* , let* , var*
// template string
// class
// destructuring
// spread operators
// rest parameters
// function (arrow function)
// hoisting
// async javascript
// ------promise (async await)
// fetch

// it avoid re-initialization of variable
let text = "deepakkumar";
text = 123;

// data must constant
const pie = 3.14;
// console.log(pie);

// var => function/local scope
function funOne() {
  var a = 10;
  console.log(a);
}
funOne();
// const & let ==> block scope and function/local scope

function funTwo() {
  for (let i = 0; i < 10; i++) {
    console.log("hello");
  }

  console.log("var i=", i); // undefined, 10 , 9 , error
}
funTwo();
