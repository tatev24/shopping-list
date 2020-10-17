function thisFunction(){
  var numbersArray = [];
  for (var i = 1; i < 101; i++){
    if  (i % 3 === 0 && i % 5 === 0) {
      numbersArray.push("fizzbuzz");
    }else if (i % 3 === 0) {
      numbersArray.push("fizz");
    }else if (i % 5 === 0) {
      numbersArray.push("buzz");
    }else {
      numbersArray.push(i);
    }
  }
  return numbersArray;
}
var result = thisFunction();
// console.log(result);
