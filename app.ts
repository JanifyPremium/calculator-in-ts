const button: any = document.getElementById('result');

// Display function to append the value of 'val' to the current value of the 'value' property of the input element
function display(val: number): number {
  const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
  result.value += val;
  
  return val;
}

// Solve function to evaluate the current value of the input element and return the result as a string
function solve(): number {
  const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
  const x: string = result.value;
  const y: number = eval(x);
  result.value = y.toString();
  return y;
}

// ClearScreen function to set the value of the input element to an empty string
function clearScreen(): any {
  const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
  result.value = '';
}