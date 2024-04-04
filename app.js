var button = document.getElementById('result');
function display(val) {
    // Get the HTML input element with the id 'result'
    var result = document.getElementById('result');
    // Append the value of 'val' to the current value of the 'value' property of the input element
    result.value += val;
    // Return the value of 'val'
    return val;
}
function solve() {
    var result = document.getElementById('result');
    var x = result.value;
    var y = eval(x);
    result.value = y.toString();
    return y;
}
function clearScreen() {
    var result = document.getElementById('result');
    result.value = '';
}
