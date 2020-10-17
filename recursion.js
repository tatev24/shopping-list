// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

// for

function factorialFor(n) {
  //
  var total = 1;
  for (var i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

// var x = factorialFor(5);
// console.log(x); // 120 // 24 = 4!
//
// var y = factorialFor(7);
// console.log(y); // 5040

// while
function factorialWhile(n) {
  var total = 1;
  var i = 1;
  while (i <= n) {
    total = total * i;
    i = i + 1;
  }

  return total;
}

var x = factorialWhile(5);
console.log(x);

// Recursion
var total = 1;
function factorialRecursion(n) {
  if (n == 1) {
    return total;
  }

  total = total * n;
  var i = n - 1;

  return factorialRecursion(i);
}

var x = factorialRecursion(5);
console.log(x);
