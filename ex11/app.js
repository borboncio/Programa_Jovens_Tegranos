function calcularNotaFinal() {
    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value);
    var segundaNota = parseFloat(document.getElementById("segundaNota").value);

    var notaFinal = (primeiraNota + segundaNota) / 2;

    var resultado = "NOTA FINAL = " + notaFinal.toFixed(1);

    if (notaFinal < 60.0) {
        resultado += "<br>REPROVADO";
    }
    else{
        resultado += "<br>APROVADO"
    }

    document.getElementById("resultadoNotaFinal").innerHTML = resultado;
}