const relogio = document.getElementById("relogio");
const btn = document.getElementById("btn");
let interval;
function inicializa() {
  interval = setInterval(() => {
    relogio.textContent = formataHora(new Date());
  }, 1000);
  btn.textContent = "Parar";
}
inicializa();
function para() {
  clearInterval(interval);
  interval = undefined;
  btn.textContent = "Iniciar";
}
function iniciaOuPara() {
  if (interval) {
    para();
  } else {
    inicializa();
  }
}
function formataHora(date) {
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds().toString().padStart(2, "0");

  return `${h}:${m}:${s}`;
}
