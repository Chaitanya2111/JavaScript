const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const operators = ['+', '-', '*', '/'];
let currentInput = '';
let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'C') {
            display.value = '';
            currentInput = '';
            expression = '';
        } else if (value === '=') {
            if (currentInput !== '') {
                expression += currentInput;
                const result = evaluateExpression(expression);
                display.value = expression + ' = ' + result;
                expression = '';
                currentInput = result.toString();
            }
        } else {
            currentInput += value;
            display.value = expression + currentInput;
        }
    });
});

function evaluateExpression(expr) {
    try {
        return eval(expr);
    } catch (error) {
        console.error('Error evaluating expression:', error);
        return 'Error';
    }
}
