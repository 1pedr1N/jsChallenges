class Retangulo {
  constructor(h, w) {
    this.h = h;
    this.w = w;
  }

  area() {
    return this.h * this.w;
  }
}
class Quadrado extends Retangulo {
  constructor(dimensao) {
    super(dimensao, dimensao);
  }

  imprimeNome() {
    console.log("quadradinho");
  }
}
var r1 = new Retangulo(10, 20);
var r2 = new Retangulo(5, 10);
