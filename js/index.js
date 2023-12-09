let value1 = '', 
    value2 = '',
    operator = '', 
    displayValue = '';
    isOpClickedLast = false;
    opCount = 0;

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

function btnClick() {
  const btns = document.querySelectorAll('button');

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      let result = 0;
      if(e.target.value === 'number') {
        if(isOpClickedLast) {
          value2 += e.target.textContent;
        } else {
          value1 += e.target.textContent;
        }

      } else if(e.target.value ==='operator') {
        if(opCount >= 1 && value1 !=='' && value2 !=='') {
          result = operate(value1, value2, operator);
          value1 = result;
          value2 = '';
        }
        operator = e.target.textContent;
        isOpClickedLast = true;
        opCount++;

      } else if(e.target.value === 'equal') {
        result = operate(value1, value2, operator);
        console.log('Equals ' + result);
      }
    })
  });

  
}

btnClick();