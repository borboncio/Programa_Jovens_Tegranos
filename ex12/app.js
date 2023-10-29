function calcularRaizes() {
    var a = parseFloat(document.getElementById("coeficienteA").value);
    var b = parseFloat(document.getElementById("coeficienteB").value);
    var c = parseFloat(document.getElementById("coeficienteC").value);

    var delta = b * b - 4 * a * c;

    if (delta >= 0) {
        var x1 = (-b + Math.sqrt(delta)) / (2 * a);
        var x2 = (-b - Math.sqrt(delta)) / (2 * a);

        document.getElementById("resultadoRaizes").innerHTML = "X1 = " + x1.toFixed(4) + "<br>X2 = " + x2.toFixed(4);
    } else {
        document.getElementById("resultadoRaizes").innerHTML = "Esta equação não possui raízes reais";
    }
}