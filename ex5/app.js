function calcularArea() {
    // Obtém o valor do raio inserido pelo usuário
    var raio = parseFloat(document.getElementById("raio").value);

    // Calcula a área do círculo
    var area = Math.PI * Math.pow(raio, 2);

    // Formata a área para três casas decimais
    var areaFormatada = area.toFixed(3);

    // Exibe o resultado
    document.getElementById("resultado").textContent = "ÁREA = " + areaFormatada;
}