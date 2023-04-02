// promise
// we will have a session tomorrow at 5.00 pm
// available ==> session will be there => true (fulfilled) ==> resolved =run=> .then() or try{}
// not available => session will be get canceled ==> false ==> rejected ==> .catch() or catch(){}

// function  into a promise function ==> async

async function div(numberOne, numberTwo) {
  // div a number by zero
  if (numberTwo === 0) {
    return Promise.reject("can't divide a number by zero");
  } else {
    let result = numberOne / numberTwo;
    return Promise.resolve(result); // all is well
  }
} // create an

// single promise
div(10, 10)
  .then((divResult) => {
    console.log(divResult);
  })
  .catch((error) => {
    console.log(error);
  });

// multi promise , node js , react
// async await
async function calculate() {
  try {
    let result = await div(10, 0); //await => hold div until and unless it is not not executed
    console.log(result);
  } catch (error) {
    // console.log(error);
    let wantToTry = confirm("Error occurs, want to try again");
    if (wantToTry === true) {
      calculate();
    }
  }
}
calculate();

// fetch(); ==> weather app
