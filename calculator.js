let numbers = [];
let number1;
let number2;
let opText;
let answer = 0;

const display = document.getElementById('display');

function displayPi() {
  display.textContent = '3.1415926';
}

function displayDec() {
  display.textContent = display.textContent + '.';
}

function storeOp(btnPressed) {
  opText = btnPressed;
}

const operator = {
  add: function(number1, number2) {
  return number1 + number2;
  },
  subtract: function(number1, number2) {
  return number1 - number2;
  },
  multiply: function(number1, number2) {
  return number1 * number2;
  },
  divide: function(number1, number2) {
  return number1 / number2;
  },
  square: function(number1, number2) {
  return number1 ** number2;
  },
  percent: function(number1, number2) {
  return ((number1 / number2) * 100);
  }
}

function displayF(btnPressed) {
  displayNum = Number(btnPressed);
  if (display.textContent === '0') {
    return display.textContent = displayNum;
  } else {
    display.textContent = display.textContent + displayNum;
  }
}

function storeN() {
  numberStore = display.textContent;
  numberStore = Number(numberStore);
  numbers.push(numberStore);
  display.textContent = '';
}

function operate(number1, number2) {
  numberStore = display.textContent;
  numberStore = Number(numberStore);
  numbers.push(numberStore);
  
  number1 = numbers[0];
  number2 = numbers[1];
  if (opText === 'x') {
    answer = operator.multiply(number1, number2);
    numbers.push(answer);
  } else if (opText === '/') {
    answer = operator.divide(number1, number2);
    numbers.push(answer);
  } else if (opText === '+') {
    answer = operator.add(number1, number2);
    numbers.push(answer);
  } else if (opText === '-') {
    answer = operator.subtract(number1, number2);
    numbers.push(answer);
  } else if (opText === 'x^2') {
    answer = operator.square(number1, number2);
    numbers.push(answer);
  } else if (opText === '%') {
    answer = operator.percent(number1, number2);
    numbers.push(answer);
  }
  display.textContent = numbers[2];
  return numbers = [];
}

function clearD() {
  display.textContent = 0;
  return numbers = [];
}