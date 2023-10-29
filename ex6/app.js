function calcularPagamento() {
    var nome = document.getElementById("nome").value;
    var valorHora = parseFloat(document.getElementById("valorHora").value);
    var horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);

    var pagamento = valorHora * horasTrabalhadas;
    var pagamentoFormatado = pagamento.toFixed(2);

    document.getElementById("resultado").textContent = "O pagamento para " + nome + " deve ser " + pagamentoFormatado;
}