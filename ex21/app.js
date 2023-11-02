function mostrarPares() {
    var valorX = parseInt(document.getElementById("valor-x").value);
    var resultado = "";

    for (var i = 2; i <= valorX; i += 2) {
        resultado += i + "\n";
    }

    document.getElementById("resultado").textContent = resultado;
}