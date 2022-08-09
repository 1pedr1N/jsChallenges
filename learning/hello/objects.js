// Obejetos

var aluno1 = {
  matricula: 3123213132,
  nome: "João",
  curso: "Sistemas de Informação",
  ativo: true,
};

aluno1.dataNascimento = "01/01/2000";
console.log(aluno1.dataNascimento);
delete aluno1.dataNascimento;
var y = null;
var x;

// Arrays

var frutas = ["banana", "laranja", "maça", "uva", "pera", "mamão"];

frutas.push("acerola");
console.log(frutas);
