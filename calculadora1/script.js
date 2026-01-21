console.log("Calculadora simples");

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('[data-number]');

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
  });
});

let currentNumber = '';
let previousNumber = '';
let operator = '';

const operatorButtons = document.querySelectorAll('[data-operator]');

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    operator = button.textContent;
    previousNumber = display.textContent;
    display.textContent = '';
  });
});

const equalsButton = document.querySelector('[data-equals]');

equalsButton.addEventListener('click', () => {
  currentNumber = display.textContent;
  let result;

  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }

  display.textContent = result;
});

const clearButton = document.querySelector('[data-clear]');
clearButton.addEventListener('click', () => {
  display.textContent = '';
  currentNumber = '';
  previousNumber = '';
  operator = '';
});