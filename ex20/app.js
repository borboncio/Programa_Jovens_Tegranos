function calcularSoma() {
    var numeroInicial = parseInt(document.getElementById("numero-inicial").value);
    var numeroFinal = parseInt(document.getElementById("numero-final").value);
    var resultado = 0;

    for (var i = numeroInicial; i <= numeroFinal; i++) {
        resultado += i;
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}