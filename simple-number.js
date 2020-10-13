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

// var c = checkFunction(3);
// console.log(c);

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

// RULE number 1
// misht popoxakan haytarareluc qri var u verj!!!
// ete ches grum inq@ globala haskanum u et depqum 2 functioni mej nuyn i a grac!

// Braek, Continue karda FOR loop-i hamara
// U mekel while-ov loop gri lav vorpes orinak! de good night and sweet dreams!okay good night  


var result = showFirstNSimpleNumbers();
console.log('First 100 simple numbers', result);
