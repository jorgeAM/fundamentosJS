class Persona {
  constructor(nombre, amigos = []) {
    this.nombre = nombre;
    this.amigos = amigos;
  }

  getAmigos() {
    this.amigos.forEach((amigo) => {
      console.log(`Hola soy ${this.nombre} y ${amigo} es mi amigo`);
    });
  }
}

module.exports = Persona;
