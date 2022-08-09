var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");
var text = document.getElementById("r");
function soma(n1, n2) {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  if (isNaN(resultado)) {
    resultado.textContent = "Digite um numero valido";
  }
  text.textContent = resultado;
}
