function calcularAumento() {
    var salario = parseFloat(document.getElementById("salario").value);
    var novoSalario = 0;
    var aumento = 0;
    var porcentagem = 0;

    if (salario <= 999.00) {
        aumento = salario * 0.20;
        porcentagem = 20;
    } else if (salario >= 1000.00 && salario <= 2999.00) {
        aumento = salario * 0.15;
        porcentagem = 15;
    } else if (salario >= 3000.00 && salario <= 7999.00) {
        aumento = salario * 0.10;
        porcentagem = 10;
    } else {
        aumento = salario * 0.05;
        porcentagem = 5;
    }

    novoSalario = salario + aumento;

    document.getElementById("novo-salario").innerHTML = "Novo salário = R$ " + novoSalario.toFixed(2);
    document.getElementById("aumento").innerHTML = "Aumento = R$ " + aumento.toFixed(2);
    document.getElementById("porcentagem").innerHTML = "Porcentagem = " + porcentagem + " %";
}