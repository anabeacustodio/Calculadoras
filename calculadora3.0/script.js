const calcular = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
          return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
    default:
      return "Operador Inválido";
  }
};

let num1 = parseFloat(prompt("Insira o primeiro número"));
let operator = prompt("Escolha um desses operadores [+, -, /, *] ");
let num2 = parseFloat(prompt("Insira o segundo número"));

let resultadoCalculado = calcular(operator, num1, num2);

document.getElementById("resultado").innerHTML = `Resultado: ${resultadoCalculado}`;