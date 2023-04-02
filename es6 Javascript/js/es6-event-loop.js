// async

// whenever our code follows a sequence of execution => is sync code
// javascript is single ==> 1
// javascript is sync in nature (default)

// convert a js code flow async
// Event Loop => sync to async
// Event Loop we have async API (application programming interface) i.e DOM , setTimeout ,
// setInterval , Promises (async) , fetch , xhr(we are going to take it)

console.log("hello"); //sync
setTimeout(() => {
  console.log("123");
}, 1000); // 1000ms === 1s
console.log("edureka"); //sync

// code will not get frozen
// proper memory use will be there
// async methods will run after sync methods

// promise
// we will have a session tomorrow at 5.00 pm
// available ==> session will be there => true (fulfilled) ==> resolved =run=> .then() or try{}
// not available => session will be get canceled ==> false ==> rejected ==> .catch() or catch(){}

function div(numberOne, numberTwo) {
  // div a number by zero
  let result = numberOne / numberTwo;
  console.log(result);
}

div(10, 5);
