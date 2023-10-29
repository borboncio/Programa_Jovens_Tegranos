function verificarMultiplos() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
        document.getElementById("resultado").innerHTML = "São múltiplos.";
    } else {
        document.getElementById("resultado").innerHTML = "Não são múltiplos.";
    }
}