// async

setTimeout(() => {
  console.log("hello time out");
}, 2000); // run only once

let count = 10;
let intervalId = setInterval(() => {
  if (count === 0) {
    console.log("its done");
    clearInterval(intervalId);
  } else {
    console.log("count down ", count--);
  }
}, 1000); // runs again and again
