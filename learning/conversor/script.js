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
