class Punto{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moverEnX(x) {
    this.x += x;
  }

  moverEnY(y) {
    this.y += x;
  }

  distancia(p) {
    let x = this.x - p.x;
    let y = this.y - p.y;
    return Math.sqrt((x * x + y * y));
  }
}

module.exports = Punto;
