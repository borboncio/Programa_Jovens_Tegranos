function calcularTroco() {
    var precoProduto = parseFloat(document.getElementById("precoProduto").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var dinheiroRecebido = parseFloat(document.getElementById("dinheiroRecebido").value);

    var totalCompra = precoProduto * quantidade;
    var troco = dinheiroRecebido - totalCompra;

    document.getElementById("resultadoTroco").textContent = troco.toFixed(2);
}