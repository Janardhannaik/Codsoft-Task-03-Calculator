let result = document.getElementById("result");

function clearScreen() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  if (result.value === "") return;
  const lastChar = result.value[result.value.length - 1];
  if (["+", "-", "*", "/"].includes(lastChar)) {
    result.value = result.value.slice(0, -1) + operator;
  } else {
    result.value += operator;
  }
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    alert("Invalid expression");
  }
}
