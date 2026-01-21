let valorDisplay = '0';
let primeiroNumero = null;
let operacaoPendente = null;
let aguardandoSegundoNumero = false;

const display = document.getElementById('display');

function atualizarDisplay() {
    display.innerText = valorDisplay;
}
function atualizarDisplay() {
    display.innerText = valorDisplay.replace('.', ',');
}

function acrescentarNumero(numero) {
    if (aguardandoSegundoNumero) {
        valorDisplay = numero;
        aguardandoSegundoNumero = false;
    } else {
        valorDisplay = valorDisplay === '0' ? numero : valorDisplay + numero;
    }
    atualizarDisplay();
}

function acrescentarDecimal() {
    if (aguardandoSegundoNumero) {
        valorDisplay = '0.';
        aguardandoSegundoNumero = false;
    } else if (!valorDisplay.includes('.')) {
        valorDisplay += '.';
    }
    atualizarDisplay();
}

function escolherOperacao(op) {
    if (operacaoPendente !== null) {
        calcular();
    }
    primeiroNumero = parseFloat(valorDisplay);
    operacaoPendente = op;
    aguardandoSegundoNumero = true;
}

function calcular() {
    if (operacaoPendente === null || aguardandoSegundoNumero) return;

    const segundoNumero = parseFloat(valorDisplay);
    let resultado = 0;

    // Verificação de divisão por zero
    if (operacaoPendente === '/' && segundoNumero === 0) {
        valorDisplay = "Erro";
        operacaoPendente = null;
        primeiroNumero = null;
        aguardandoSegundoNumero = true; // Impede continuar digitando após o erro
        atualizarDisplay();
        return;
    }

    switch (operacaoPendente) {
        case '+': resultado = primeiroNumero + segundoNumero; break;
        case '-': resultado = primeiroNumero - segundoNumero; break;
        case '*': resultado = primeiroNumero * segundoNumero; break;
        case '/': resultado = primeiroNumero / segundoNumero; break;
    }

    // Arredondamento para evitar números gigantescos (ex: 0.1 + 0.2)
    valorDisplay = parseFloat(resultado.toFixed(8)).toString();
    
    operacaoPendente = null;
    primeiroNumero = null;
    aguardandoSegundoNumero = false;
    atualizarDisplay();
}

function limpar() {
    valorDisplay = '0';
    primeiroNumero = null;
    operacaoPendente = null;
    aguardandoSegundoNumero = false;
    atualizarDisplay();
}