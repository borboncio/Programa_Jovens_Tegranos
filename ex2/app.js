function calcularRetangulo() {
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var areaRetangulo = base * altura;
    var perimetroRetangulo = 2 * (base + altura);
    var diagonalRetangulo = Math.sqrt(base * base + altura * altura);

    document.getElementById("Area").textContent = areaRetangulo.toFixed(4);
    document.getElementById("Perimetro").textContent = perimetroRetangulo.toFixed(4);
    document.getElementById("Diagonal").textContent = diagonalRetangulo.toFixed(4);

}