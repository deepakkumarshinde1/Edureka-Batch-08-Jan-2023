// maths
// area of circle = pi * (r*r)
// pi = 3.14 or  22/7
var radius = 30;
console.log(Math.PI);

var square = Math.pow(radius, 2);
console.log(square);

var value = 900;
var squareRoot = Math.sqrt(value);
console.log(squareRoot);

// convert a fraction number to round
// Math.floor => 2.6 or 2.3 ==> 2
// Math.ceil => 2.6 or 2.3 ==> 3
// Math.round => 2.49 => 2        2.51 => 3
// Math.abs ==> 2.6 => 2.6    -2.6 => 2.6
console.log(Math.abs(-2.6));
console.log(Math.abs(2.5));

// create random ==> otp => one time password
var value = Math.random(); // 0 to 1
value *= 1000000;
value = Math.floor(value);
console.log(value);
