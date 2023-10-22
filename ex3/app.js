function calcularIdadeMedia() {
    var nome1 = document.getElementById("nome1").value;
    var idade1 = parseFloat(document.getElementById("idade1").value);
    var nome2 = document.getElementById("nome2").value;
    var idade2 = parseFloat(document.getElementById("idade2").value);

    var idadeMedia = (idade1 + idade2) / 2;

    document.getElementById("resultadoNomes").textContent = nome1 + " e " + nome2;
    document.getElementById("resultadoIdadeMedia").textContent = idadeMedia.toFixed(1);
}