function encontrarMenor() {
    var primeiro = parseInt(document.getElementById("primeiro").value);
    var segundo = parseInt(document.getElementById("segundo").value);
    var terceiro = parseInt(document.getElementById("terceiro").value);

    var menor = Math.min(primeiro, segundo, terceiro);

    document.getElementById("resultado").textContent = "MENOR = " + menor;
}