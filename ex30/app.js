function converterNumero() {
    var numero = parseInt(document.getElementById("numero").value);

    var unidades = {
        1: "Um",
        2: "Dois",
        3: "Três",
        4: "Quatro",
        5: "Cinco",
        6: "Seis",
        7: "Sete",
        8: "Oito",
        9: "Nove"
    };

    var dezenas = {
        10: "Dez",
        20: "Vinte",
        30: "Trinta",
        40: "Quarenta",
        50: "Cinquenta",
        60: "Sessenta",
        70: "Setenta",
        80: "Oitenta",
        90: "Noventa"
    };

    if (numero < 1 || numero > 99) {
        document.getElementById("resultado").textContent = "Número fora do intervalo permitido.";
    } else if (numero <= 9) {
        document.getElementById("resultado").textContent = unidades[numero];
    } else if (numero % 10 === 0) {
        document.getElementById("resultado").textContent = dezenas[numero];
    } else {
        var dezena = Math.floor(numero / 10) * 10;
        var unidade = numero % 10;
        document.getElementById("resultado").textContent = dezenas[dezena] + " e " + unidades[unidade];
    }
}


