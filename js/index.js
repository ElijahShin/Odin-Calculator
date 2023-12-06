let value1 = '',
    value2 = '',
    operator = '';

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

function operate(strVal1, strVal2, operator) {
  const toNum01 = +strVal1;
  const toNum02 = +strVal2;

  switch(operator) {
    case '+':
      return add(toNum01, toNum02);
    break;
    case '-':
      return subtract(toNum01, toNum02);
    break;
    case '×':
      return multiply(toNum01, toNum02);
    break;
    case '÷':
      return divide(toNum01, toNum02);
    break;
  }
  
}
