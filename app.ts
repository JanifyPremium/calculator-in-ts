
const button: any = document.getElementById('result');

function display(val: string): string {
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    result.value += val;
    return val;
}

function solve(): number {
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    const x: string = result.value;
    const y: number = eval(x);
    result.value = y.toString();
    return y;
}

function clearScreen(): void {
    const result: HTMLInputElement = document.getElementById('result') as HTMLInputElement;
    result.value = '';
}

