const calculator = {
  number1: document.getElementById("input1"),
  number2: document.getElementById("input2"),
};

function sum() {
  const number1 = parseFloat(calculator.number1.value);
  const number2 = parseFloat(calculator.number2.value);

  result = number1 + number2;
  document.getElementById("result").setAttribute('value', result)
}
