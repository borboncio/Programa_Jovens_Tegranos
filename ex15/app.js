function classificarGlicose() {
    var glicose = parseFloat(document.getElementById("glicose").value);
    var classificacao = "";

    if (glicose <= 100) {
        classificacao = "Normal";
    } else if (glicose > 100 && glicose <= 140) {
        classificacao = "Elevado";
    } else {
        classificacao = "Diabetes";
    }

    document.getElementById("resultado").innerHTML = "Classificação: " + classificacao;
}