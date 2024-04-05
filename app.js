// Get the HTML input element with the id 'result'
var button = document.getElementById('result');

// Display function to append the value of 'val' to the current value of the 'value' property of the input element
function display(val) {
  var result = document.getElementById('result');
  result.value += val;

  return val;
}

// Solve function to evaluate the current value of the input element and return the result as a string
function solve() {
  var result = document.getElementById('result');
  var x = result.value;
  var y = eval(x);
  result.value = y.toString();
  return y;
}

// ClearScreen function to set the value of the input element to an empty string
function clearScreen() {
  var result = document.getElementById('result');
  result.value = '';
}