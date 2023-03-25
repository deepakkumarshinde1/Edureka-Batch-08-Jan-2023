// DOM => Document Object Model
// Logical representation of HTML is DOM
// HTML runs on browser ==> Code is converted to Tree
// Create a relation between elements

// Document => Webpage
// Object => HTML element
// Model => way to handel data
// Tree is as dom tree

// By DOM you can communicate with html from javascript
// Work with dom we have "document" as object

// "document" object we can access html element in javascript

// How to access html element in javascript ?

// var h1Class = document.getElementsByClassName("h1-class"); //HTMLCollection array of element
// console.log(h1Class);

// var h1 = document.getElementsByTagName("h1"); //HTMLCollection array of element
// console.log(h1);

// var h1Id = document.getElementById("h1Id"); // single element
// console.log(h1Id);

// css selector #id , .class , * , h1 , parent > child
//document.querySelectorAll('#h1Id');// list of element

// console.log(document.querySelectorAll(".my-class > .my-class-2"));
// list of all "my-class-2" elements whose parent is "my-class"

var h1Id = document.querySelector("h1"); // from top 1st element

// get a html element inner text => .innerHTML
var text1 = h1Id.innerHTML;
console.log(text1);

// to set a text from JavaScript to html => .innerHTML
var text = "<i>Its Awesome</i>";
h1Id.innerHTML = text;

// innerHTML ==> render elements
// innerText ==> plan text i.e it will not render

// Handel Click Event

// Get Input

// ES6 Feature
