function calcularTerreno() {
    var largura = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var valorMetroQuadrado = parseFloat(document.getElementById("valorMetroQuadrado").value);

    var areaTerreno = largura * comprimento;
    var precoTerreno = areaTerreno * valorMetroQuadrado;

    document.getElementById("resultadoArea").textContent = areaTerreno.toFixed(2);
    document.getElementById("resultadoPreco").textContent = precoTerreno.toFixed(2);
}