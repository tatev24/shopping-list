var arr = [5, 7, 33, 9, 15, 26];

function findmaxNumber(numbersArray){
  var max = numbersArray[0];
  var min = numbersArray[0];

  for (var i = 0; i < numbersArray.length; i++) {
    if ( numbersArray[i] > max) {
       max = numbersArray[i];
    }

    if ( numbersArray[i] < min){
      min = numbersArray[i];
    }
  }
  return [max, min];
}

var x = findmaxNumber(arr);
console.log(x);

var txt = "Hello world!";

function reverseDirection(str){
  var empty = "";

  for(var i = str.length - 1; i >= 0; i--){
    empty = empty + str[i];
  }

  return empty;
}
var a = reverseDirection(txt);
console.log(a);




var stringText = 'hello my friend! how are you?';

function uppercaseFunction(strInput){
  var arr = strInput.split(' ');
  var secondArray = [];

  for (var i = 0; i < arr.length; i++) {
    var words = arr[i];
    words = words.charAt(0).toUpperCase() + words.slice(1)
    secondArray.push(words);
  }

  return secondArray.join(' ');
}

var func = uppercaseFunction(stringText);
console.log(func);



// Home work 1:
// function palindrome(str) {
//   return true;
// }
// palindrome("millim");
// max 1 +5

// Update simple number check function!
// max 1 +5
