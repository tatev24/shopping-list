//Exercise 1:Palindrome text/numbers
var txt1 = "asantaatnasa";
var txt2 = "ABCDEFG";
var nmbr1 = 1123456;
var nmbr2 = 2001002;

function palindromeFunction(str){
  if (typeof str != 'string') {
    str = str.toString();
  }

  // 'abcba'
  // a == a
  // b == b
  // c == c
  for (var i = 0; i < str.length; i++) {
    if (str[i] != str.charAt(str.length - 1 - i)) {
      return  false;
    }

  }
  return true;
  // if (str == str.split('').reverse().join('')) {
  //   return true;
  // } else {
  //   return false;
  // }
  // return str == str.split('').reverse().join('');
}
var a = palindromeFunction(nmbr1);
console.log(a);
