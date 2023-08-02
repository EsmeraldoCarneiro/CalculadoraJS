let display = document.getElementById('result');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    display.value = result;
  } catch (error) {
    display.value = 'Erro';
  }
}
