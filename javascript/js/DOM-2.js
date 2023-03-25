// events
// event its user interaction
// mouse => click, dbl-click, drag , drop, mouse-over
// keyboard => key-press , key-up, key-down
// page load => load
// page unload => unload

// onclick text must be change to "its awesome"
// How we can handel events ? ==> addEventListener('event',cbFun)

var btn = document.querySelector("#btn");
var h1 = document.querySelector("#change-text");

btn.addEventListener("click", function () {
  //   btn.style.backgroundColor = "green";
  h1.innerHTML = "<i>it's awesome</i>";
});
