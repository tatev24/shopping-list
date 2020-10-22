//Exercise 2 /simple-numbers-update
var value =  true;
var max = 100;
var array = [];

function simpleNumbers(){

  for ( var number = 2; number < max; number++) {
    value = true;

    for (var i = 2; i < Math.ceil(number / 2) + 1; i++) {
      var  a = number % i;
      if (a == 0) {
        value = false;
        break;
      }
    }

    if (value == true) {
      array.push(number);
    }
  }

  return array;
}
var x = simpleNumbers();
console.log('xx', x);
