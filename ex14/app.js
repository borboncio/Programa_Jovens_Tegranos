function calcularTroco() {
    var preco = parseFloat(document.getElementById("preco").value);
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var dinheiro = parseFloat(document.getElementById("dinheiro").value);
    
    var total = preco * quantidade;
    var troco = dinheiro - total;
    
    if (troco >= 0) {
        document.getElementById("resultado").innerHTML = "TROCO = R$ " + troco.toFixed(2);
    } else {
        var falta = -troco;
        document.getElementById("resultado").innerHTML = "DINHEIRO INSUFICIENTE. FALTAM R$ " + falta.toFixed(2) + " REAIS";
    }
}