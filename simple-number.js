function checkFunction(number){

  for (i = 2 ; i < number - 1; i++) {
    var b = number % i;
      if(b == 0){
        return number + ' is not simple';
      }
  }
    return number + ' is simple';

}

var c = checkFunction(15);
console.log(c);

var v = checkFunction(23);
console.log(v);
