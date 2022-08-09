palindromo("arara");
palindromo("aba");
palindromo("radar");
palindromo("anao");
palindromo("bola");
palindromo("cao");
function palindromo(s) {
  if (s.length <= 1) {
    return console.log(" é palindromo");
  }
  for (var i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) === s.charAt(j)) {
      console.log(s + " é palindromo");
      return;
    }
  }
  console.log(s + " não é palindromo");
}
