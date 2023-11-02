function calcularContagem() {
    var palavra = document.getElementById("palavra").value.toLowerCase();
    var vogais = 0;
    var consoantes = 0;

    for (var i = 0; i < palavra.length; i++) {
        var letra = palavra[i];
        if (letra >= 'a' && letra <= 'z') {
            if ('aeiou'.includes(letra)) {
                vogais++;
            } else {
                consoantes++;
            }
        }
    }

    document.getElementById("resultado").textContent = "Vogais: " + vogais + "\nConsoantes: " + consoantes;
}