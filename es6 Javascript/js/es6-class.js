// 2005 ES5 ---> 2015(ES6) ---> 2023

// template string*

// destructuring*
// spread operators*
// rest parameters*

// class
// function (arrow function)
// hoisting --> mentor
// async javascript
// ------promise (async await)
// fetch

// class ==> oop (object oriented programming )
// class is a instance of object
// class is blue print of object
// class is a collection of props & methods

// alert(1);

// overrides the  original of alert

// props ===> variables
// methods ==> function

// if we want to a logic of class we need a object of class
// 1st letter must be always capital
// this ==> access prop and method in class
// constructor is 1st method which get called on object creation
class MyCLass {
  //text = "hello"; // propriety
  constructor(_text) {
    this.text = _text;
  }
  alert() {
    console.log(this.text);
  } // methods
} // class definition

// create a object of class
// new => create a object
// MyCLass() => constructor
let myCLass = new MyCLass("Welcome to edureka");
//myCLass.alert();

// let a = {
//   abc:'value'
// }

// class inheritance
// constructor => reserved method of javascript
class Shape {
  constructor(value) {
    this.height = value;
    this.width = value;
  }

  draw() {
    console.log("Square is wxh", this.height * this.width);
  }
}
class Square extends Shape {}

class Rectangle extends Shape {}

let square = new Square(10);
square.draw();

let rectangle = new Rectangle(10, 20);
rectangle.draw();
