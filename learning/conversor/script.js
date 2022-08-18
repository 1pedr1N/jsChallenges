function DayToMinutes(x) {
  return x * 24 * 60;
}
function DayToHours(x) {
  return x * 24;
}
function DayToSeconds(x) {
  return x * 24 * 60 * 60;
}
function DayToMiliseconds(x) {
  return x * 24 * 60 * 60 * 1000;
}

function MinutesToDay(x) {
  return x / (24 * 60);
}
function HoursToDay(x) {
  return x / 24;
}
function SecondsToDay(x) {
  return x / (24 * 60 * 60);
}
function MilisecondsToDay(x) {
  return x / (24 * 60 * 60 * 1000);
}
function MlToLiters(x) {
  return x / 1000;
}
function LitersToMl(x) {
  return x * 1000;
}
function DollarToReal(x) {
  return x * 5.14;
}
function RealToDollar(x) {
  return x / 5.14;
}

function Apresetantion(name = "", age = "", country = "") {
  return `Meu nome é ${name}, Eu tenho ${age} anos e moro em ${country}`;
}
function ganhoPorHOra(salario, horas) {
  const ganho = salario / horas;
  return Math.round(ganho);
}
function ganhoPorHoraBRL(salario, horas) {
  const ganho = salario / horas;
  return ganho.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function multiVar() {
  var a = 2;
  var b = 3;
  return a * b;
}
function multiLet() {
  let a = 2;
  let b = 3;
  return a * b;
}
const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length));
console.log(materials.find((material) => material.charAt(0)));

function maiorDeIdade(idade) {
  if (idade >= 18) {
    return alert("Maior de idade");
  } else {
    return alert("Menor de idade");
  }
}

function maiorDeIdade2(idade) {
  return idade >= 18 ? alert("Maior de idade") : alert("Menor de idade");
}

function Promise(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback);
    }),
      1000;
  });
}
function maiorDeIdadeEUA(idade) {
  return idade >= 21 ? alert("Maior de idade") : alert("Menor de idade");
}
function gastoMes(gastoDia) {
  return gastoDia * 30;
}
function gastoDia(gastoMes) {
  return gastoMes / 30;
}
