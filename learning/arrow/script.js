function soma(a, b) {
  return a + b;
}

function Retangulo(h, w) {
  this.h = h;
  this.w = w;
  this.area = function () {
    return this.h * this.w;
  };
}

//Codigo em arrow function / Code in arrow function

var somav2 = (a, b) => a + b;
function RetanguloV2(h, w) {
  this.h = h;
  this.w = w;
  this.area = () => this.h * this.w;
}

var r1 = new Retangulo(2, 3);

var imprimeMensagem = (m) => console.log(m);
