function calcularConsumoMedio() {
    var distanciaPercorrida = parseFloat(document.getElementById("distanciaPercorrida").value);
    var combustivelGasto = parseFloat(document.getElementById("combustivelGasto").value);

    var consumoMedio = distanciaPercorrida / combustivelGasto;
    var consumoMedioFormatado = consumoMedio.toFixed(3);

    document.getElementById("resultado").textContent = "Consumo médio = " + consumoMedioFormatado;
}