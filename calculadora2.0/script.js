alert('calculando')

let displayValor = "";
let n1 = "";
let operador = null;
let n2 = "";

function inserirNumero(numero) {
  displayValor += numero;
  document.getElementById('display').textContent = displayValor;
}
function selecionarOperador(op) {
    operador = op;
    n1 = displayValor;
    displayValor = '';
}

function calcular() {
  n2 = displayValor; // o número que foi digitado após o operador
  let total = 0;

  // Agora usamos o operador salvo pra decidir qual conta fazer
  if (operador === '+') {
    total = parseFloat(n1) + parseFloat(n2);
  } else if (operador === '-') {
    total = parseFloat(n1) - parseFloat(n2);
  } else if (operador === '*') {
    total = parseFloat(n1) * parseFloat(n2);
  } else if (operador === '/') {
    total = parseFloat(n1) / parseFloat(n2);
  }

  // Mostra o resultado e atualiza os valores
  displayValor = total.toString();
  document.getElementById('display').textContent = displayValor;

  // Prepara pra uma próxima operação
  n1 = displayValor;
  operador = null;
}

function limparTudo() {
  displayValor = "";
  n1 = "";
  n2 = "";
  operador = null;
  document.getElementById('display').textContent = "0";
}

function apagarUltimo() {
  displayValor = displayValor.slice(0, -1);
  document.getElementById('display').textContent = displayValor || "0";
}

function inserirPonto() {
  if (!displayValor.includes(".")) {
    displayValor += ".";
    document.getElementById('display').textContent = displayValor;
  }
}