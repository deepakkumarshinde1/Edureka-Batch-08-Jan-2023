// set a text input to html on click button

// How to get "input, select, textarea" data in javascript
// from html ==>  we use a prop of input
// element called ==> .value

var input = document.querySelector("#text");
var btn = document.querySelector("#btn");
var h1 = document.querySelector("#change-text");

btn.addEventListener("click", function () {
  var text = input.value;
  h1.innerHTML = text;
  // reset input
  input.value = "";
});

input.addEventListener("keyup", function () {
  var text = input.value;
  h1.innerHTML = text;
});

// how get and set text
// how to handel a event
// get input text & set it in element
