function mostrarTabuada() {
    var numeroN = parseInt(document.getElementById("numero-n").value);
    var resultado = "";

    for (var i = 1; i <= 10; i++) {
        resultado += numeroN + " x " + i + " = " + (numeroN * i) + "\n";
    }

    document.getElementById("resultado").textContent = resultado;
}