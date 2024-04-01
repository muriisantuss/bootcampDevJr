const calculator = {
  number1: document.getElementById("input1"),
  number2: document.getElementById("input2"),
};

function calculate(operation) {
  const number1 = parseFloat(calculator.number1.value);
  const number2 = parseFloat(calculator.number2.value);

  if (operation == 1){
    result = number1 + number2;
  } 
  if (operation == 2){
    result = number1 - number2;
  } 
  if (operation == 3){
    result = number1 * number2;
  } 
  if (operation == 4){
    result = number1 / number2;
  } 
  document.getElementById("result").setAttribute("value", result);
}
