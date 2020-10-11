var initialArray = ['pizza', 'pasta', 'cat', 'pens'];

function handleList() {
  var list = '';
  for (i = 0; i < initialArray.length; i++){
     list = list + '<li>' + initialArray[i] + '<li>';
  }
  document.getElementById('ul').innerHTML = list;
}
handleList();

function removeButton(){
  initialArray.pop();
  handleList();
}

function addButton() {
  var inputValue = document.getElementById('input').value;
  initialArray.push(inputValue);

  handleList();
}

function colorButton(){
  var clr = document.getElementById('colorinput').value;
  document.getElementById('ul').style.color = clr;
}
