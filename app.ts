
const button: any = document.getElementById('result');

function display(val: number): number {
    // Get the HTML input element with the id 'result'
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    
    // Append the value of 'val' to the current value of the 'value' property of the input element
    result.value += val;
    
    // Return the value of 'val'
    return val;
}

function solve(): number {
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    const x: string = result.value;
    const y: number = eval(x);
    result.value = y.toString();
    return y;
}

function clearScreen(): any {
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    result.value = '';
}

