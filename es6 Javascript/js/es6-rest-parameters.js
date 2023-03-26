// 2005 ES5 ---> 2015(ES6) ---> 2023

// template string*

// destructuring*
// spread operators*
// rest parameters

// class
// function (arrow function)
// hoisting
// async javascript
// ------promise (async await)
// fetch

// rest parameters ==> collect unlimited parameters data
console.log(10, 2, 3, 4, 1, 2, 2, 3, 3, 4, 5, 5);

function add(...data) {
  let result = 0;
  data.forEach(function (value) {
    // result = result + value;
    result += value;
  });
  console.log("addition is: ", result);
}
add(10, 20, 30, 40, 50, 60);
