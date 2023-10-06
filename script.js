//Função do Cronômetro
var horas = 0;
var minutos = 0;
var segundos = 0;
var cronometro;

function play(){
    cronometro = setInterval(function(){
        segundos++;
        if (segundos === 60) {
            segundos = 0;
            minutos++;
            if (minutos === 60) {
                minutos = 0;
                horas++;

            }
        }
    atualizarDisplay();
    }, 1000);
}

function pause() {
    clearInterval(cronometro)
}

function reset() {
    horas = 0;
    minutos = 0;
    segundos = 0;
    atualizarDisplay();
}

function atualizarDisplay() {
    document.getElementById('horas').textContent = formatarNumero(horas);
    document.getElementById('minutos').textContent = formatarNumero(minutos);
    document.getElementById('segundos').textContent = formatarNumero(segundos);
}

function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero.toString();
}


//Create by Brenno Ruan