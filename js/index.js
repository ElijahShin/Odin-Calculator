const dataStore = {
  operand1: '',
  operand2: '',
  operator: '',
  btnValue: '',
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
      dataStore['btnValue'] = event.target.textContent;
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

btnClick();