function calcularConta() {
    var minutos = parseInt(document.getElementById("minutos").value);
    var valorBasico = 50.00;
    var franquiaMinutos = 100;
    var custoExcedentePorMinuto = 2.00;
    var valorAPagar = valorBasico;

    if (minutos > franquiaMinutos) {
        var minutosExcedentes = minutos - franquiaMinutos;
        var custoExcedente = minutosExcedentes * custoExcedentePorMinuto;
        valorAPagar += custoExcedente;
    }

    document.getElementById("resultado").innerHTML = "Valor a pagar: R$ " + valorAPagar.toFixed(2);
}