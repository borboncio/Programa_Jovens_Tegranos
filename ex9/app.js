function converteTempo() {
    var segundos = parseInt(document.getElementById("segundos").value);

    var horas = Math.floor(segundos / 3600);
    var minutos = Math.floor((segundos % 3600) / 60);
    var segundosRestantes = segundos % 60;

    var resultado = horas + ":" + minutos + ":" + segundosRestantes;

    document.getElementById("resultado").innerHTML = resultado;
}