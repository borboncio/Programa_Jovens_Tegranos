function calcularSomaImpares() {
    var x = parseInt(document.getElementById("numero-x").value);
    var y = parseInt(document.getElementById("numero-y").value);
    var somaImpares = 0;

    // Garante que x seja o menor valor e y o maior
    if (x > y) {
        var temp = x;
        x = y;
        y = temp;
    }

    for (var i = x; i <= y; i++) {
        if ((i % 2) !== 0) {
            somaImpares += i;
        }
    }

    document.getElementById("resultado").textContent = "SOMA DOS ÍMPARES = " + somaImpares;
}