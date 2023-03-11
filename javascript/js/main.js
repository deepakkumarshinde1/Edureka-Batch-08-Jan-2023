// add of 2 numbers

// operators => symbols having special  functionality

/************ Arithmetic */
var result = 10 + 20; // add
var result = 10 / 20; // div ==> div quotient
var result = 10 * 20; // mult
var result = 10 - 20; // sub
var result = 10 % 20; // modules => div reminder
/************ Assignment  */
var number = 10; // = assign
number += 20; //number = number + 20;
number -= 20; //number = number - 20;
number /= 20; //number = number / 20;
number *= 20; //number = number * 20;
number %= 20; //number = number + 20;

var number2 = 10;
++number; // number++; // number2 += 1; => inc operator

var number3 = 10;
--number; // pre dec
number--; // post dec

var number4 = 10;
var result = number4--;

/************ Compare */
var a = 10;
var b = 20;

// equals ==> a == b
// greater  ==> a > b
/**
 *  a == b, eq
 *  a > b ==> gt
 *  a < b ==> lt
 *  a >= b ==> gt or eq
 *  a <= b ==> lt or eq
 *  a != b ==> not equal
 *  */

console.log(result, number4);

// compare are in conditions
// true or false
// conditional statement  ==> if ... else ...
var a = 10;
var b = 9;
var isDeepakAvailable = false;
if (isDeepakAvailable == true) {
  console.log(" is he will take session");
  // true output code
} else {
  // false output code
  console.log("other trainer will take session");
}

/************ Logical  */

var a = 10;
var b = 12;
var c = 11;
// and ==> && T and T
// or ==> ||
// not ==> ! inversion of boolean value
if (a == b || b == c) {
  console.log("all/some are equal");
} else {
  console.log("all are not equal");
}

var isAbsent = true;
isAbsent = !isAbsent; // false
isAbsent = !isAbsent; // true
console.log(isAbsent);
