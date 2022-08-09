//1. declarar variables com let e const

let a = 1;
const b = 1;
a = 2; //funciona pq ta com let
b = 2; //nao funciona pq ta com const
function teste() {
  for (let i = 0; i < 10; i++) {
    console.log("i" + i);
  } //let nao escapa para todo escopo, só se usa dentro dele
  for (var j = 0; j < 10; j++) {} //variavel escapa para todo o escopo
  console.log("j" + j);
}

//2. Usar atribuiçao via desestructuring

let primos = [2, 3, 5, 7, 11, 13];

let curso = {
  nome: "Programação em JavaScript",
  modulos: 4,
  presencial: false,
  turma: 1,
};

let [p1, p2, ...resto] = primos;

let { nome: nomeCurso, turma: turmas, ...rest } = curso;

function imprime({ nome }) {
  console.log(nome);
}
//spread operator
let primos2 = [2, 3, 5, 7, 11, 13];

let curso2 = {
  nome: "Programação em JavaScript",
  modulos: 4,
  presencial: false,
  turma: 1,
};

let primos2add = [1, ...primos2, 17, 19];
let curso2add = { ...curso2, descriçao: "legal" };

//template literals

let d = 2,
  c = 3;
let soma = d + c;
console.log(a + "+" + b + "=" + soma); //menos legivel
console.log(`${d} + ${c} = ${soma}`);
