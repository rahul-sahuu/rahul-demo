let display = document.getElementById('display');
let currentValue = '';
let operator = null;
let previousValue = '';

function appendValue(value) {
  currentValue += value;
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = '';
  previousValue = '';
  operator = null;
  display.value = '';
}

function operate(op) {
  if (currentValue === '') return;

  if (previousValue !== '') {
    calculate();
  }

  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

function calculate() {
  if (previousValue === '' || currentValue === '' || operator === null) return;

  let result;
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }

  display.value = result;
  currentValue = result.toString();
  previousValue = '';
  operator = null;
}
