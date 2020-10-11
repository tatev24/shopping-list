var thingsArray = ['pizza', 'pasta', 'cat', 'pens'];

function handleList() {
  var list = '';
  for (i = 0; i < thingsArray.length; i++){
     list = list + '<li>' + thingsArray[i] + '<li>';
  }
  document.getElementById('ul').innerHTML = list;
}
handleList();

function removeButton(){
  thingsArray.pop();
  handleList();
}

function addButton() {
  var inputValue = document.getElementById('input').value;
  thingsArray.push(inputValue);

  handleList();
}

function colorButton(){
  var clr = document.getElementById('colorinput').value;
  document.getElementById('ul').style.color = clr;
}
