function maior(a, b, c) {
  if (a > b && a > c) {
    return alert("A é maior que B e C");
  } else if (b > a && b > c) {
    return alert("B é maior que A e C");
  } else {
    return alert("C é maior que A e B");
  }
}

function menor(a, b, c) {
  var r =
    a < b && a > c
      ? alert("A é menor que B")
      : b < a && b < c
      ? alert("B é menor que A")
      : alert("C é menor que A");
  return r;
}
function formataMes(mes) {
  switch (mes) {
    case 1:
      return "Janeiro";
    case 2:
      return "Fevereiro";
    case 3:
      return "Março";
    case 4:
      return "Abril";
    case 5:
      return "Maio";
    case 6:
      return "Junho";
    case 7:
      return "Julho";
    case 8:
      return "Agosto";
    case 9:
      return "Setembro";
    case 10:
      return "Outubro";
    case 11:
      return "Novembro";
    case 12:
      return "Dezembro";
    default:
      return "Mês inválido";
  }
}
