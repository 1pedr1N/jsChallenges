var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var r = document.getElementById("r");

document.addEventListener("input", function soma(n1, n2) {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  r.textContent = isNaN(resultado) ? "Erro" : resultado;
});
