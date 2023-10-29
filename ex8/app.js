function calcularAreas() {
    var medidaA = parseFloat(document.getElementById("medidaA").value);
    var medidaB = parseFloat(document.getElementById("medidaB").value);
    var medidaC = parseFloat(document.getElementById("medidaC").value);

    var areaQuadrado = medidaA * medidaA;
    var areaTriangulo = (medidaA * medidaB) / 2;
    var areaTrapezio = ((medidaA + medidaB) * medidaC) / 2;

    var resultado = "ÁREA DO QUADRADO = " + areaQuadrado.toFixed(4) + "<br>";
    resultado += "ÁREA DO TRIÂNGULO = " + areaTriangulo.toFixed(4) + "<br>";
    resultado += "ÁREA DO TRAPÉZIO = " + areaTrapezio.toFixed(4);

    document.getElementById("resultado").innerHTML = resultado;
}