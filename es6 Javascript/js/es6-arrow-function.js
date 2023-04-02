function add() {}
// function expression

let sub = () => {};

// inline function
add(() => {});

// IIFE => Immediate  invoke function expression
(() => {})();

// arrow
//  ()=>{}

class MyClass {
  text = "hello edureka";
  print() {
    setTimeout(function () {
      console.log(this);
    }, 2000); // 1s == 1000ms
  }
}
let myClass = new MyClass();
myClass.print();

// setTimeout
// setTimeout ==> window
// window is a global

// we use "=>" function , this refers to nearest function definition instance
// we use "function" keyword function this refers to current function call instance
