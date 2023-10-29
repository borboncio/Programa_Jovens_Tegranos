function mostrarEntrada() {
    var escala = document.getElementById("escala").value;
    if (escala === "C") {
        document.getElementById("entrada-celsius").style.display = "block";
        document.getElementById("entrada-fahrenheit").style.display = "none";
    } else {
        document.getElementById("entrada-celsius").style.display = "none";
        document.getElementById("entrada-fahrenheit").style.display = "block";
    }
}

function converterTemperatura() {
    var escala = document.getElementById("escala").value;
    var resultadoElement = document.getElementById("resultado");

    if (escala === "C") {
        var tempCelsius = parseFloat(document.getElementById("temp-celsius").value);
        var tempFahrenheit = (tempCelsius * 9/5) + 32;
        resultadoElement.innerHTML = "Temperatura equivalente em Fahrenheit: " + tempFahrenheit.toFixed(2);
    } else {
        var tempFahrenheit = parseFloat(document.getElementById("temp-fahrenheit").value);
        var tempCelsius = (tempFahrenheit - 32) * 5/9;
        resultadoElement.innerHTML = "Temperatura equivalente em Celsius: " + tempCelsius.toFixed(2);
    }
}