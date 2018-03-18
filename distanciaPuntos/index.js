//const Punto = require('./puntoFunc');
//const Punto = require('./puntoObjectCreate');
const Punto = require('./puntoClass');

//const p1 = new Punto(0, 4);
//const p2 = new Punto(3, 0);

//const p1 = Object.create(Punto);
//p1.init(0, 4);
//const p2 = Object.create(Punto);
//p2.init(3, 0);

const p1 = new Punto(0, 4);
const p2 = new Punto(3, 0);

console.log(p1.distancia(p2));
