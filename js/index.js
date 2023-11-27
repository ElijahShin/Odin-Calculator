const dataStore = {
  operand1: '',
  operand2: '',
  operator: '',
  btnValue: '',
  btnType: '',
}

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

function btnClick() {
  const btns = document.querySelectorAll('button');

  btns.forEach(ele => {
    ele.addEventListener('click', event => {
      const eTarget = event.target;
      //First, store the data in the object
      dataStore['btnValue'] = eTarget.textContent;
      identifyType(eTarget.className);
      console.log(dataStore);
      
      displayScreen();
    });
  });
  
}

function displayScreen() {
  const screen = document.querySelector('.screen-wrapper');
  //Perform a empty check later
  screen.textContent = dataStore['btnValue'];
  
}

/*
Identify diferent value types.
*/
function identifyType(className) {

  switch(className) {
    case 'num' :
      dataStore['btnType'] = 'num';
    break;
    case 'operator':
      dataStore['btnType'] = 'operator';
    break;
    case 'dot':
      dataStore['btnType'] = 'dot';
    break;
    case 'equal':
      dataStore['btnType'] = 'equal';
    break;
    case 'format':
      dataStore['btnType'] = 'format';
    break;
  }
}

btnClick();