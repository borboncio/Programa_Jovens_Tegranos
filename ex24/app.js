function ordenarValores() {
    var valores = [];
    for (var i = 1; i <= 5; i++) {
        var valor = parseInt(document.getElementById("valor" + i).value);
        valores.push(valor);
    }

    valores.sort(function (a, b) {
        return a - b;
    });

    document.getElementById("resultado").textContent = "Ordenados: " + valores.join(", ");
}