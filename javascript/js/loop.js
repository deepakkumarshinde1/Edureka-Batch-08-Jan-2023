// 1 .. 10
// running same set code again and again
// for (initialize ; condition ; inc / dec)
for (var start = 10; start >= 1; start--) {
  // loop code
  console.log(start, "for loop");
}

// while
var start = 10;
while (start >= 1) {
  start--;
  // loop code
  console.log(start, "While loop");
  start--;
}

// do while

var start = 10;
do {
  // loop code
  console.log(start, "Do While loop");
  start--;
} while (start >= 11); // minimum it will run once
