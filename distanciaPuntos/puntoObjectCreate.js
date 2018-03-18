const Punto = {
  init: function (x, y) {
    this.x = x;
    this.y = y;
  },

  moverEnX: function (x) {
    this.x += x;
  },

  moverEnY: function (y) {
    this.y += y;
  },

  distancia: function (p) {
    let x = this.x - p.x;
    let y = this.y - p.y;
    return Math.sqrt((x * x + y * y));
  },
};

module.exports = Punto;
