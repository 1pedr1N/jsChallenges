function Retangulo(h, w) {
  this.h = h;
  this.w = w;

  this.area = function () {
    return this.h * this.w;
  };
}
var r1 = new Retangulo(10, 20);
var r2 = new Retangulo(5, 10);

function RetanguloV2(h, w) {
  this.h = h;
  this.w = w;
}
RetanguloV2.prototype.area = function () {
  return this.h * this.w;
};
var r3 = new RetanguloV2(10, 20);
var r4 = new RetanguloV2(5, 10);
