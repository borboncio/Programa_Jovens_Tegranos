function encontrarMenorMaiorValor() {
    var entrada = document.getElementById("valores").value;
    var valores = entrada.split(",").map(Number);

    if (valores.length !== 5) {
        document.getElementById("resultado").textContent = "Digite exatamente 5 valores separados por vírgula.";
    } else {
        var menor = Math.min(...valores);
        var maior = Math.max(...valores);
        document.getElementById("resultado").textContent = "Menor valor: " + menor + " | Maior valor: " + maior;
    }
}