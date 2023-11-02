function verificarPalindromo() {
    var entrada = document.getElementById("palavra").value.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reverso = entrada.split('').reverse().join('');

    if (entrada === reverso) {
        document.getElementById("resultado").textContent = "É palíndromo.";
    } else {
        document.getElementById("resultado").textContent = "Não é palíndromo.";
    }
}