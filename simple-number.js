function checkFunction(number){
  var status = true;

  for (var i = 2 ; i < number - 1; i++) {
    var b = number % i;

    if(b == 0){
      status = false;
      break;
    }
  }

  return status;
}

function showFirstNSimpleNumbers() {
  var maxnumber = 101;
  var simpleNumbersArray = [];

  for (var i = 4; i < maxnumber; i++){
     var c = checkFunction(i);
     if(c == true){
      simpleNumbersArray.push(i);
     }
  }
  return simpleNumbersArray;
}

var result = showFirstNSimpleNumbers();
console.log('First 100 simple numbers', result);
