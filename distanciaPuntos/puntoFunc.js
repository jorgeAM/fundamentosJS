function Punto(x, y) {
  this.x = x;
  this.y = y;
}

Punto.prototype.moverEnX = function (x) {
  this.x += x;
};

Punto.prototype.moverEnY = function (y) {
  this.y += y;
};

Punto.prototype.distancia = function (p) {
  let x = this.x - p.x;
  let y = this.y - p.y;
  return Math.sqrt((x * x + y * y));
};

module.exports = Punto;
