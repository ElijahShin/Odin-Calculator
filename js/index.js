let value1 = '', 
    value2 = '',
    operator = '',
    isOpClickedLast = false;
    opCount = 0;

    const SCREEN_DEFAULT = 0;

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

  if(operator === '÷' && toNum02 === 0) {

    return 'HAHAHA';

  }
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
          displayValue(value2);
        } else {
          value1 += e.target.textContent;
          displayValue(value1);
        }

      } else if(e.target.value ==='operator') {
        if(opCount >= 1 && value1 !=='' && value2 !=='') {
          result = operate(value1, value2, operator);
          value1 = result;
          value2 = '';
          displayValue(result);
        }
        //Makes value1 zero when operator is clicked without inputting the first number (Eg. '0 x 5' instead of ' x 5')
        if(value1 === '') {
          value1 = 0;
          displayValue(value1);
        }
        operator = e.target.textContent;
        isOpClickedLast = true;
        opCount++;

      } else if(e.target.value === 'equal') {
        if(value1 !== '' && value2 !== '') {
          result = operate(value1, value2, operator);
          console.log('Equals ' + result);
          displayValue(result);
          // dataReset();
        }
      } else if(e.target.value === 'AC') {
        dataReset();
        displayValue(SCREEN_DEFAULT);
      }
      console.log("value1: " + value1 + " " + operator + " " + '\nvalue2: ' + value2);
    })
  });

  
}

function displayValue(value) {
  const screenWrapper = document.querySelector('.screen-wrapper');

  screenWrapper.textContent = value;
}

function dataReset() {
  value1 = '';
  value2 = '';
  operator = '';
  isOpClickedLast = false;
  opCount = 0;
}

btnClick();