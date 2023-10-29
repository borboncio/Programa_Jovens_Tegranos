function encontrarMaiorDistancia() {
    var distancia1 = parseFloat(document.getElementById("distancia1").value);
    var distancia2 = parseFloat(document.getElementById("distancia2").value);
    var distancia3 = parseFloat(document.getElementById("distancia3").value);

    var maiorDistancia = Math.max(distancia1, distancia2, distancia3);

    document.getElementById("resultado").innerHTML = "MAIOR DISTÂNCIA = " + maiorDistancia.toFixed(2);
}