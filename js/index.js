let val1 = 0;
let val2 = 0;
let operator = '';

function add(val1, val2) {
  return val1 + val2;
}

function subtract(val1, val2) {
  return val1 - val2;
}

function multiply(val1, val2) {
  return val1 * val2;
}

function divide(val1, val2) {
  return val1 / val2;
}

function mod(val1, val2) {
  return val1 % val2;
}

function operate(val1, val2, operator) {
  switch(operator) {
    case '+':
      console.log(add(val1, val2));
    break;
    case '-':
      console.log(subtract(val1, val2));
    break;
    case '*':
      console.log(multiply(val1, val2));
    break;
    case '/':
      console.log(divide(val1, val2));
    break;
  }
}