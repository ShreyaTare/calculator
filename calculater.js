document.getElementById('clearBtn').addEventListener('click', clearResult);
document.getElementById('backspaceBtn').addEventListener('click', backspace);
document.getElementById('equalBtn').addEventListener('click', calculate);

//this fun for added input for calculation
function addToResult(value) {
    //document.getElementById('result').value += value;
 var result = document.getElementById('result');
 result.value += value;
}
//clear the data
function clearResult() {
    document.getElementById('result').value = '';
}

//backspace
function backspace() {
    var result = document.getElementById('result');
    var currentValue = result.value;
    
    if (currentValue.length > 0) {
        result.value = currentValue.substr(0, currentValue.length - 1);
    }
}
//calculation
function calculate() {
    var expression = document.getElementById('result').value;
    var [num1, operator, num2] = expression.split(/([-+*/])/);
  
    if (!num1 || !operator || !num2) {
      alert('Invalid input!');
      return;
    }
  
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
  
    var result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        alert('Invalid operator!');
        return;
    }
  
    document.getElementById('result').value = result;
  }