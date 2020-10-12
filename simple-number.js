function checkFunction(number){
  for (i = 2 ; i < number - 1; i++) {
    var b = number % i;

    if(b == 0){
      return number + 'false';
    }
  }

  return number + ' true';
}

// var c = checkFunction(3);
// console.log(c);

function showFirstNSimpleNumbers() {
  var maxnumber = 101;
  var simpleNumbersArray = [];

  for (i = 2; i < maxnumber; i++){
    var c = checkFunction(i);
    if(c == ' true'){
      simpleNumbersArray.push(i);
    }
  }
  return simpleNumbersArray
}


var result = showFirstNSimpleNumbers();
console.log('First 100 simple numbers', result);
