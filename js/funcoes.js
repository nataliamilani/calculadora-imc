function calculaIMC(peso, altura) {
    var imc = peso / (altura**2);
    return imc;
}

function verificaIMC ( imc ) {
    var situacao = null; //vazio

    if (imc <= 18.5) {
        situacao = 'Abaixo do Peso';
    } else if (imc > 18.5 && imc <= 24.9) {
        situacao = 'Peso Normal';
    } else if (imc > 24.9 && imc <= 29.9) {
        situacao = 'Sobrepeso';
    } else if (imc > 29.9 && imc <= 34.9) {
        situacao = 'Obesidade I';
    } else if (imc > 34.9 && imc <= 39.9) {
        situacao = 'Obesidade II';
    } else {
        situacao = 'Obesidade III';
    }

    return situacao;
}

function mostraPaciente( paciente ) {
    var imc = calculaIMC( paciente.peso, paciente.altura );
    var situacao = verificaIMC(imc);
    
    var spanPeso = document.getElementById("peso");     //<span id="peso"></span>
    spanPeso.innerHTML = paciente.peso;
    
    var spanAltura = document.getElementById("altura"); //<span id="altura"></span>
    spanAltura.innerHTML = paciente.altura;
    
    var spanImc = document.getElementById("imc");      //<span id="imc"></span>
    spanImc.innerHTML = imc.toFixed(1);
    
    var spanSituacao = document.getElementById("situacao");      //<span id="situacao"></span>
    spanSituacao.innerHTML = situacao;    
}

function lePaciente() {
    var inputPeso = document.getElementById("numPeso"); //<input type="number" id="numPeso"....
    var inputAltura = document.getElementById("numAltura"); //<input type="number" id="numAltura"....

    var paciente = {
        peso : inputPeso.value,
        altura : inputAltura.value
    }

    return paciente;
}